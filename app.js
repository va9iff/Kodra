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
    this.par = null;
    this.resval = null;
    this.inside = [];
    this.scope = [];
    this.x = 0;
    this.neste = 0;
    //
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
  // removeblob(){}
}
///////////////
class MainBlob extends Blob {
  rmvthisblob() {}
}
// ///////////////
// class Num extends Blob {
//   rmvthisblob() {}
// }

document.querySelector("#adder").onclick = (e) => {
  active.addblob(new Blob("Then" + e.pageX));
};

document.querySelector("#adderX").onclick = (e) => {
  active.addblob(new Blob("If"));
};

document.querySelector("#rmver").onclick = (e) => {
  active.rmvthisblob();
};

document.querySelector("#run").onclick = (e) => {
  TheMainBlob.resolve();
};

TheMainBlob = new MainBlob("main");
active = TheMainBlob;
active.makeactiveblob();
