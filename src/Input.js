import React from "react";
import colorNames from "colornames"

const Input = ({ colorValue, setColorValue, setHexValue, isDark, setIsDark }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <label>Add color name:</label>
            <input
                autoFocus

                type="text"
                placeholder="add color name"
                required

                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
            <button type="button" onClick={() => setIsDark(!isDark)}>
                toggle text
            </button>
        </form>
    );
};

export default Input;
