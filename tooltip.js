class Tooltip extends HTMLElement {
  constructor() {
    super();
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    this.appendChild(tooltipIcon);
  }
}

customElements.define('uc-tooltip', Tooltip);
