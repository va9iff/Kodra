import { blob } from "./blob.js";
import { number_blob } from "./blobs/number_blob.js";
var main = document.querySelector("#main");
var zero = new blob();
var anoda = new blob();
zero.add(anoda);
main.appendChild(zero.widget);
zero.setActive();
document.querySelector("#add_blob").addEventListener("onclick", function () { return blob.active.add(new blob()); });
document.querySelector("#add_number").addEventListener("onclick", function () { return blob.active.add(new number_blob()); });
document.querySelector("#run").addEventListener("onclick", function () { return zero.resolve(); });
//# sourceMappingURL=app.js.map