import React from "react";
import Card from './Card';
import staffList from './staffList';
import './Card.css';

function cardComponent(staff, i) {
    return (
        <div className="col-md-4">
            <Card
                key={staff.key}
                avatar={staff.avatar}
                name={staff.name}
                description={staff.description}
                rating={staff.rating}
                number={staff.number}
            />
        </div>
    );
}

const FeatureTutorial = () => {
    return (
        <div className="container text-center">
            <h2 className="text-head">Featured Tutorials</h2>
            <div className="row">
                {staffList.map(cardComponent)}
            </div>
            <div className="row">
                <h2 className="text-bottom">See all articles</h2>
            </div>
        </div>
    );
}

export default FeatureTutorial;
