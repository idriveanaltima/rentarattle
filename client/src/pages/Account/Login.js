import React, { Component } from 'react';
import { Input, FormBtn } from "../../components/Form/";
import API from "../../utils/API";
import { BrowserRouter as Route, Redirect, Link } from "react-router-dom";
import Profile from './Profile';

class Login extends Component {

    state = {
        email: "",
        password: "",
        redirect: false
      };

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
      API.login({
        email: this.state.email,
        password: this.state.password         
      }) 
        .then(res => {if(res.status === 200){
            console.log("logged in")
           return (
            <Redirect
                to="/addItem"
            />
            )
    }})
        .catch(err => console.log(err));
    }

render () {
  return (
       <form>
       <div className="card" id="login">
           <div className="card-body" >
               <div className="heading">
                   <h4>Sign In</h4>
                   <div className="sign-up-link-container">
                       <div>
                           New User?
                           <a id="sign-up-link" href="/createAccount" >Create Account</a>
                       </div>
                   </div>
               </div>
                   <div className="form-group">
                       <label>Email
                       <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="email"
                            name="email"
                            placeholder="name@example.com" required
                        />
                       </label>
                   </div>
                   <div className="form-group">
                       <label>Password
                       <Input
                           value={this.state.password}
                           onChange={this.handleInputChange}
                            type="password"
                            name="password"
                            required
                            />
                      </label>
                   </div>
                   {/* <div className="form-group">
                        <Input
                           value={this.state.value}
                           onChange={this.handleInputChange}
                            type="checkbox"
                            name="rememberMe"
                            />
                       <label> Remember Me</label>

                   </div> */}
                   <div className="form-group">
                       < FormBtn   
                       onClick={this.handleFormSubmit}> 
                       Sign in
                        </FormBtn>
                   </div>
           </div>
       </div>
     </form>
  )
}
}

export default Login