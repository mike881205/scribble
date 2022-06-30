import { React } from "react";
import './style.css'

const BoardTile = ({ tile }) => {

    // const {type, bg, used} = tile;

    return (
        <div className="tile" id="boardTile" style={{backgroundColor: !tile ? '' : tile.bg}}>
            {!tile ? '': tile.type}
        </div>
    );
};

export default BoardTile;