export const scrollToElem = (elemId: string, topShift = 0) => {
  const elem = document.getElementById(elemId);
  if (!elem) {
    return null;
  }

  const coord = elem.getBoundingClientRect();

  window.scrollTo({
    top: window.scrollY + coord.top - topShift,
    behavior: "instant",
  });
};
