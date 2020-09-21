import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// redux
import {createStore} from 'redux';
import {rootReducer} from './Reducer/rootReducer';
import {Provider} from 'react-redux';

//css
import './App.css';

// Components
import Header from './Files/Header';
import Footer from './Files/Footer';
import Home from './Files/Home';
import Main from './Main';
import Contact from './Contact';
import About from './About';
import Cart from './Cart';

const store = createStore(rootReducer);

function App() {
  return (
    <div className="container-lg container-fluid">
      <BrowserRouter>
      <Provider store={store} >
      <div className="header">
        <Header />
      </div>

      <div className="container-fluid div-main">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/menu" exact component={Main} />
        <Route path="/about" exact component={About} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/cart" exact component={Cart} />
      </Switch>
      </div>

      <div className="footer">
        <Footer />
      </div>
      
      </Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
