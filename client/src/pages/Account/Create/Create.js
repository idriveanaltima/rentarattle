import React, { Component } from 'react';
import { Input, FormBtn } from "../../../components/Form/";
import API from "../../../utils/API";

class Create extends Component {

    state = {
        first: "",
        last: "",
        email: "",
        password: ""
      };

loadProfile = () => {
    console.log("account created")
    API.getProfile()
      .then(res =>
        this.setState({ first: res.data.first_name, last: res.data.last_name, email: res.data.email})
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleFormSubmit = event => {
    event.preventDefault();
      API.createAccount({
        first_name: this.state.first,
        last_name: this.state.last,
        email: this.state.email,
        password: this.state.password         
      }) 
        .then(res => console.log(res)) 
        .catch(err => console.log(err));
    };


render () {
return (

<div className='container-fluid'>
<div className='row'>
<div className='col-md-12 col-lg-12 col-s-6 col-xs-6'>
<form>
              <div className="card" id="new-account" >
                  <div className="card-body">
                      <div className="heading">
                          <h4>Create Account</h4>
                          <div className="sign-up-link-container">
                              <div>
                                  Already have an account?
                                  <a id="login-link" href="/login">Sign in</a>
                              </div>
                          </div>
                      </div>
                      <div id="create-account-form">
                              <label>First Name
                              <Input
                            value={this.state.first}
                            onChange={this.handleInputChange}
                            type="text"
                            name="first"
                            placeholder="First Name (required)"
                            />
                            </label>
                              <label>Last Name
                              <Input
                              value={this.state.last}
                              onChange={this.handleInputChange}
                            type="text"
                            name="last"
                            placeholder="Last Name (required)"
                            />
                            </label>
                     
                              <label>Email
                              <Input
                            value={this.state.email}
                            onChange={this.handleInputChange}
                            type="email"
                            name="email"
                            placeholder="Email (required)"
                            />
                            </label>
    
                              <label>Password   </label>
                              <br/>
                              <Input
                           value={this.state.password}
                           onChange={this.handleInputChange}
                            type="password"
                            name="password"
                            placeholder="Password (required)"
                            />
                          
                          <div className="form-group">
                              <FormBtn 
                              onClick={this.handleFormSubmit}> 
                                  Create Account
                              </FormBtn>
                          </div>
                      </div>
                  </div>
              </div>
        </form>
        </div>
        </div>
        </div>
)
}
}

export default Create