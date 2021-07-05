class innerBlobText {
  constructor(text) {
    this.widget = el("p");
    this.widget.innerHTML = text;
  }
  set(text) {
    this.widget.innerHTML = text;
  }
  get() {
    return this.widget.innerHTML;
  }
}

class innerBlobNumField {
  constructor(text) {
    this.widget = el("input", "numput");
    this.widget.type = "number";
    this.widget.value = text;
  }
  set(text) {
    this.widget.value = text;
  }
  get() {
    return parseInt(this.widget.value);
  }
}
