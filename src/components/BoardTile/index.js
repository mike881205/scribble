import { React, useState } from "react";
import './style.css'

const BoardTile = ({ Tile, selectBoardTile, selections }) => {

    const [isHovering, setHover] = useState(false);

    const handleEnter = () => {
        if (selections.Letter && Tile.open && Tile.valid) setHover(true);
    };

    const handleLeave = () => {
        if (isHovering) setHover(false);
    };

    const handleClick = () => {
        if (selections.Letter && Tile.open && Tile.valid) {
            selectBoardTile(Tile.id);
        };
    };

    return (
        <div
            className="tile"
            id="boardTile"
            onMouseEnter={() => handleEnter()}
            onMouseLeave={() => handleLeave()}
            onClick={() => { handleClick() }}
            style={{
                backgroundColor: Tile.bg,
                border: Tile.selected ? '1px solid red' : selections.Letter && isHovering ? '1px solid yellow' : '1px solid black'
            }}
        >
            {
                !Tile.selected ?
                <p>{Tile.type}</p>
                :
                <p>{Tile.Letter.letter}</p>
            }
        </div>
    );

};

export default BoardTile;