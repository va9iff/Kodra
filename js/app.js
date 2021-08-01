import { blob } from "./blob.js";
import { math_blob } from "./blobs/math/math_blob.js";
import { number_blob } from "./blobs/number_blob.js";
import { unremovable_blob } from "./blobs/unremovable_blob.js";
var main = document.querySelector("#main");
var zero = new unremovable_blob();
var anoda = new blob();
zero.add(anoda);
main.appendChild(zero.widget);
zero.setActive();
// document.querySelector("#add_blob").addEventListener("click", () => blob.active.add(new blob()));
blob.addAdder(document.querySelector("#buts"));
number_blob.addAdder(document.querySelector("#buts"));
math_blob.addAdder(document.querySelector("#buts"));
document.querySelector("#run").addEventListener("click", function () { return zero.resolve(); });
document.querySelector("#remove").addEventListener("click", function () { return blob.active.remove(); });
// document.querySelector("#add_number").addEventListener("click", () => blob.active.add(new number_blob()));
// document.querySelector("#mathblob").addEventListener("click", () => blob.active.add(new math_blob()));
//# sourceMappingURL=app.js.map