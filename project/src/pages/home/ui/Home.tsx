import React, { useEffect } from "react";
import { create } from "zustand";

import Style from "./Home.module.css";

import { BigRectangleElem } from "../../../widgets/BigRectangleElem";
import { CircleElem } from "../../../widgets/CircleElem";
import { SmallRectangleElem } from "../../../widgets/SmallRectangleElem";
import { SquareElem } from "../../../widgets/SquareElem";
import {
  productTour,
  type IProductTour,
  type Step,
} from "../../../shared/productTour/productTourData";
// import { openPopup } from "../../../shared/productTour/openPopup";

interface IStore {
  productTourData: IProductTour | null;
  setProductTour: (data: IProductTour) => void;
  ind: number;
  step: Step | null;
  changeIndAndStep: (idx: number) => void;
  removeSteps: () => void;
}

const useStore = create<IStore>((set) => ({
  productTourData: null,
  setProductTour: (data: IProductTour) => set({ productTourData: data }),

  ind: 0,
  step: null,
  changeIndAndStep: (ind) =>
    set((state) => ({
      ind,
      step: state.productTourData?.steps[ind],
    })),
  removeSteps: () => set({ step: null, ind: 0 }),
}));

export const Home = () => {
  const setProductTourData = useStore((state) => state.setProductTour);

  useEffect(() => {
    setProductTourData(productTour);
  }, []);

  const changeIndAndStep = useStore((state) => state.changeIndAndStep);
  const removeSteps = useStore((state) => state.removeSteps);

  const dataAboutPopup = useStore((state) => state.step);
  const stepNumber = useStore((state) => state.ind);
  const counterOfSteps = useStore((state) => state.productTourData)?.steps
    .length;

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

      {dataAboutPopup ? (
        <div className={Style.popup}>
          <div>
            <h2>{dataAboutPopup?.header}</h2>
            <p onClick={removeSteps}>X</p>
          </div>

          <p>{dataAboutPopup?.description}</p>

          <div>
            <p>
              {stepNumber + 1}/{counterOfSteps}
            </p>
            <button onClick={() => changeIndAndStep(stepNumber - 1)}>
              Назад
            </button>
            <button onClick={() => changeIndAndStep(stepNumber + 1)}>
              Далее
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
};
