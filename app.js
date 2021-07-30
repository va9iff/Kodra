import { blob } from "./blob.js";
import { el } from "./generals.js";
import { text_plugin } from "./plugins/text_plugin.js";

var main = document.querySelector('#main')

var zero = new blob('zero')

var anoda = new blob('anoda')

main.appendChild(zero.widget)

zero.widget.appendChild(anoda.widget)

// zero.activate()
// active = zero

zero.setActive()

document.querySelector('#add_blob').onclick = () => zero.constructor.active.add(new blob())