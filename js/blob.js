import { el } from "./generals.js";
import { remove } from "./generals.js";
var blob = /** @class */ (function () {
    function blob() {
        var _this = this;
        this.name = "blob";
        this.par = null;
        this.inside = [];
        this.pos = 0;
        this.val = 0;
        this.resval = 0;
        this.click = function (e) {
            _this.activate();
            e.stopPropagation(); //prevents the parent div's click fire
        };
        this.widget = el("button", "blob");
        this.widget.onclick = this.click;
        this.widget.innerHTML = this.name;
    }
    blob.prototype.resolve = function () {
        console.log(this.widget.innerHTML);
        this.resval = this.innerResolve();
        return this;
    };
    blob.prototype.innerResolve = function () {
        var _this = this;
        this.inside.forEach(function (innerBlob, pos) {
            _this.resval = innerBlob.resolve();
        });
        return this;
    };
    blob.prototype.add = function (adding) {
        this.widget.appendChild(adding.widget);
        adding.par = this;
        this.inside.push(adding);
    };
    blob.prototype.remove = function (removing) {
        this.widget.remove();
        remove(this.par.inside, this);
    };
    blob.prototype.activate = function () {
        blob.active.widget.classList.remove("active");
        blob.active = this;
        blob.active.widget.classList.add("active");
    };
    blob.prototype.A = function () {
        //shourcut to get the active blob. not so useful tho
        return blob.active;
    };
    blob.prototype.clear = function () {
        this.widget.innerHTML = "";
    };
    blob.prototype.setActive = function () {
        blob.active = this;
        this.widget.classList.add("active");
    };
    blob.active = null;
    return blob;
}());
export { blob };
// blob;
//# sourceMappingURL=blob.js.map