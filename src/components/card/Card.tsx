import { PropsWithChildren } from "react";
import "./Card.css";

type CardProps = {
    title?: string;
    red?: boolean;
    green?: boolean;
    blue?: boolean;
    purple?: boolean;
}


const getColor = (props: CardProps): string => {
    if (props.red) return "Red";
    else if (props.green) return "Green";
    else if (props.blue) return "Blue";
    else if (props.purple) return "Purple";
    else return "";
}

const Card = (props: PropsWithChildren<CardProps>) => {

    const nameClass = `Card ${getColor(props)}`;

    return <div className={nameClass}>
        <div className="Header">
            <span className="Title">{props.title}</span>
        </div>
        <div className="Content">
            {props.children}
        </div>
    </div>
}

export default Card;