import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Account/Login/Login';
import Create from './pages/Account/Create/Create';
import Profile from './pages/Account/Profile/Profile';
import Search from './pages/Search/Search';
import Add from './pages/Add/Add';

class App extends Component {
  render() {
    return (
      <div>
       <Navbar />
      <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/createAccount" component={Create} />
        <Route exact path="/searchItem" component={Search}/>
        <Route exact path="/profile" component={Profile}/>
        <Route exact path="/addItem" component={Add}/>
      </Switch>
      </Router>
      <br/>
      <Footer />
      </div>
    );
  }
}

export default App;
