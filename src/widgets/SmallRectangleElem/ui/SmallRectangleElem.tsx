import Style from './SmallRectangleElem.module.css'

export const SmallRectangleElem = (props: {id: string}) => {
    return(
        <div className={Style.object} id={props.id}>
            <p>Yellow elem</p>
        </div>
    )
};