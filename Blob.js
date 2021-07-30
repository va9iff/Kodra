import { el } from "./generals.js";
import { text_plugin } from "./plugins/text_plugin.js";

function remove(array, element) {
  return array.filter((el) => el !== element);
}


class blob {
  name = "blob";
  par = null;
  inside = [];
  pos = 0;
  active = null

  constructor(t='blob') {
    this.widget = el("button", "blob");
    this.widget.onclick = this.click;
    this.widget.innerHTML=t
  }

  click = (e) => {
    // alert(this.constructor.name);
    // alert(this.name);
    // alert(this.widget.innerHTML);
    this.activate()
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

  activate(){
    this.constructor.active.widget.classList.remove('active')
    this.constructor.active = this
    this.constructor.active.widget.classList.add('active')
  }

  setActive(){
    this.constructor.active = this
    this.widget.classList.add('active')
  }
}

export { blob };

// blob;
