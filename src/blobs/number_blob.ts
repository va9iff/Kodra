// import { blob } from "./../blob.js";
import { inline_blob } from "./../blobs/inline_blob.js";
import { el } from "./../generals.js";
import { number_plugin } from "./../plugins/number_plugin.js";

class number_blob extends inline_blob {
  name = "number_blob";
  constructor() {
    super();
    this.clear();
    this.val = new number_plugin(9).add_to(this);
  }
  add() {}
  resolve() {
    this.resval = this.val.get();
    console.log(this.resval);
    return this.resval;
  }
}

export { number_blob };
