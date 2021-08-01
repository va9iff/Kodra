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
var inline_blob = /** @class */ (function (_super) {
    __extends(inline_blob, _super);
    function inline_blob() {
        var _this = _super.call(this) || this;
        _this.name = "inline_blob";
        _this.widget.style.display = "inline";
        return _this;
    }
    return inline_blob;
}(blob));
export { inline_blob };
//# sourceMappingURL=inline_blob.js.map