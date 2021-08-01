import { blob } from "./blob.js";
import { number_blob } from "./blobs/number_blob.js";
import { unremovable_blob } from "./blobs/unremovable_blob.js";
var main = document.querySelector("#main");
var zero = new unremovable_blob();
var anoda = new blob();
zero.add(anoda);
main.appendChild(zero.widget);
zero.setActive();
document.querySelector("#add_blob").addEventListener("click", function () { return blob.active.add(new blob()); });
document.querySelector("#add_number").addEventListener("click", function () { return blob.active.add(new number_blob()); });
document.querySelector("#run").addEventListener("click", function () { return zero.resolve(); });
document.querySelector("#remove").addEventListener("click", function () { return blob.active.remove(); });
//# sourceMappingURL=app.js.map