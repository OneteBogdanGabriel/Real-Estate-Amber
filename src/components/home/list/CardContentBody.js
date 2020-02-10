import React from 'react';
import "./CardContentBody.css";

function CardContentBody(props) {

    return (
        <div className="container">
            <div className="row">
                <div className="column-3 first-row-header">
                    <h6>Name:</h6>
                    <p>House of Betrayal</p>
                </div>
                <div className="column-3 first-row-header">
                    <h6>Type:</h6>
                    <p>Mansion</p>
                </div>
                <div className="column-3 first-row-header">
                    <h6>Sold:</h6>
                    <p>100000$</p>
                </div>
            </div>
            <div className="row">
                <div className="column-12">
                    <h6>Description</h6>
                    <p>Das ist en descriptionen</p>
                </div>
            </div>
        </div>
    )
}

export default CardContentBody;