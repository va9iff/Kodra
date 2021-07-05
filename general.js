var el = (elementtype = "div", elementclass = null) => {
  let element = document.createElement(elementtype);
  if (elementclass != null) {
    element.classList.add(elementclass);
  }
  return element;
};
