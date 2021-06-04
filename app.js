main = document.querySelector("#main");

el = (elementtype = "div", elementclass = null, adding = main) => {
  let element = document.createElement(elementtype);
  if (elementclass != null) {
    element.classList.add(elementclass);
  }
  if (adding != null) {
    adding.appendChild(element);
  }
  return element;
};

var active = null;

class Blob {
  constructor(text) {
    this.text = text;
    this.widget = el("div");
    this.widget.classList.add("norm");
    this.inside = [];
    this.widget.onclick = (e) => {
      this.blobClick();
      e.stopPropagation(); //prevents the parent div's click fire
    };
    this.widget.innerHTML = text;
  }
  add(addingblob) {
    this.inside.push(addingblob);
    this.widget.appendChild(addingblob.widget);
    active.widget.style.zIndex = active.widget.style.zIndex + 1;
  }
  makeactiveblob() {
    active.widget.classList.remove("active");
    active = this;
    this.widget.classList.add("active");
  }
  blobClick(e) {
    this.makeactiveblob();
  }
}

document.querySelector("#adder").onclick = (e) => {
  active.add(new Blob(e));
};

document.querySelector("#rmver").onclick = (e) => {
  active.widget.remove();
};
active = new Blob("a");
new Blob("v");
new Blob("c");
