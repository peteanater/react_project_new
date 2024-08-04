
import { useState } from "react";
import "../App.css";

interface Props {
    cities: string[];
    heading: string;
    onSelectItem: (cities: string) => void;
}


function ListGroup( { cities, heading, onSelectItem }:Props )
{
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1) 
    heading = " ";
    
    return (
        <>
            <h1>{heading}</h1>
            { cities.length === 0 && <p>No items found</p> }
            <ul className="list-group">
                { cities.map( ( city, index ) => (
                    <li 
                        className={
                            selectedIndex === index 
                                ? 'list-group-item active' 
                                : 'list-group-item' 
                        } 
                        /*className="list-group-item active"*/
                        key={ city }
                        onClick={ () => {
                            setSelectedIndex( index ) 
                            onSelectItem( city );
                        }}
                    >
                        { city }
                    </li>
                ) ) }
            </ul>

        </>
    );
}

export default ListGroup;