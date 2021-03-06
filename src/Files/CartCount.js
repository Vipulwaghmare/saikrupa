import React from 'react';
import {connect} from 'react-redux';
import {INCREASE, DECREASE, GET_TOTAL} from '../Reducer/action'

function Count(props){
    React.useEffect(()=> props.getTotal)
    return(
        <div className="">
            <div className="btn-group">
            <button 
                className="btn btn-secondary btn-warning"
                onClick={()=> props.decrease()} >
                <b>-</b>
            </button>
            </div>
            <span className="btn btn-info ml-1 mr-1">
            {props.amount}
            </span>
            <button 
                className="btn btn-secondary btn-warning"
                onClick={props.increase}>
                <b>+</b>
            </button>
        </div>
    )
}

function mapDispatchToProps(dispatch,ownProps){
    const {id,amount} = ownProps;
    return{
        increase: () => dispatch({
            type: INCREASE,
            payload: {id}
        }),
        decrease: ()=> dispatch ({ 
            type: DECREASE, 
            payload: { id, amount } 
        }),
        getTotal: ()=> dispatch ({ type: GET_TOTAL })
    }
}

export default connect (null,mapDispatchToProps)(Count);