import { scrollToElem } from "./scrollToElem";

export const launchingScroll = (elem: Element) => {
  const windowHeight = document.documentElement.clientHeight;

  const locationElem = elem.getBoundingClientRect();

  if (locationElem.bottom > windowHeight || locationElem.top<0) {
    scrollToElem(elem, 20);
  }
};
