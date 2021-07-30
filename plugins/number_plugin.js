import { plugin } from "./../plugin.js";
import { el } from "./../generals.js";

class number_plugin extends plugin {
	constructor(number) {
		super();

		this.widget = el("input");
		this.widget.type = "number";
		this.widget.value = number;
	}

	set(number) {
		this.widget.value = number;
	}
	get() {
		return this.widget.value;
	}
}

export { number_plugin };
