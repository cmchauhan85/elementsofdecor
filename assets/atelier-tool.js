/*
  Atelier "Complete the Look" tool — <atelier-tool> custom element.

  Reads a JSON catalogue of "looks" (emitted by sections/atelier-tool.liquid from
  the `look` metaobject) and lets the customer pick a scene, include/exclude slots,
  swap options, and add the whole look to the cart in one call. Ports the JSX
  `useLook` logic: sel[] (chosen option index per slot), inc[] (included booleans);
  full = Σ included prices; bundle = round(full * (1 - BUNDLE_PCT)); saving = full − bundle.

  Bundle pricing shown here is informational — enforce the actual discount with a
  Shopify automatic discount / Function in the admin (see docs/atelier/phase-3-tool.md).
*/
class AtelierTool extends HTMLElement {
  connectedCallback() {
    try {
      this.looks = JSON.parse(this.querySelector('[data-looks]')?.textContent || '[]');
    } catch (e) {
      this.looks = [];
    }
    this.bundlePct = parseFloat(this.dataset.bundlePct || '0.10');
    this.tiers = this.readTiers();
    this.moneyFormat = this.dataset.moneyFormat || '₹{{amount}}';
    if (!this.looks.length) return;

    this.kind = this.looks[0].kind;
    this.selectLook(this.firstOfKind(this.kind).id, false);

    this.addEventListener('click', this.onClick.bind(this));
  }

  readTiers() {
    try {
      return JSON.parse(this.querySelector('[data-tiers]')?.textContent || '[]')
        .map((t) => ({ ...t, threshold: Number(t.threshold) }))
        .sort((a, b) => a.threshold - b.threshold);
    } catch (e) {
      return [];
    }
  }

  firstOfKind(kind) {
    return this.looks.find((l) => l.kind === kind) || this.looks[0];
  }

  selectLook(id, render = true) {
    this.look = this.looks.find((l) => l.id === id) || this.looks[0];
    this.sel = this.look.slots.map(() => 0);
    this.inc = this.look.slots.map(() => true);
    this.activeId = this.look.id;
    this.swapOpen = -1;
    if (render) this.render();
    else queueMicrotask(() => this.render());
  }

  money(cents) {
    const amount = (cents / 100).toLocaleString('en-IN', { maximumFractionDigits: 0 });
    return this.moneyFormat.replace(/\{\{\s*amount[^}]*\}\}/, amount);
  }

  chosen() {
    return this.look.slots.map((s, i) => ({ slot: s, opt: s.options[this.sel[i]], inc: this.inc[i] }));
  }
  full() {
    return this.chosen().reduce((t, c) => t + (c.inc ? c.opt.price : 0), 0);
  }
  bundle() {
    return Math.round(this.full() * (1 - this.bundlePct));
  }

  milestoneLine(total) {
    const cents = total;
    const next = this.tiers.find((t) => t.threshold * 100 > cents);
    if (!next) return this.tiers.length ? 'All thank-yous unlocked.' : '';
    const remaining = next.threshold * 100 - cents;
    return `This look is ${this.money(remaining)} from the ${next.label}.`;
  }

  onClick(e) {
    const t = e.target.closest('[data-action]');
    if (!t) return;
    const { action } = t.dataset;
    if (action === 'kind') {
      this.kind = t.dataset.kind;
      this.selectLook(this.firstOfKind(this.kind).id);
    } else if (action === 'scene') {
      this.selectLook(t.dataset.id);
    } else if (action === 'toggle') {
      const i = +t.dataset.slot;
      this.inc[i] = !this.inc[i];
      this.render();
    } else if (action === 'swap') {
      const i = +t.dataset.slot;
      this.swapOpen = this.swapOpen === i ? -1 : i;
      this.render();
    } else if (action === 'pick') {
      const i = +t.dataset.slot;
      this.sel[i] = +t.dataset.opt;
      this.swapOpen = -1;
      this.render();
    } else if (action === 'add') {
      this.addToCart();
    }
  }

  async addToCart() {
    const items = this.chosen()
      .filter((c) => c.inc && c.opt.id)
      .map((c) => ({ id: c.opt.id, quantity: 1 }));
    if (!items.length) return;
    const btn = this.querySelector('[data-action="add"]');
    if (btn) btn.setAttribute('aria-busy', 'true');
    try {
      await fetch(`${window.routes?.cart_add_url || '/cart/add'}.js`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ items, attributes: { _atelier_look: this.look.surface } }),
      });
      window.location.href = window.routes?.cart_url || '/cart';
    } catch (err) {
      if (btn) btn.removeAttribute('aria-busy');
    }
  }

  render() {
    const looks = this.looks.filter((l) => l.kind === this.kind);
    const ch = this.chosen();
    const full = this.full();
    const bundle = this.bundle();
    const saving = full - bundle;
    const count = ch.filter((c) => c.inc).length;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.querySelector('[data-scene-picker]').innerHTML = looks
      .map(
        (l) => `
      <button class="atelier-tool__scene${l.id === this.activeId ? ' is-active' : ''}" data-action="scene" data-id="${l.id}">
        <span class="atelier-tool__scene-media">${l.hero ? `<img src="${l.hero}" alt="" loading="lazy">` : ''}</span>
        <span class="atelier-tool__scene-name">${l.surface}</span>
        <span class="atelier-tool__scene-mood">${l.mood || ''}</span>
      </button>`
      )
      .join('');

    const pins = ch
      .map(
        (c, i) => `
      <span class="atelier-tool__pin${c.inc ? ' is-on' : ''}" style="left:${this.look.pins?.[i]?.x || 24 + i * 26}%;top:${this.look.pins?.[i]?.y || 60 - i * 4}%">${i + 1}</span>`
      )
      .join('');
    this.querySelector('[data-scene]').innerHTML = `
      ${this.look.hero ? `<img src="${this.look.hero}" alt="${this.look.surface}">` : ''}
      <div class="atelier-tool__pins">${pins}</div>`;

    this.querySelector('[data-panel]').innerHTML = ch
      .map((c, i) => {
        const swap =
          this.swapOpen === i
            ? `<div class="atelier-tool__swap">${c.slot.options
                .map(
                  (o, oi) =>
                    `<button class="atelier-tool__opt${oi === this.sel[i] ? ' is-active' : ''}" data-action="pick" data-slot="${i}" data-opt="${oi}">${o.img ? `<img src="${o.img}" alt="">` : ''}<span>${o.title}</span><span>${this.money(o.price)}</span></button>`
                )
                .join('')}</div>`
            : '';
        return `
        <div class="atelier-tool__slot${c.inc ? '' : ' is-excluded'}">
          <button class="atelier-tool__inc" data-action="toggle" data-slot="${i}" aria-pressed="${c.inc}" aria-label="Include ${c.slot.label}">${c.inc ? '✓' : ''}</button>
          <span class="atelier-tool__slot-thumb">${c.opt.img ? `<img src="${c.opt.img}" alt="">` : ''}</span>
          <span class="atelier-tool__slot-info">
            <span class="atelier-tool__slot-label">${c.slot.label}</span>
            <span class="atelier-tool__slot-title">${c.opt.title}</span>
            <span class="atelier-tool__slot-sub">${c.opt.sub || ''}</span>
          </span>
          <span class="atelier-tool__slot-price">${this.money(c.opt.price)}</span>
          ${c.slot.options.length > 1 ? `<button class="atelier-tool__swapbtn" data-action="swap" data-slot="${i}">Swap · ${c.slot.options.length}</button>` : ''}
          ${swap}
        </div>`;
      })
      .join('');

    this.querySelector('[data-bundle]').innerHTML = `
      <p class="a-eyebrow a-eyebrow--ochre">Set saving ${Math.round(this.bundlePct * 100)}%</p>
      <p class="atelier-tool__bundle-price">${this.money(bundle)} <s>${this.money(full)}</s></p>
      <p class="atelier-tool__bundle-save">You save ${this.money(saving)} buying these ${count} as a set.</p>
      <p class="atelier-tool__bundle-tier">${this.milestoneLine(bundle)}</p>
      <button class="button atelier-tool__add${reduce ? '' : ' a-anim'}" data-action="add">Add the look · ${this.money(bundle)}</button>`;

    this.querySelectorAll('[data-action="kind"]').forEach((b) =>
      b.classList.toggle('is-active', b.dataset.kind === this.kind)
    );
  }
}
customElements.define('atelier-tool', AtelierTool);
