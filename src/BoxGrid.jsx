import { useState } from "react";
import Box from "./Box";
import "./BoxGrid.css"
export default function BoxGrid() {
    const [boxes, setBoxes] = useState([true, false, false, false, false, false, false, false, false]);
    function toggleBox(idx) {
        setBoxes((oldBoxes) => {
            return oldBoxes.map((value, index) => {
                if (index === idx) {
                    return !value;
                } else {
                    return value;
                }
            });
        });
    };
    function reset() {
        setBoxes([false, false, false, false, false, false, false, false, false])
    };

    return (
        <div className="boxGrid">
            {boxes.map((box, idx) => <Box key={idx} isActive={box} toggle={() => toggleBox(idx)} />)}
            <button onClick={reset}>Reset</button>
        </div>
    );
}