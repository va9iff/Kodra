import { blob } from "./blob.js";
import { number_blob } from "./blobs/number_blob.js";

var main = document.querySelector('#main')

let zero = new blob()

let anoda = new blob()


zero.add(anoda)

main.appendChild(zero.widget)

zero.setActive()

document.querySelector('#add_blob').onclick = () => zero.constructor.active.add(new blob())
document.querySelector('#add_number').onclick = () => zero.constructor.active.add(new number_blob())
document.querySelector('#run').onclick = () => zero.resolve()