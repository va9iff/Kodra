import { blob } from "./blob.js";

class plugin {
  widget: HTMLElement;
  plugins = [];

  constructor() {
    this.widget = document.createElement("div");
    this.widget.innerHTML = "empty plugin";
  }
  add_to(adding_to: blob | plugin): this {
    // adds to the widget of given blob or plugin and pugs
    this.plug(adding_to);
    adding_to.widget.appendChild(this.widget);
    return this;
  }
  plug(pluggable: plugin | blob) {
    pluggable.plugins.push(this);
  }
  append_to(wid: HTMLElement) {
    // appends to an exact element
    wid.appendChild(this.widget);
    return this;
  }
  clear(): this {
    // clear all the texts and elements
    this.widget.innerHTML = "";
    return this;
  }
  inline(): this {
    // converts the plugin into a inline plugin
    this.widget.style.display = "inline";
    return this;
  }
}

export { plugin };
