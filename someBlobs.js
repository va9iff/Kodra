class EmptyBlob extends Blob {
  constructor(name) {
    super(); //Blob is core class. it has no ui feature
    this.uiSide(name);
  }
}

class MainBlob extends EmptyBlob {
  constructor(name) {
    super(name); //EmptyBlob is a named (with text) blob
  }
  rmvthisblob() {} //block to remove this blob
}

class CollectorBlob extends EmptyBlob {
  constructor(name) {
    super(name);
  }
  addblob(addingblob) {
    this.widget.classList.add("collectorBlobClass");
    addingblob.widget.style.display = "inline-block";
    addingblob.widget.style.minWidth = "0";

    super.addblob(addingblob);
  }
}

class Num extends EmptyBlob {
  //   constructor() {
  //     super();
  //     this.uiSide();
  //   }
  uiSide() {
    this.Primeui();
    this.val = this.addwid(new innerBlobNumField(9));
  }
  resolve() {
    this.resval = this.val.get();
    alert(this.resval);
    return this;
  }
}

class LogBlob extends EmptyBlob {
  uiSide(name) {
    this.Primeui(name);
    this.logtext = new innerBlobText("prrr");
    this.addwid(this.logtext);
  }
  resolve() {
    this.logtext.set(this.prev().name);
  }
}
