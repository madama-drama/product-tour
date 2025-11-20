import React, { type FC } from "react";

import Style from "./Popup.module.css";
import { useProductTourStore } from "../../../shared/lib/useSTore";

interface IProps {
  header: string | undefined;
  description: string | undefined;
}
export const Popup: FC<IProps> = ({ header, description }) => {
  const stepNumber = useProductTourStore((state) => state.ind);
  const counterOfSteps = useProductTourStore(
    (state) => state.productTourData?.steps.length
  );
  const removeSteps = useProductTourStore((state) => state.removeSteps);
  const changeIndAndStep = useProductTourStore(
    (state) => state.changeIndAndStep
  );

  return (
    <div className={Style.popup}>
      <div className={Style.header}>
        <h2>{header}</h2>
        <p onClick={removeSteps}>X</p>
      </div>

      <p>{description}</p>

      <div className={Style.footer}>
        <p>
          {stepNumber + 1}/{counterOfSteps}
        </p>
        {stepNumber === 0 ? (
          <p> </p>
        ) : (
          <button onClick={() => changeIndAndStep(stepNumber - 1)}>
            Назад
          </button>
        )}

        {stepNumber + 1 === counterOfSteps ? (
          <button onClick={removeSteps}>Конец</button>
        ) : (
          <button onClick={() => changeIndAndStep(stepNumber + 1)}>
            Далее
          </button>
        )}
      </div>
    </div>
  );
};
