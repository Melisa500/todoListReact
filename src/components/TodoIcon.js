import { ReactComponent as CheackSVG} from "../assets/check.svg"; //Nombrado como CheackSVG
import { ReactComponent as DeleteSVG} from "../assets/delete.svg"; //Nombrado como DeleteSVG



const iconTypes = {
    "check": <CheackSVG/>,
    "delete": <DeleteSVG/>,
}

function TodoIcon(){
    return(
        <span
            className={`Icon Icon-svg Icon-${type}`}
        >
            { iconTypes[type]}
        </span>
    )
}

export { TodoIcon };