import React from 'react';
import Count from './CartCount'
import {connect} from 'react-redux';
import {REMOVE, GET_TOTAL} from '../Reducer/action'

function MenuCart(props){
    React.useEffect (()=> props.getTotal)
    if(props.amount > 0){
        return (
            <div className="mb-2 cart-ind-item">
                <div className="cart-photo card">
                <img src={props.img} alt={props.name} />
                </div>
                <div className="cart-details card text-center">
                <p className="card-header text-center"> {props.name} </p>
                <p className="card-title"> Rs. {props.price} </p>
                <Count 
                    id={props.id}
                    amount={props.amount}
                />
                <button 
                    className="btn w-100 btn-outline-dark mt-1 mb-1"
                    onClick={()=>props.remove()}>
                    Remove
                </button>
                </div>
            </div>
        )
    } 
    // if cart is empty
    return(
        <>
        
        </>
    )
}

function mapDispatchToProps(dispatch, ownProps){
    const {id} = ownProps
    return{
        remove: ()=> dispatch({
            type: REMOVE,
            payload: {id}
        }),
        getTotal: ()=> ({
            type: GET_TOTAL
        })
    }
}

export default connect(null,mapDispatchToProps)(MenuCart);