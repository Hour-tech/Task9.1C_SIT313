import React from "react";

const Card = (props) => {
    return <div>
        <img src="https://picsum.photos/200/300" alt="staff" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <div className="rate">
                <span className="material-symbols-outlined star">
                    kid_star
                </span>
                <span>{props.rating}</span>
                <h3>{props.number}</h3>
        </div>
    </div>
}

export default Card;