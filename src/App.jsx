import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import 'styles/styles.css'
import 'styles/Navbar.css'
import 'styles/Login.css'
import 'styles/Int_Secund.css'
import 'styles/Int_modulos.css'
import 'App.css'

import Navbar from 'components/Navbar';
import Index from 'pages';
import Home from 'pages/Home';
import Sales from 'pages/Sales';
import NewSales from 'pages/NewSale';
import NewProducts from 'pages/NewProducts';
import Products from 'pages/Products';
import Configuration from 'pages/Configuration';
import NewUser from 'pages/NewUser';
import { Auth0Provider } from "@auth0/auth0-react";
import PrivateRoute from 'components/PrivateRoute';
import Footer from 'components/Footer';

function App() {
  return (
    <Auth0Provider
      domain="misiontic-tsr.us.auth0.com"
      clientId="sZdjwhCVXbbhTzZKaqN80mqBDvejHTyr"
      redirectUri="https://pacific-oasis-43276.herokuapp.com/home"
    >
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/Menu'> <Navbar/> </Route>
          <PrivateRoute path='/Home'><Navbar/><Home/></PrivateRoute>   
          <PrivateRoute path='/Sales'><Navbar/><Sales/><Footer/> </PrivateRoute>
          <Route path='/NewSales'><Navbar/><NewSales/><Footer/> </Route>
          <PrivateRoute path='/Products'><Navbar/><Products/><Footer/></PrivateRoute>
          <PrivateRoute path='/NewProducts'><Navbar/><NewProducts/><Footer/></PrivateRoute>
          <PrivateRoute path='/Configuration'> <Navbar/><Configuration/><Footer/></PrivateRoute>   
          <PrivateRoute path='/NewUser'> <Navbar/><NewUser/><Footer/></PrivateRoute>          
          <Route path='/'> <Index /> </Route>     
        </Switch>        
      </Router>
    </div> 
    </Auth0Provider>   
  );
}

export default App;


