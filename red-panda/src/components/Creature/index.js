import React from "react";
import { useParams } from "react-router-dom";
import './index.css';

export const Creature = ({ creatures }) => {
    const { creatureId } = useParams();
    const creature = creatures.find(item => item.id === parseInt(creatureId)) || {};
    const { image, title } = creature;

    return (
        <div className="list-item">
            <img src={process.env.PUBLIC_URL + image} alt={title}/>
            <p>{title}</p>
        </div>
    );
}
