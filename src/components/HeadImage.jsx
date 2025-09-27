import React from "react";
import { Link } from "react-router-dom";

function HeadImage() {
    return (
        <div className="container text-center">
            <div className="row">
                <img src="https://picsum.photos/seed/picsum/1728/1000" className="rounded" alt="headImage"/>
            </div>
        </div>
    );
}

export default HeadImage;