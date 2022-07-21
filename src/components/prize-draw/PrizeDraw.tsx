import { useAppSelector } from "../../store/AppHook";
import { SelectNumber } from "../../store/number/NumberSlice";
import Card from "../card/Card";
//import {Appli} from "../../store/StoreConfig"

const PrizeDraw = () => {
    
    const {min, max} = useAppSelector(SelectNumber);

    const prizeDraw: number = Math.ceil(Math.random() * (max -min)) + min;
    return <Card title="Number Prize Draw" purple>
        <div className="Interval">
            <span>
                <span>Result: </span>
                <strong>{prizeDraw}</strong>
            </span>
        </div>
    </Card>
}

export default PrizeDraw;