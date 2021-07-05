class Blob {
  constructor() {
    this.par = null;
    this.resval = null;
    this.inside = [];
    this.scope = [];
    this.x = 0;
    this.neste = 0;
    this.name = "blob";
    // this.uiSide(text);
  }
  // just a blob with name
  uiSide(text) {
    this.generalUI(text);
  }
  generalUI(name) {
    this.widget = el("div", "norm");
    this.PrimeListener();
    this.name = name;
    this.blobName = new innerBlobText(name);
    this.addwid(this.blobName);
  }
  PrimeListener() {
    this.widget.onclick = (e) => {
      this.blobClick();
      e.stopPropagation(); //prevents the parent div's click fire
    };
  }
  PrimeWidget() {
    this.widget = el("div", "norm");
  }
  Primeui(name) {
    // this function is for generelasing of most basic (which is name with blob) ui side
    this.generalUI(name);
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
  addwid(its) {
    this.widget.appendChild(its.widget);
    return its; //or its.widget?
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