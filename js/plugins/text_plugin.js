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
import { plugin } from './../plugin.js';
var text_plugin = /** @class */ (function (_super) {
    __extends(text_plugin, _super);
    function text_plugin(text) {
        var _this = _super.call(this) || this;
        _this.widget.innerHTML = text;
        return _this;
    }
    return text_plugin;
}(plugin));
export { text_plugin };
//# sourceMappingURL=text_plugin.js.map