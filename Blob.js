import { el } from "./generals.js";
import { text_plugin } from "./plugins/text_plugin.js";
import {remove } from "./generals.js"



class blob {
  name = "blob";
  par = null;
  inside = [];
  pos = 0;
  static active = null;
  resval = 0

  constructor() {
    this.widget = el("button", "blob");
    this.widget.onclick = this.click;
    this.widget.innerHTML = this.name;
  }

  resolve(){
    console.log(this.widget.innerHTML)
    this.resval = this.innerResolve()
    return this
  }

  innerResolve(){
    this.inside.forEach( (innerBlob,   pos) => {
        this.resval = innerBlob.resolve()
    });
    return this
  }

  click = (e) => {
    this.activate();
    e.stopPropagation(); //prevents the parent div's click fire
  };

  add(adding) {
    this.widget.appendChild(adding.widget);
    adding.par = this;
    this.inside.push(adding);
  }

  remove(removing) {
    this.widget.remove();
    remove(this.par.inside, this);
  }

  activate() {
    blob.active.widget.classList.remove("active");
    blob.active = this;
    blob.active.widget.classList.add("active");
  }

  A() {
    //shourcut to get the active blob. not so useful tho
    return blob.active;
  }

  clear(){
    this.widget.innerHTML = ""
  }

  setActive() {
    blob.active = this;
    this.widget.classList.add("active");
  }
}

export { blob };

// blob;
