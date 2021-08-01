function el(el_type, el_class_name) {
    if (el_class_name === void 0) { el_class_name = ""; }
    var new_el = document.createElement(el_type);
    new_el.className = el_class_name;
    return new_el;
}
export { el };
function remove(array, element) {
    return array.filter(function (el) { return el !== element; });
}
export { remove };
//# sourceMappingURL=generals.js.map