var plugin = /** @class */ (function () {
    function plugin() {
        this.plugins = [];
        this.widget = document.createElement("div");
        this.widget.innerHTML = "empty plugin";
    }
    plugin.prototype.add_to = function (adding_to) {
        // adds to the widget of given blob or plugin and pugs
        this.plug(adding_to);
        adding_to.widget.appendChild(this.widget);
        return this;
    };
    plugin.prototype.plug = function (pluggable) {
        pluggable.plugins.push(this);
    };
    plugin.prototype.append_to = function (wid) {
        // appends to an exact element
        wid.appendChild(this.widget);
        return this;
    };
    plugin.prototype.clear = function () {
        // clear all the texts and elements
        this.widget.innerHTML = "";
        return this;
    };
    plugin.prototype.inline = function () {
        // converts the plugin into a inline plugin
        this.widget.style.display = "inline";
        return this;
    };
    return plugin;
}());
export { plugin };
//# sourceMappingURL=plugin.js.map