import React from 'react';
import {connect} from 'react-redux';
import MenuCart from './Files/MenuCart';
import {CLEAR_CART} from './Reducer/action';
import {Link} from 'react-router-dom';

function Cart(props){
    const menu = props.cart.map(items =>
        <MenuCart 
            key={items.id}
            id={items.id}
            name={items.name}
            img={items.img}
            price={items.price}
            amount={items.amount}    
        />
        )
    if (props.amount === 0){
        return (
            <div>
                <p className="h3 text-center">
                    Your cart is currently empty
                </p>
                <p>Click <Link to="/menu">here</Link> to shop</p>
            </div>
        )

    } else {
        return(
            <div>
                <p className="h3 text-center">Your Cart</p>
                
                <div className="cart-item">
                {menu} 
                </div>
                
                <div className="text-center">
                <button 
                className="btn btn-outline-dark w-50"
                onClick={props.clear_cart} >
                Clear Cart
                </button>
                <p className="text-center alert-link alert-light">Total: {props.total} </p>
                <button 
                className="btn btn-outline-success w-100 mb-2" >
                Checkout
                </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(store){
    const { cart, amount, total } = store;
    return { cart, amount, total }
}

function mapDispatchToProps(dispatch){
    return{
        clear_cart: ()=> dispatch({
            type: CLEAR_CART
        })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart);