import React from 'react';

function handleCreateAccount() {
    console.log("this link was clicked")
};

const Login = (props) => {

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
                       <label htmlFor="email" className="form-label">Email</label>
                       <input type="email" className="form-control" name="email" id="email" placeholder="name@example.com" autoFocus spellCheck="true" required/>
                   </div>
                   <div className="form-group">
                       <label htmlFor="password" className="form-label">Password</label>
                       <br/>
                       <input type="password" name="password" id="password" required/>
                   </div>
                   <div className="form-group">
                       <input type="checkbox" id="remember-me-checkbox" checked/>
                       <label htmlFor="remember-me-checkbox" tabIndex="-1">Remember Me</label>
                   </div>
                   <div className="form-group">
                       <button type="submit" className="btn btn-secondary" id="sign-in">
                       Sign In                               
                    </button>
                   </div>
           </div>
       </div>
     </form>
  )
}

export default Login