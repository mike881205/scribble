import { React, useState } from "react";
import './style.css'

const BoardTile = ({ tile }) => {

    const [isHovering, setHover] = useState(false);

    const handleEnter =() => {
        if (tile.open && tile.valid) setHover(true)
    };

   const handleLeave =() => {
        if (isHovering) setHover(false)
   }

    return (
        <div 
        className="tile" 
        id="boardTile" 
        onMouseEnter={() => handleEnter()} 
        onMouseLeave={() => handleLeave()} 
        style={{ backgroundColor: tile.bg, border: !isHovering ? '1px solid black' : '1px solid red' }}
        >
            {/* {tile.type} */}
        </div>
    );

};

export default BoardTile;