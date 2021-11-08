import React from "react";

import './index.css';
import { Link } from "react-router-dom";

export const List = ({ creatures }) => {
    return (
        <div className="creatures-list">
            {creatures.map(creature => (
                <Link to={`/creatures-list/${creature.id}`}>
                    <div className="creature-card" key={creature.id}>
                        <img src={process.env.PUBLIC_URL + creature.image} alt={creature.title}/>
                        <p>{creature.title}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
};
