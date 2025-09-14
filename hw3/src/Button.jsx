import React from "react";

function Button(props) {
    return (
        <button style={{ backgroundColor: "lightblue", padding: "8px 16px" }}>
            {props.text}
        </button>
    );
}
export default Button;
