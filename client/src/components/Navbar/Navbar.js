import React from 'react';
import Home from './Nav/Home';
import Account from "./Nav/Account";
import Allitems from "./Nav/Listitem";
import Additem from "./Nav/Additem";
import Search from "./Nav/Search";

const Navbar = (props) => {
	console.log(props)

	return (
		
	<nav className="navbar navbar-expand-lg navbar-light bg-light"> 
  <Home />
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
		 <Allitems />
		 <Additem  />
	   <Account />   
    </ul>
    <Search />
  </div>
</nav>

	)
}
	export default Navbar;