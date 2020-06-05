import React from 'react';

// styles
import './SearchResult.scss';


function SearchResult(props) {
    if (!props.business) {
        return (<div/>)
    }

    return (
        <div className="search-result">
            <div className="card">
            <img src={props.business.image_url} alt="business"/>
                <div className="card--text">
                    <p className="card--title">{props.business.name}</p>
                    <p className="card--rating">{props.business.rating} / 5</p>
                    <p className="card--price">{props.business.price}</p>
                    <p className="card--info">{props.business.phone}</p>
                </div>
                <div className="card--details">
                    <p className="card--title">Address</p>
                    <p className="card--address">{props.business.location.address1}</p>
                    <p className="card--city">{props.business.location.city}, {props.business.location.state}</p>
                </div>
            </div>
        </div>
    );
};

export default SearchResult;