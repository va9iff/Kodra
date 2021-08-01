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
import { plugin } from "./../plugin.js";
var inline_plugin = /** @class */ (function (_super) {
    __extends(inline_plugin, _super);
    function inline_plugin(inner_plugin) {
        var _this = _super.call(this) || this;
        _this.clear();
        _this.widget.style.display = "inline";
        // inner_plugin.widget.style.display = "inline";
        _this.widget.appendChild(inner_plugin.widget);
        return _this;
    }
    inline_plugin.prototype.get = function () {
        var _a;
        return (_a = this.inner_plugin).get.apply(_a, Array(arguments));
    };
    return inline_plugin;
}(plugin));
export { inline_plugin };
//# sourceMappingURL=inline.js.map