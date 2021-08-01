// import { blob } from "./../../blob.js";
import { inline_blob } from "./../../blobs/inline_blob.js";
import { number_plugin } from "./../../plugins/number_plugin.js";
import { text_plugin } from "./../../plugins/text_plugin.js";

class math_blob extends inline_blob {
  name = "math_blob";
  op;
  val;
  constructor() {
    super();
    this.clear();
    this.op = new text_plugin("+-*/").inline().add_to(this);
    this.val = new number_plugin(9).inline().add_to(this);
  }
  add() {}
  resolve() {
    this.resval = this.val.get();
    console.log(this.resval);
    return this.resval;
  }
}

export { math_blob };
