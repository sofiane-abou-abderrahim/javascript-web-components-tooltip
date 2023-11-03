class Tooltip extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const tooltipIcon = document.createElement('span');
    tooltipIcon.textContent = ' (?)';
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    this.appendChild(tooltipIcon);
  }

  _showTooltip() {
    const tooltipContainer = document.createElement('div');
    tooltipContainer.textContent = 'This is the tooltip text!';
    this.appendChild(tooltipContainer);
  }
}

customElements.define('uc-tooltip', Tooltip);
