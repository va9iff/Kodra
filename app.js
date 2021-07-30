import { blob } from "./blob.js";
import { number_blob } from "./blobs/number_blob.js";

var main = document.querySelector('#main')

var zero = new blob('zero')

var anoda = new blob('anoda')

main.appendChild(zero.widget)

zero.widget.appendChild(anoda.widget)

// zero.activate()
// active = zero

zero.setActive()

document.querySelector('#add_blob').onclick = () => zero.constructor.active.add(new blob())
document.querySelector('#add_number').onclick = () => zero.constructor.active.add(new number_blob())