import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, Link } from "react-router-dom";
import './App.css';
// import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Account/Login';
import Create from './pages/Account/Create';
import Profile from './pages/Account/Profile';
import Search from './pages/Search/Search';
import Add from './pages/Add/Add';
import Authenticate from "./components/Auth/Authenticate";
import PrivateRoute from "./components/Auth/PrivateRoute";
import Description from "./pages/Description/Description"


class App extends Component {
  render() {
    return (
      <Router>
  
     
<div>
	<nav className="navbar navbar-expand-lg navbar-light bg-light"> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
    <li className="nav-item"><Link to='/' className="nav-link">Home </Link> </li>
    <li className="nav-item"><Link to='/searchItem' className="nav-link">All items </Link></li>
    <li className="nav-item"><Link to='/addItem' className="nav-link">Donate</Link></li>
    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link to="/login" className="dropdown-item">Sign In</Link>
          <Link to="/createAccount" className="dropdown-item">Create account</Link>
          <Link to="/profile" className="dropdown-item">Profile</Link>
        </div>
      </li>
    <li className="nav-item"><Link to='/cart' className="nav-link">Cart</Link></li>
    </ul>

  </div>
</nav>
<br/>
      
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createAccount" component={Create} />
        <Route exact path="/searchItem" component={Search}/>
        <Route exact path="/profile" component={Profile}/>
        {/* <PrivateRoute exact path="/addItem" component={Authenticate}/> */}
        <Route exact path="/addItem" component={Add}/>
        <Route exact path="/description" component={Description}/>
        <PrivateRoute exact path="/cart" component={Authenticate}/>
      </Switch>
      <Footer />
      </div>
      </Router>
    );
  }
}

export default App;
