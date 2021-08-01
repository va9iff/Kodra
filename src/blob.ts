import { el } from "./generals.js";
import { text_plugin } from "./plugins/text_plugin.js";
import { remove } from "./generals.js";

class blob {
  name = "blob";
  par = null;
  inside = [];
  plugins = [];
  pos = 0;
  static active = null;

  val: any = 0;
  resval: any = 0;

  widget: HTMLElement;

  constructor() {
    this.widget = document.createElement("button");
    this.widget.className = "blob";
    this.widget.onclick = this.click;
    this.widget.innerHTML = this.name;
  }

  resolve() {
    // console.log(this.widget.innerHTML);
    this.resval = this.innerResolve();
    console.log(this.resval);
    return this.resval;
  }

  innerResolve() {
    // resolves inner blobs. so, if blob inside, then it goes recursively.
    this.inside.forEach((innerBlob, pos) => {
      this.resval = innerBlob.resolve();
    });
    return this.resval;
  }

  next() {
    return this.par.inside[blob.active.par.inside.indexOf(this) + 1];
  }
  prev() {
    return this.par.inside[blob.active.par.inside.indexOf(this) - 1];
  }

  click = (e) => {
    // gets bound to its widget's click (is added as listener on click)
    this.activate();
    e.stopPropagation(); //prevents the parent div's click fire
  };

  add(adding: blob) {
    // adds a blob to 'this'
    this.widget.appendChild(adding.widget);
    adding.par = this;
    this.inside.push(adding);
  }

  remove(removing) {
    // removes 'this' from code (from parent's inside and ui)
    this.widget.remove();
    // remove(this.par.inside, this);
    blob.active.par.inside.splice(blob.active.par.inside.indexOf(this), 1);
  }

  activate() {
    // usually gets activated when a blob clicked. usually determines 'this'
    // as active, so next blob you add will be added to 'this'
    blob.active.widget.classList.remove("active");
    blob.active = this;
    blob.active.widget.classList.add("active");
  }

  A() {
    //shourcut to get the active blob. not so useful tho
    return blob.active;
  }

  clear() {
    // clear its widgets and PLUGINS.
    this.widget.innerHTML = "";
    this.plugins.forEach((pg) => {
      this.plugins.splice(pg, 1);
    });
  }

  setActive() {
    blob.active = this;
    this.widget.classList.add("active");
  }
  static addAdder(element: HTMLElement) {
    let adder = document.createElement("button");
    adder.innerHTML = "add " + this.name;
    adder.addEventListener("click", () => blob.active.add(new this()));
    console.log(new this());

    element.appendChild(adder);
  }
}

export { blob };

// blob;
