import { React, useState, useEffect } from "react";
import Constants from "../../constants";
import BoardTile from "../BoardTile";
import './style.css'

const GameBoard = () => {

    // Center Tile = 113
    // Triple Word Score = 1, 8, 15, 106, 120, 211, 218, 225
    // Double letter = 4, 12, 37, 39, 46, 53, 60, 93, 97, 99, 103, 109, 117, 123, 127, 129, 133, 166, 173, 180, 187, 189, 214, 222
    // Double Word = 17, 29, 33, 43, 49, 57, 65, 71, 155, 161, 169, 177, 183, 193, 197, 209
    // Triple Letter = 21, 25, 77, 81, 85, 89, 137, 141, 145, 149, 220, 216

    const [gameBoard, setBoard] = useState(null);
    const [deck, setDeck] = useState(null);
    const [players, setPlayers] = useState(null);

    const createDeck = () => {
        const Letters = Constants.generateLetters();
        const deck = [];
        Letters.forEach(obj => {
            let count = obj.count;
            while (count > 0) {
                deck.push({ letter: obj.letter, points: obj.points });
                count--;
            };
        });
        return deck;
    }
    const createBoard = (rows, cols) => {
        const board = []
        for (let i = 0; i < (rows * cols); i++) {

            let tile;

            if ((i + 1) === 1 || (i + 1) === 8 || (i + 1) === 15 || (i + 1) === 106 || (i + 1) === 120 || (i + 1) === 211 || (i + 1) === 218 || (i + 1) === 225) {
                tile = {
                    type: 'TW',
                    bg: 'red',
                    used: false
                }
            }
            
            if ((i + 1) === 4 || (i + 1) === 12 || (i + 1) === 37 || (i + 1) === 39 || (i + 1) === 46 || (i + 1) === 53 || (i + 1) === 60 || (i + 1) === 93 || (i + 1) === 97 || (i + 1) === 99 || (i + 1) === 103 || (i + 1) === 109 || (i + 1) === 117 || (i + 1) === 123 || (i + 1) === 127 || (i + 1) === 129 || (i + 1) === 133 || (i + 1) === 166 || (i + 1) === 173 || (i + 1) === 180 || (i + 1) === 187 || (i + 1) === 189 || (i + 1) === 21 || (i + 1) === 222) {
                tile = {
                    type: 'DL',
                    bg: 'lightBlue',
                    used: false
                }
            }
            

            if ((i + 1) === 17 || (i + 1) === 29 || (i + 1) === 33 || (i + 1) === 43 || (i + 1) === 49 || (i + 1) === 57 || (i + 1) === 65 || (i + 1) === 71 || (i + 1) === 155 || (i + 1) === 161 || (i + 1) === 169 || (i + 1) === 177 || (i + 1) === 183 || (i + 1) === 193 || (i + 1) === 197 || (i + 1) === 209) {
                tile = {
                    type: 'DW',
                    bg: 'lightCoral',
                    used: false
                }
            }
            

            if ((i + 1) === 21 || (i + 1) === 25 || (i + 1) === 77 || (i + 1) === 81 || (i + 1) === 85 || (i + 1) === 89 || (i + 1) === 137 || (i + 1) === 141 || (i + 1) === 145 || (i + 1) === 149 || (i + 1) === 201 || (i + 1) === 205) {
                tile = {
                    type: 'TL',
                    bg: 'blue',
                    used: false
                }
            }
            

            if ((i + 1) === 113) { 
                tile = {
                    type: <span>&#9733;</span>,
                    bg: 'lightCoral',
                    used: false
                }
             }
            

            board.push({ tile: tile });
        };
        return board;
    };
    const setGame = () => {
        const Players = Constants.generatePlayers(2);
        const Deck = createDeck();
        const random = () => { return Math.floor(Math.random() * Deck.length) };
        Players.forEach(player => {
            const hand = player.hand;
            let handCount = 0;
            if (Deck.length > 0)
                while (handCount < 7) {
                    let randomTile = random();
                    hand.push(Deck[randomTile]);
                    Deck.splice(randomTile, 1);
                    handCount++
                };
        });
        setPlayers(Players);
        setDeck(Deck);
        setBoard(createBoard(15, 15));
    };

    useEffect(() => {
        setGame();
    }, []);

    return (
        <div id="grid">
            {
                !gameBoard ?
                    <>Loading...</>
                    :
                    gameBoard.map((obj, i) => {
                        return (
                            <BoardTile
                                key={i + 1}
                                tile={obj.tile}
                            />
                        )
                    })
            }
        </div>
    );
};

export default GameBoard;