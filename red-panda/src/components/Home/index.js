import React from 'react';
import './index.css';
import { useHistory } from "react-router-dom";

export const Home = () => {
    const history = useHistory();
    const routeToList = () => {
        history.push('/creatures-list');
    };

    return (
        <div className="welcome">
            <p>Let's see the creatures!</p>
            <button onClick={routeToList}>See the list!</button>
        </div>
    );
}
