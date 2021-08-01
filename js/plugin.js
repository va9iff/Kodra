import { el } from './generals.js';
var plugin = /** @class */ (function () {
    function plugin() {
        this.widget = el('div');
        this.widget.innerHTML = 'empty plugin';
    }
    plugin.prototype.add_to = function (adding_to) {
        adding_to.widget.appendChild(this.widget);
        return this;
    };
    return plugin;
}());
export { plugin };
//# sourceMappingURL=plugin.js.map