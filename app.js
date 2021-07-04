main = document.querySelector("#main");
var active = null;

el = (elementtype = "div", elementclass = null) => {
  let element = document.createElement(elementtype);
  if (elementclass != null) {
    element.classList.add(elementclass);
  }
  return element;
};

class Blob {
  constructor() {
    this.par = null;
    this.resval = null;
    this.inside = [];
    this.scope = [];
    this.x = 0;
    this.neste = 0;
    // this.uiSide(text);
  }
  // addWidget(widType, widClass, addingTo) {}
  uiSide(text) {
    this.Primeui(text);
    this.PrimeListener();
  }
  PrimeListener() {
    this.widget.onclick = (e) => {
      this.blobClick();
      e.stopPropagation(); //prevents the parent div's click fire
    };
  }
  PrimeWidget() {
    this.widget = el("div");
    this.widget.classList.add("norm");
  }
  Primeui(text) {
    this.PrimeWidget();
    this.PrimeListener();
    this.text = text;
    let blobName = el("p", "blobName");
    blobName.innerHTML = text;
    this.widget.appendChild(blobName);
  }
  resolve() {
    this.innerResolve();
    return this;
  }
  prev() {
    return this.scope[this.scope.indexOf(this) - 1];
  }
  next() {
    return this.scope[this.scope.indexOf(this) + 1];
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
  additswidget(its) {
    this.widget.appendChild(its.widget);
  }
  awid(its) {
    this.widget.appendChild(its.widget);
    return its;
  }
  addwidget(its) {
    this.additswidget(its);
    return this;
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
class CollectorBlob extends EmptyBlob {
  constructor(text) {
    super(text);
  }
  addblob(addingblob) {
    addingblob.par = this;
    addingblob.widget.style.display = "inline-block";
    addingblob.widget.style.minWidth = "0";

    this.inside.push(addingblob);
    this.widget.appendChild(addingblob.widget);
    active.widget.style.zIndex = active.widget.style.zIndex + 1;
  }
}
///////////////
class Num extends Blob {
  constructor() {
    super();
    this.uiSide();
  }
  uiSide() {
    this.PrimeWidget();
    this.PrimeListener();
    this.val = this.awid(new innerBlobNumField(9));
  }
  resolve() {
    this.resval = this.val.get();
    alert(this.resval);
  }
}

///////////////
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
///////////////
class innerBlobNumField {
  constructor(text) {
    this.widget = el("input");
    this.widget.type = "number";
    this.widget.value = text;
  }
  set(text) {
    this.widget.value = text;
  }
  get() {
    return this.widget.value;
  }
}
///////////////
class LogBlob extends Blob {
  constructor(text) {
    super();
    this.uiSide(text);
  }
  uiSide(text) {
    this.Primeui(text);
    this.logtext = new innerBlobText("prrr");
    this.additswidget(this.logtext);
  }
  resolve() {
    this.logtext.set(this.prev().text);
  }
}

//
//
//
//
//
//
//
//
//
//
document.querySelector("#adder").onclick = (e) => {
  active.addblob(new EmptyBlob("Then" + e.pageX));
};

document.querySelector("#adderX").onclick = (e) => {
  active.addblob(new EmptyBlob("If"));
};

document.querySelector("#CollectorBlob").onclick = (e) => {
  active.addblob(new CollectorBlob("CollectorBlob"));
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
document.querySelector("#Log").onclick = (e) => {
  active.addblob(new LogBlob("Log"));
};

TheMainBlob = new MainBlob("main");
active = TheMainBlob;
active.makeactiveblob();
main.appendChild(active.widget);
