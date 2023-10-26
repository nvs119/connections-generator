import { useState } from 'react';
import "./Card.css";
import {Dimensions} from "react-native";

var {height, width} = Dimensions.get('window');

export default function Card({children}) {
    const [buttonText, setButtonText] = useState("");

    const changeText = (text) => setButtonText(text);

    return (
        <div isDraggable={false}>
            <button className="wordBox" 
            width={width / 2}
            height={height / 5}
            onClick={() => changeText("newText")}>
                <h3>test</h3>
                {children}
            </button>  
        </div>
    )
}