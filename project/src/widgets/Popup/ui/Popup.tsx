import React from "react";

import Style from "./Popup.module.css";
import type { Step } from "../../../shared/productTour/productTourData";

export const Popup = (props: { data: Step | null }) => {
  // const {id, header, description, selector, poperPlacement} = props.data
  return (
    <div className="">
      <div>
        <h2>{props.data?.header}</h2>
        <p>X</p>
      </div>

      <p>{props.data?.description}</p>

      
    </div>
  );
};
