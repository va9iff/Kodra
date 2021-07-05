class EmptyBlob extends Blob {
  constructor(name) {
    super(); //Blob is core class. it has no ui feature
    this.uiSide(name); //but empty blob calls uiSide func
  }
}

class MainBlob extends EmptyBlob {
  constructor() {
    super("Main"); //EmptyBlob is a named (with name) blob
  }
  rmvthisblob() {
    null;
  } //block to remove this blob
}

class CollectorBlob extends EmptyBlob {
  constructor() {
    super("Collector");
  }
  addblob(addingblob) {
    this.widget.classList.add("collectorBlobClass");
    addingblob.widget.style.display = "inline-block";
    addingblob.widget.style.minWidth = "0";

    super.addblob(addingblob);
  }
}

class Num extends EmptyBlob {
  Primeui() {
    this.generalUI("Number"); //the given parameter turns its name
  }
  uiSide() {
    this.Primeui();
    this.val = this.addwid(new innerBlobNumField(0));
  }
  resolve() {
    this.resval = this.val.get();
    return this;
  }
}

class Add extends Num {
  Primeui() {
    this.generalUI("Add");
  }
  resolve() {
    this.resval = this.prev().resval + this.val.get();
    return this;
  }
}

class LogBlob extends EmptyBlob {
  uiSide(name) {
    this.generalUI(name);
    this.logtext = new innerBlobText("prrr");
    this.logtext2 = new innerBlobText("prrr");
    this.addwid(this.logtext);
    this.addwid(this.logtext2);
  }
  resolve() {
    this.logtext.set(this.prev().name);
    this.logtext2.set(`res val is ${this.prev().resval}`);
    // alert(this.prev().resval);
  }
}
