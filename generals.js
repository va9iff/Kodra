function el(el_type, el_class_name) {
	let new_el = document.createElement(el_type);

	new_el.className = el_class_name;

	return new_el
}

export { el };


function remove(array, element) {
  return array.filter((el) => el !== element);
}

export {remove}