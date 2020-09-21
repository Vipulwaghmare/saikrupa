import React from 'react'
import { Link } from 'react-router-dom';

function Home(){
  return(
    <div className="text-center">
    <h3 className="h3 text-center">Welcome to Saikrupa Lunch Home</h3>
    <p>
    <p>
      We'd like to welcome you to our website
    </p>
      
    </p>
    check out our menu <Link to="/menu">here</Link>
    </div>
  )
}

export default Home;