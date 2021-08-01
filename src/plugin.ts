import { el } from "./generals.js";

class plugin {
  widget: HTMLElement;

  constructor() {
    this.widget = el("div");
    this.widget.innerHTML = "empty plugin";
  }
  add_to(adding_to) {
    adding_to.widget.appendChild(this.widget);
    return this;
  }
}

export { plugin };
