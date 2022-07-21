import { useDispatch } from "react-redux";
import { useAppSelector } from "../../store/AppHook";
import { SelectNumber, setMax, setMin } from "../../store/number/NumberSlice";
import Card from "../card/Card";
import "./Interval.css";



const Interval = () => {

    const {min, max} = useAppSelector(SelectNumber);

    const dispatch = useDispatch();

    const setValueMin = (value: string) => {
        if (!value) value ="0";
        dispatch(setMin(parseInt(value)));
    }
    
    const setValueMax = (value: string) => {
        if (!value) value ="0";
        dispatch(setMax(parseInt(value)));
    }
    return <Card title="Number Inverval" red>
        <div className="Interval">
            <span>
                <strong>Minimum:</strong>
                <input type="number" value={min} onChange={(e) => setValueMin(e.target.value)}/>
            </span>
            <span>
                <strong>Maximum:</strong>
                <input type="number" value={max} onChange={(e) => setValueMax(e.target.value)}/>
            </span>
        </div>
    </Card>
}

export default Interval;