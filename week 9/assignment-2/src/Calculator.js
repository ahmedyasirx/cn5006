import './Calculator.css';
import React, { useState } from 'react';
import Button from './Button';

function Calculator() {
    const [text1, setText] = useState(""); // For calculator input
    const [imageVisible, setImageVisible] = useState(false); // For "Show Me" button

    const handleClick = (e) => {
        try {
            if (e.target.value === "C") {
                setText("");
            } else if (e.target.value === "=") {
                // Safely evaluate the mathematical expression
                setText(Function('"use strict";return (' + text1 + ')')());
            } else {
                setText(text1 + e.target.value);
            }
        } catch (error) {
            alert("Invalid Expression");
        }
    };

    const handleShowMe = () => setImageVisible(!imageVisible); // Toggle image visibility

    const handleSquare = () => {
        try {
            const num = parseFloat(text1); // Parse input as a number
            if (!isNaN(num)) {
                setText((num * num).toString());
            } else {
                alert("Please enter a valid number");
            }
        } catch (error) {
            alert("Error calculating square");
        }
    };

    return (
        <div className="Calculator">
            <div className="screen-row">
                <input type="text" readOnly value={text1} />
            </div>
            {/* Standard Calculator Buttons */}
            <div>
                <Button label="(" ClickHandle={handleClick} />
                <Button label="CE" ClickHandle={handleClick} />
                <Button label=")" ClickHandle={handleClick} />
                <Button label="C" ClickHandle={handleClick} />
            </div>
            <div>
                <Button label="1" ClickHandle={handleClick} />
                <Button label="2" ClickHandle={handleClick} />
                <Button label="3" ClickHandle={handleClick} />
                <Button label="+" ClickHandle={handleClick} />
            </div>
            <div>
                <Button label="4" ClickHandle={handleClick} />
                <Button label="5" ClickHandle={handleClick} />
                <Button label="6" ClickHandle={handleClick} />
                <Button label="-" ClickHandle={handleClick} />
            </div>
            <div>
                <Button label="7" ClickHandle={handleClick} />
                <Button label="8" ClickHandle={handleClick} />
                <Button label="9" ClickHandle={handleClick} />
                <Button label="*" ClickHandle={handleClick} />
            </div>
            <div>
                <Button label="." ClickHandle={handleClick} />
                <Button label="0" ClickHandle={handleClick} />
                <Button label="=" ClickHandle={handleClick} />
                <Button label="/" ClickHandle={handleClick} />
            </div>
            {/* Additional Buttons */}
            <div>
                <Button label="Show Me" ClickHandle={handleShowMe} />
                {imageVisible && (
                    <img
                        src="/me.jpg" // Points to the image in the public folder
                        alt="Your Picture"
                        style={{ width: "150px", margin: "10px" }}
                    />
                )}
            </div>
            <div>
                <Button label="Square" ClickHandle={handleSquare} />
            </div>
        </div>
    );
}

export default Calculator;
