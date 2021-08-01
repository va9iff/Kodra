var blob = /** @class */ (function () {
    function blob() {
        var _this = this;
        this.name = "blob";
        this.par = null;
        this.inside = [];
        this.plugins = [];
        this.pos = 0;
        this.val = 0;
        this.resval = 0;
        this.click = function (e) {
            // gets bound to its widget's click (is added as listener on click)
            _this.activate();
            e.stopPropagation(); //prevents the parent div's click fire
        };
        this.widget = document.createElement("button");
        this.widget.className = "blob";
        this.widget.onclick = this.click;
        this.widget.innerHTML = this.name;
    }
    blob.prototype.resolve = function () {
        // console.log(this.widget.innerHTML);
        this.resval = this.innerResolve();
        console.log(this.resval);
        return this.resval;
    };
    blob.prototype.innerResolve = function () {
        var _this = this;
        // resolves inner blobs. so, if blob inside, then it goes recursively.
        this.inside.forEach(function (innerBlob, pos) {
            _this.resval = innerBlob.resolve();
        });
        return this.resval;
    };
    blob.prototype.add = function (adding) {
        // adds a blob to 'this'
        this.widget.appendChild(adding.widget);
        adding.par = this;
        this.inside.push(adding);
    };
    blob.prototype.remove = function (removing) {
        // removes 'this' from code (from parent's inside and ui)
        this.widget.remove();
        // remove(this.par.inside, this);
        blob.active.par.inside.splice(blob.active.par.inside.indexOf(this), 1);
    };
    blob.prototype.activate = function () {
        // usually gets activated when a blob clicked. usually determines 'this'
        // as active, so next blob you add will be added to 'this'
        blob.active.widget.classList.remove("active");
        blob.active = this;
        blob.active.widget.classList.add("active");
    };
    blob.prototype.A = function () {
        //shourcut to get the active blob. not so useful tho
        return blob.active;
    };
    blob.prototype.clear = function () {
        var _this = this;
        // clear its widgets and PLUGINS.
        this.widget.innerHTML = "";
        this.plugins.forEach(function (pg) {
            _this.plugins.splice(pg, 1);
        });
    };
    blob.prototype.setActive = function () {
        blob.active = this;
        this.widget.classList.add("active");
    };
    blob.addAdder = function (element) {
        var _this = this;
        var adder = document.createElement("button");
        adder.innerHTML = "add " + this.name;
        adder.addEventListener("click", function () { return blob.active.add(new _this()); });
        console.log(new this());
        element.appendChild(adder);
    };
    blob.active = null;
    return blob;
}());
export { blob };
// blob;
//# sourceMappingURL=blob.js.map