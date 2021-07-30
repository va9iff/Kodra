import { blob } from "./../blob.js";
import { el } from "./../generals.js";
import { number_plugin } from "./../plugins/number_plugin.js";

class number_blob extends blob {
	constructor() {
		super()
		this.clear()
		this.val = new number_plugin().add_to(this)
	}
	add(){

	}
}

export { number_blob };
