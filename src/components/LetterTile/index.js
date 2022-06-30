import { React, useState } from "react";
import { Col } from "react-bootstrap";
import './style.css'

const LetterTile = ({ letter, points }) => {

    const [isHovering, setHover] = useState(false);

    return (
        <Col
            className="tile"
            id="letterTile"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ border: !isHovering ? '1px solid black' : '1px solid red' }}
        >
            {`${letter}-${points}`}
        </Col>
    );
};

export default LetterTile;