import React from "react";
import { ReactComponent as CheckSVG} from "./check.svg"; //Nombrado como CheckSVG
import { ReactComponent as DeleteSVG} from "./delete.svg"; //Nombrado como DeleteSVG
import '../TodoIcon/TodoIcon.css';
/* import { CompleteIcon } from "./CompleteIcon";
import { DeleteIcon } from "./DeleteIcon"; */



const iconTypes = {
    "check": (color) => <CheckSVG 
        className="Icon-svg"
        fill={color}
    />,
    "delete": (color) => <DeleteSVG 
        className="Icon-svg"
        fill={color}
    />,
}

function TodoIcon({ type, color, onClick }){
    return(
        <span
            className={`Icon__container Icon__container${type}`}
            onClick={onClick}
        >
            {iconTypes[type](color)}
        </span>
    )
}

export { TodoIcon };