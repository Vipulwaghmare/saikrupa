import React from 'react';
import Count from './Count';

function MenuCard(props){
    return(
        <div className="col-lg-3 col-md-4 col-6 mb-3 menu-card">
        <div className="card border-dark text-center">
            <img className="card-img-top" src={props.img} alt={props.name} />
            <div className="card-body">
            <h5 className="card-header">{props.name}</h5>
            <p className="card-text">Rs. {props.price} </p>
            <Count id={props.id} amount={props.amount} />
            </div>
        </div>
        </div>
    )
}

export default MenuCard;