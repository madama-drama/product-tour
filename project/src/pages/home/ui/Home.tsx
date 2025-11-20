import React, { useEffect } from "react";

import Style from "./Home.module.css";

import { BigRectangleElem } from "../../../widgets/BigRectangleElem";
import { CircleElem } from "../../../widgets/CircleElem";
import { SmallRectangleElem } from "../../../widgets/SmallRectangleElem";
import { SquareElem } from "../../../widgets/SquareElem";
import { productTour } from "../../../shared/lib/productTourData";
import { useProductTourStore } from "../../../shared/lib/useSTore";

export const Home = () => {
  const setProductTourData = useProductTourStore((state) => state.setProductTour);

  useEffect(() => {
    setProductTourData(productTour);
  }, []);

  const changeIndAndStep = useProductTourStore((state) => state.changeIndAndStep);

  return (
    <div className={Style.home}>
      <CircleElem id="red" />
      <BigRectangleElem id="green" />
      <SmallRectangleElem id="yellow" />
      <SquareElem id="blue" />

      <div className={Style.buttons}>
        <button onClick={() => changeIndAndStep(0)}>first</button>
        <button onClick={() => changeIndAndStep(1)}>second</button>
        <button onClick={() => changeIndAndStep(2)}>third</button>
        <button onClick={() => changeIndAndStep(3)}>fourth</button>
      </div>

      
    </div>
  );
};
