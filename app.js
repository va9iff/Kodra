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
    this.par = null;
    this.widget = el("div");
    this.widget.classList.add("norm");
    this.inside = [];
    this.widget.onclick = (e) => {
      this.blobClick();
      e.stopPropagation(); //prevents the parent div's click fire
    };
    this.widget.innerHTML = text;
  }
  addblob(addingblob) {
    addingblob.par = this;
    this.inside.push(addingblob);
    this.widget.appendChild(addingblob.widget);
    active.widget.style.zIndex = active.widget.style.zIndex + 1;
  }
  rmvthisblob() {
    active.par.inside.splice(active.par.inside.indexOf(this), 1);
    this.widget.remove();
  }
  makeactiveblob() {
    active.widget.classList.remove("active");
    active = this;
    this.widget.classList.add("active");
  }
  blobClick(e) {
    this.makeactiveblob();
  }
  // removeblob(){}
}
///////////////
class MainBlob extends Blob {
  rmvthisblob() {}
}

document.querySelector("#adder").onclick = (e) => {
  active.addblob(new Blob("Then" + e.pageX));
};

document.querySelector("#adderX").onclick = (e) => {
  active.addblob(new Blob("If"));
};

document.querySelector("#rmver").onclick = (e) => {
  active.rmvthisblob();
};
active = new MainBlob("main");
active.makeactiveblob();
