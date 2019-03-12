import React, { Component } from "react";
import { BrowserRouter as Route, Redirect } from "react-router-dom";
import API from "../../utils/API";


class Authenticate extends Component {
  state = {
    redirectToReferrer: false,
    isAuthenticated: false
  };

Auth = () => {
     API.login()
     .then(res => console.log(res)
      // this.setState({ first: res.data.first_name, last: res.data.last_name, email: res.data.email})
       //   this.isAuthenticated = true;
    //   setTimeout(cb, 100); // fake async
    // },
    )
    .catch(err => console.log(err));
  }
Signout = () => {  
    API.signout() //{
    //   this.isAuthenticated = false;
    //   setTimeout(cb, 100);
    // }
    .then(res => console.log(res)
  )
  .catch(err => console.log(err));
  };
  

  login = () => {
    this.Auth(() => {
      this.setState({ redirectToReferrer: true });
    });
  };

  render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
      </div>
    );
  }
}

export default Authenticate;