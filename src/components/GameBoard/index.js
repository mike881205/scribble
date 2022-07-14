import { React } from "react";
import BoardTile from "../BoardTile";
import './style.css'

const GameBoard = ({ Board, selectBoardTile, Player }) => {

    return (
        <div id="boardGrid" className="grid">
            {
                Board.map((Tile, i) => {
                    Tile.id = i;
                    return (
                        <BoardTile
                            key={i + 1}
                            Tile={Tile}
                            selectBoardTile={selectBoardTile}
                            selections={Player.selections}
                        />
                    )
                })
            }
        </div>
    );
};

export default GameBoard;