import { React, useEffect } from "react";
import BoardTile from "../BoardTile";
import './style.css'

const GameBoard = ({gameBoard}) => {

    return (
        <div id="boardGrid" className="grid">
            {
                !gameBoard ?
                    <>Loading...</>
                    :
                    gameBoard.map((obj, i) => {
                        return (
                            <BoardTile
                                key={i + 1}
                                tile={obj}
                            />
                        )
                    })
            }
        </div>
    );
};

export default GameBoard;