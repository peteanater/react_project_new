import { ReactNode } from "react";


interface Button_CalculateProps {
    appendSummation: () => void;
}

const Button_Calculate = ( { appendSummation } ) => {

    //const handleClick = () => {
  //      appendNumber();
//    };

    return (
        <div>
            <button type="button" className="btn btn-primary" onClick={ () => appendSummation() }>=</button>
        </div>
    )
}

export default Button_Calculate;