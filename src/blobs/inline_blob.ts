import { blob } from "./../blob.js";

class inline_blob extends blob {
  name = "inline_blob";
  constructor() {
    super();
    this.widget.style.display = "inline";
  }
}

export { inline_blob };
