import React, {  useRef } from "react";
import { flip, offset, useFloating } from "@floating-ui/react-dom";

import Style from "./ProductTour.module.css";

import { useProductTourStore } from "../../lib/useSTore";
import { Popup } from "../../../widgets/Popup";
import { launchingScroll } from "../../lib/launchingScroll";

export const ProductTour = () => {
  const body = document.body;
  const overflowOriginal = useRef(body.style.overflow);

  const dataAboutPopup = useProductTourStore((state) => state.step);

  const { refs, floatingStyles } = useFloating({
    placement: dataAboutPopup?.popperPlacement,
    middleware: [offset(10), flip()],
  });

  if (!dataAboutPopup) {
    body.style.overflow = overflowOriginal.current;
    return null;
  }

  const elem = document.querySelector(dataAboutPopup.selector);

  if (!elem) {
    return null;
  }

  launchingScroll(elem)
  body.style.overflow = "hidden";

  const absCoord = elem.getBoundingClientRect();

  const st: React.CSSProperties = {
    width: absCoord.width + 20,
    height: absCoord.height + 20,
    top: absCoord.top - 10,
    left: absCoord.left - 10,
  };

  return (
    <>
      <div className={Style.cloak}></div>
      <div
        ref={refs.setReference}
        style={st}
        className={Style.windowBox}
        id="referenceBlock"
      ></div>

      <div
        ref={refs.setFloating}
        style={floatingStyles}
        className={Style.popup}
      >
        <Popup
          header={dataAboutPopup?.header}
          description={dataAboutPopup?.description}
        />
      </div>
    </>
  );
};
