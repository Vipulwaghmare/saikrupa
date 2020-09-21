import React from 'react';
import MenuCard from './Files/MenuCard'
import {connect} from 'react-redux';

function Main(props){
  const menu = props.cart.map(items => 
    <MenuCard key={items.id} id={items.id} name={items.name} price={items.price} amount={items.amount} img={items.img} />)
  return(
    <main className="" >
      <div className="col-12">
      <p className="text-center h3"> Menu </p>
      </div>
      <div className="d-flex flex-wrap">
      {menu}
      </div>
    </main>
  )
}

function mapStateToProps(store){
    return{
        ...store
    }
}

export default connect(mapStateToProps)(Main);
