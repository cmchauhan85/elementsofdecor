class OpenBoxCountdown extends HTMLElement {
  connectedCallback() {
    this.endDate = new Date(this.dataset.end);
    this.unitEls = {
      days: this.querySelector('[data-unit="days"]'),
      hours: this.querySelector('[data-unit="hours"]'),
      minutes: this.querySelector('[data-unit="minutes"]'),
      seconds: this.querySelector('[data-unit="seconds"]'),
    };

    if (isNaN(this.endDate.getTime())) {
      this.hidden = true;
      return;
    }

    this.tick();
    this.interval = setInterval(() => this.tick(), 1000);
  }

  disconnectedCallback() {
    clearInterval(this.interval);
  }

  tick() {
    const diff = this.endDate.getTime() - Date.now();

    if (diff <= 0) {
      clearInterval(this.interval);
      this.hidden = true;
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const minutes = Math.floor((diff % 3600000) / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);

    this.unitEls.days.textContent = String(days).padStart(2, '0');
    this.unitEls.hours.textContent = String(hours).padStart(2, '0');
    this.unitEls.minutes.textContent = String(minutes).padStart(2, '0');
    this.unitEls.seconds.textContent = String(seconds).padStart(2, '0');
  }
}

customElements.define('open-box-countdown', OpenBoxCountdown);
