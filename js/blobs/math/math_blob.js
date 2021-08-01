var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// import { blob } from "./../../blob.js";
import { inline_blob } from "./../../blobs/inline_blob.js";
import { number_plugin } from "./../../plugins/number_plugin.js";
import { text_plugin } from "./../../plugins/text_plugin.js";
var math_blob = /** @class */ (function (_super) {
    __extends(math_blob, _super);
    function math_blob() {
        var _this = _super.call(this) || this;
        _this.name = "math_blob";
        _this.clear();
        _this.op = new text_plugin("+-*/").inline().add_to(_this);
        _this.val = new number_plugin(9).inline().add_to(_this);
        return _this;
    }
    math_blob.prototype.add = function () { };
    math_blob.prototype.resolve = function () {
        this.resval = this.val.get();
        console.log(this.resval);
        return this.resval;
    };
    return math_blob;
}(inline_blob));
export { math_blob };
//# sourceMappingURL=math_blob.js.map