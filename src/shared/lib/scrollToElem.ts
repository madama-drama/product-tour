export const scrollToElem = (elem: Element, topShift = 0) => {
  if (!elem) {
    return null;
  }

  const coord = elem.getBoundingClientRect();

  window.scrollTo({
    top: window.scrollY + coord.top - topShift,
    behavior: "instant",
  });

  console.log('after', window.scrollY);
};
