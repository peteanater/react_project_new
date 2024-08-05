import { ReactNode } from "react";
import { useState } from "react";

function Button({ number, appendNumber }) {

    const handleClick = () => {
        appendNumber(number);
      };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>{number}</button>
        </div>
        );
}

export default Button;