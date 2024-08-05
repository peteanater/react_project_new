import { ReactNode } from "react";


const Button_Addition = ({ appendNumber }) => {

    const handleClick = () => {
        appendNumber("+");
      };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={handleClick}>+</button>
        </div>
    )
}

export default Button_Addition;