import React from "react";

import Style from './CircleElem.module.css'


export const CircleElem = (props: {id: string}) => {
    return(
        <div className={Style.object} id={props.id}>
            <p>Red elem</p>
        </div>
    )
};
