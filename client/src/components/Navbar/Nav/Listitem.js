import React from 'react';
import { Link } from 'react-router-dom'

const Allitems = () => {

  return (
		<li className="nav-item">
        <a className="nav-link" href="/searchItem" id="all">All items</a>
      </li>
  )
}

export default Allitems;