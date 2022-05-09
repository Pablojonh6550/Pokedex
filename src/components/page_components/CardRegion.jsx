import React from "react";

import './css/cardregion.css';

function CardRegion(props) {
    const { region } = props;

    return (
        <div className="region_container">
            <div className="card_region_hover">
                <div className={`card_region ${region}`}>
                    <h1>{region}</h1>
                </div>
            </div>
        </div>
    );
}

export default CardRegion;