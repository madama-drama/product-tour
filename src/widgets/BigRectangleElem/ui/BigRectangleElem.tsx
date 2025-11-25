import Style from './BigRectangleElem.module.css'

export const BigRectangleElem = (props: {id: string}) => {
    return(
        <div className={Style.object} id={props.id}>
            <p>Green elem</p>
        </div>
    )
};
