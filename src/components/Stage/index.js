import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Constants from '../../constants';
import GameBoard from '../GameBoard';
import PlayerHand from "../PlayerHand";

const Stage = () => {

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
    const createBoard = () => {
        const board = []
        for (let i = 0; i < 225; i++) {

            let tile;

            if (
                (i + 1 === 2) || (i + 1 === 3) || (i + 1 === 5) || (i + 1 === 6) || (i + 1 === 7) || (i + 1 === 9) || (i + 1 === 10) || (i + 1 === 11) || (i + 1 === 13) || (i + 1 === 14) || (i + 1 === 16) || (i + 1 === 18) || (i + 1 === 19) || (i + 1 === 20) || (i + 1 === 22) || (i + 1 === 23) || (i + 1 === 24) || (i + 1 === 26) || (i + 1 === 27) || (i + 1 === 28) || (i + 1 === 30) || (i + 1 === 31) || (i + 1 === 32) || (i + 1 === 34) || (i + 1 === 35) || (i + 1 === 36) || (i + 1 === 38) || (i + 1 === 40) || (i + 1 === 41) || (i + 1 === 42) || (i + 1 === 44) || (i + 1 === 45) || (i + 1 === 47) || (i + 1 === 48) || (i + 1 === 50) || (i + 1 === 51) || (i + 1 === 52) || (i + 1 === 54) || (i + 1 === 55) || (i + 1 === 56) || (i + 1 === 58) || (i + 1 === 59) || (i + 1 === 61) || (i + 1 === 62) || (i + 1 === 63) || (i + 1 === 64) || (i + 1 === 66) || (i + 1 === 67) || (i + 1 === 68) || (i + 1 === 69) || (i + 1 === 70) || (i + 1 === 72) || (i + 1 === 73) || (i + 1 === 74) || (i + 1 === 75) || (i + 1 === 76) || (i + 1 === 78) || (i + 1 === 79) || (i + 1 === 80) || (i + 1 === 82) || (i + 1 === 83) || (i + 1 === 84) || (i + 1 === 86) || (i + 1 === 87) || (i + 1 === 88) || (i + 1 === 90) || (i + 1 === 91) || (i + 1 === 92) || (i + 1 === 94) || (i + 1 === 95) || (i + 1 === 96) || (i + 1 === 98) || (i + 1 === 100) || (i + 1 === 101) || (i + 1 === 102) || (i + 1 === 104) || (i + 1 === 105) || (i + 1 === 107) || (i + 1 === 108) || (i + 1 === 110) || (i + 1 === 111) || (i + 1 === 112) || (i + 1 === 114) || (i + 1 === 115) || (i + 1 === 116) || (i + 1 === 118) || (i + 1 === 119) || (i + 1 === 121) || (i + 1 === 122) || (i + 1 === 124) || (i + 1 === 125) || (i + 1 === 126) || (i + 1 === 128) || (i + 1 === 130) || (i + 1 === 131) || (i + 1 === 132) || (i + 1 === 134) || (i + 1 === 135) || (i + 1 === 136) || (i + 1 === 138) || (i + 1 === 139) || (i + 1 === 140) || (i + 1 === 142) || (i + 1 === 143) || (i + 1 === 144) || (i + 1 === 146) || (i + 1 === 147) || (i + 1 === 148) || (i + 1 === 150) || (i + 1 === 151) || (i + 1 === 152) || (i + 1 === 153) || (i + 1 === 154) || (i + 1 === 156) || (i + 1 === 157) || (i + 1 === 158) || (i + 1 === 159) || (i + 1 === 160) || (i + 1 === 162) || (i + 1 === 163) || (i + 1 === 164) || (i + 1 === 165) || (i + 1 === 167) || (i + 1 === 168) || (i + 1 === 170) || (i + 1 === 171) || (i + 1 === 172) || (i + 1 === 174) || (i + 1 === 175) || (i + 1 === 176) || (i + 1 === 178) || (i + 1 === 179) || (i + 1 === 181) || (i + 1 === 182) || (i+1 === 184) || (i + 1 === 185) || (i + 1 === 186) || (i + 1 === 188) || (i + 1 === 190) || (i + 1 === 191) || (i + 1 === 192) || (i + 1 === 194) || (i + 1 === 195) || (i + 1 === 196) || (i + 1 === 198) || (i + 1 === 199) || (i + 1 === 200) || (i + 1 === 202) || (i + 1 === 203) || (i + 1 === 204) || (i + 1 === 206) || (i + 1 === 207) || (i + 1 === 208) || (i + 1 === 210) || (i + 1 === 212) || (i + 1 === 213) || (i + 1 === 215) || (i + 1 === 216) || (i + 1 === 217) || (i + 1 === 219) || (i + 1 === 220) || (i + 1 === 221) || (i + 1 === 223) || (i + 1 === 224)
            )
            {
                tile = {
                    type: '',
                    bg: 'white',
                    open: true,
                    valid: false
                }
            }

            if ((i + 1 === 4) || (i + 1 === 12) || (i + 1 === 37) || (i + 1 === 39) || (i + 1 === 46) || (i + 1 === 53) || (i + 1 === 60) || (i + 1 === 93) || (i + 1 === 97) || (i + 1 === 99) || (i + 1 === 103) || (i + 1 === 109) || (i + 1 === 117) || (i + 1 === 123) || (i + 1 === 127) || (i + 1 === 129) || (i + 1 === 133) || (i + 1 === 166) || (i + 1 === 173) || (i + 1 === 180) || (i + 1 === 187) || (i + 1 === 189) || (i + 1 === 214) || (i + 1 === 222)) {
                tile = {
                    type: 'DL',
                    bg: 'lightBlue',
                    open: true,
                    valid: false
                }
            }

            if ((i + 1 === 17) || (i + 1 === 29) || (i + 1 === 33) || (i + 1 === 43) || (i + 1 === 49) || (i + 1 === 57) || (i + 1 === 65) || (i + 1 === 71) || (i + 1 === 155) || (i + 1 === 161) || (i + 1 === 169) || (i + 1 === 177) || (i + 1 === 183) || (i + 1 === 193) || (i + 1 === 197) || (i + 1 === 209)) {
                tile = {
                    type: 'DW',
                    bg: 'lightSalmon',
                    open: true,
                    valid: false
                }
            }

            if ((i + 1 === 21) || (i + 1 === 25) || (i + 1 === 77) || (i + 1 === 81) || (i + 1 === 85) || (i + 1 === 89) || (i + 1 === 137) || (i + 1 === 141) || (i + 1 === 145) || (i + 1 === 149) || (i + 1 === 201) || (i + 1 === 205)) {
                tile = {
                    type: 'TL',
                    bg: 'blue',
                    open: true,
                    valid: false
                }
            }

            if ((i + 1 === 1) || (i + 1 === 8) || (i + 1 === 15) || (i + 1 === 106) || (i + 1 === 120) || (i + 1 === 211) || (i + 1 === 218) || (i + 1 === 225)) {
                tile = {
                    type: 'TW',
                    bg: 'salmon',
                    open: true,
                    valid: false
                }
            }

            if (i + 1 === 113) {
                tile = {
                    type: <span>&#9733;</span>,
                    bg: 'yellow',
                    open: true,
                    valid: true
                }
            }

            board.push(tile);
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
        setBoard(createBoard());
    };

    useEffect(() => {
        setGame();
    }, []);

    return (
        <Container >
            <Row>
                <Col>
                    {
                        !players ?
                            <></>
                            :
                            <PlayerHand player={players[0]} />
                    }
                </Col>
            </Row>
            {
                !gameBoard ?
                <></>
                :
                <GameBoard gameBoard={gameBoard} />
            }
        </Container>
    );
}

export default Stage;
