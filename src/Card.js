import { useState } from 'react';
import "./Card.css";

export default function Card({children}) {
    const [buttonText, setButtonText] = useState("");

    const changeText = (text) => setButtonText(text);

    return (
        <div isDraggable={false}>
            <button className="wordBox" onClick={() => changeText("newText")}>
                <h3>test</h3>
                {children}
            </button>  
        </div>
    )
}