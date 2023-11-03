class Tooltip extends HTMLElement {
  constructor() {
    console.log('It is working!');
  }
}

customElements.define('uc-tooltip', Tooltip);
