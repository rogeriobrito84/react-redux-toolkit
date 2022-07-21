import { useAppSelector } from "../../store/AppHook";
import { SelectNumber } from "../../store/number/NumberSlice";
import Card from "../card/Card";

const Sum = () => {
    const {min, max} = useAppSelector(SelectNumber);
    
    return <Card title="Number Sum" blue>
        <div className="Interval">
            <span>
                <span>Result: </span>
                <strong>{min + max}</strong>
            </span>
        </div>
    </Card>
}

export default Sum;