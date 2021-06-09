main = document.querySelector("#main");

el = (elementtype = "div", elementclass = null) => {
  let element = document.createElement(elementtype);
  if (elementclass != null) {
    element.classList.add(elementclass);
  }
  return element;
};

var active = null;

class Blob {
  constructor(text) {
    this.par = null;
    this.resval = null;
    this.inside = [];
    this.scope = [];
    this.x = 0;
    this.neste = 0;
    //
    // this.uiSide(text);
  }
  // addWidget(widType, widClass, addingTo) {}

  uiSide(text) {
    this.Primeui(text);
  }

  Primeui(text) {
    this.text = text;
    this.widget = el("div");
    this.widget.classList.add("norm");
    //
    this.widget.onclick = (e) => {
      this.blobClick();
      e.stopPropagation(); //prevents the parent div's click fire
    };
    this.widget.innerHTML = text;
  }

  resolve() {
    alert(this.text);
    //
    this.innerResolve();
    return this;
  }
  innerResolve() {
    let _resolved_inner = null;
    for (let x = 0; x < this.inside.length; x++) {
      let innerBlob = this.inside[x];
      innerBlob.x = x;
      innerBlob.neste = this.neste + 1;
      innerBlob.par = this;
      innerBlob.scope = this.inside;
      _resolved_inner = innerBlob.resolve();
    }
    return _resolved_inner;
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
}
///////////////
class EmptyBlob extends Blob {
  constructor(text) {
    super(); //Blob is core class. it has no ui feature
    this.uiSide(text);
  }
}
///////////////
class MainBlob extends EmptyBlob {
  constructor(text) {
    super(text); //EmptyBlob is a named (with text) blob
  }
  rmvthisblob() {} //block to remove this blob
}
// ///////////////
class Num extends Blob {
  constructor() {
    super();
    this.Primeui();
    this.uiSide();
  }
  uiSide() {
    let elelel = el("input");
    elelel.innerHTML = 8234894712890;
    this.widget.appendChild(elelel);
  }
}

document.querySelector("#adder").onclick = (e) => {
  active.addblob(new EmptyBlob("Then" + e.pageX));
};

document.querySelector("#adderX").onclick = (e) => {
  active.addblob(new EmptyBlob("If"));
};

document.querySelector("#rmver").onclick = (e) => {
  active.rmvthisblob();
};

document.querySelector("#run").onclick = (e) => {
  TheMainBlob.resolve();
};

document.querySelector("#btnNumBlob").onclick = (e) => {
  active.addblob(new Num("Then" + e.pageX));
};

TheMainBlob = new MainBlob("main");
active = TheMainBlob;
active.makeactiveblob();
main.appendChild(active.widget);
