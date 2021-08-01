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
import { blob } from "./../blob.js";
import { number_plugin } from "./../plugins/number_plugin.js";
var number_blob = /** @class */ (function (_super) {
    __extends(number_blob, _super);
    function number_blob() {
        var _this = _super.call(this) || this;
        _this.name = "number_blob";
        _this.clear();
        _this.val = new number_plugin(9).add_to(_this);
        return _this;
    }
    number_blob.prototype.add = function () { };
    return number_blob;
}(blob));
export { number_blob };
//# sourceMappingURL=number_blob.js.map