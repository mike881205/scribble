import { React } from "react";
import LetterTile from "../LetterTile";
import { Row } from "react-bootstrap";
import './style.css'

const PlayerHand = ({ Player, selectLetter }) => {

    return (
        <Row id="handGrid" className="grid">
            {
                Player.hand.map((l, i) => {
                    l.id = i;
                    return (
                        <LetterTile
                            key={`letter: ${i}`}
                            Letter={l}
                            selectLetter={selectLetter}
                        />
                    )
                })
            }
        </Row>
    );
};

export default PlayerHand;