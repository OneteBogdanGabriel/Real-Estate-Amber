import React from 'react';
import "./CardContentBody.css";

function CardContentBody(props) {
    const { data } = props;
    return (
        <div className="container">
            <div className="row">
                <div className="column-3 first-row-header">
                    <h6>Name:</h6>
                    <p>{data.name}</p>
                </div>
                <div className="column-3 first-row-header">
                    <h6>Type:</h6>
                    <p>{data.type}</p>
                </div>
                <div className="column-3 first-row-header">
                    <h6>Sold:</h6>
                    <p>{data.sold_price + " " + data.currency}</p>
                </div>
            </div>
            <div className="row">
                <div className="column-12">
                    <h6>Description</h6>
                    <p>{data.description}</p>
                </div>
            </div>
        </div>
    )
}

export default CardContentBody;