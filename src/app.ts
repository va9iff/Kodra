import { blob } from "./blob.js";
import { number_blob } from "./blobs/number_blob.js";

var main = document.querySelector("#main");

let zero = new blob();

let anoda = new blob();

zero.add(anoda);

main.appendChild(zero.widget);

zero.setActive();

document.querySelector("#add_blob").addEventListener("click", () => blob.active.add(new blob()));
document.querySelector("#add_number").addEventListener("click", () => blob.active.add(new number_blob()));
document.querySelector("#run").addEventListener("click", () => zero.resolve());
