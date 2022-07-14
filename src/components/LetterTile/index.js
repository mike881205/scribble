import { React, useState } from "react";
import { Col } from "react-bootstrap";
import './style.css'

const LetterTile = ({ Letter, selectLetter }) => {

    const { letter, points, selected } = Letter;

    const [isHovering, setHover] = useState(false);

    const handleEnter = () => {
        setHover(true)
    };

    const handleLeave = () => {
        if (isHovering) setHover(false)
    }

    if (!letter && !points) {
        return (
            <Col className="tile" id="letterTile">
            </Col>
        );
    }
    else {
        return (
            <Col
                className="tile"
                id="letterTile"
                onMouseEnter={() => handleEnter()}
                onMouseLeave={() => handleLeave()}
                onClick={() => selectLetter(Letter.id)}
                style={{
                    border: selected ? '1px solid red' : isHovering ? '1px solid yellow' : '1px solid black',
                    backgroundColor: 'goldenrod'
                }}
            >
                {`${letter}-${points}`}
            </Col>
        );
    };
};

export default LetterTile;