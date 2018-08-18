import React, { Component } from "react";

const Auth = {
    auth: false,
    authenticate() {
     this.auth === true
    }, 
    signout() {
    this.auth = false
    }
}

export default Auth;