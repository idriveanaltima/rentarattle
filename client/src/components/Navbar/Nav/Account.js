import React from 'react';

const Account = () => {

  return (

    <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Account
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="/login">Sign In</a>
          <a className="dropdown-item" href="/createAccount">Create account</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="/profile">Profile</a>
        </div>
      </li>
      
  )
}

export default Account;