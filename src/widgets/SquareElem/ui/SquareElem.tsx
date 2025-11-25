import Style from './SquareElem.module.css'

export const SquareElem = (props: {id: string}) => {
    return(
        <div className={Style.object} id={props.id}>
            <p>Blue elem</p>
        </div>
    )
};