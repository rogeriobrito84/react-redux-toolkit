import { useAppSelector } from "../../store/AppHook";
import { SelectNumber } from "../../store/number/NumberSlice";
import Card from "../card/Card";

const Average = () => {

    const {min, max} = useAppSelector(SelectNumber);

    return <Card title="Number Average" green>
        <div className="Interval">
            <span>
                <span>Result: </span>
                <strong>{(min + max)/2}</strong>
            </span>
        </div>
    </Card>
}

export default Average;