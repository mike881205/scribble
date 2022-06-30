import { React } from "react";
import LetterTile from "../LetterTile";
import { Row } from "react-bootstrap";
import './style.css'

const PlayerHand = ({ player }) => {

    const hand = player.hand;

    return (
        <Row id="handGrid" className="grid">
            {
                hand.map((l, i) => {
                    const { letter, points } = l;
                    return (
                        <LetterTile
                            key={`letter: ${i}`}
                            letter={letter}
                            points={points}
                        />
                    )
                })
            }
        </Row>
    );
};

export default PlayerHand;