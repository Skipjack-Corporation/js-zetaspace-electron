'use strict'

const {remote} = require("electron")

window.$ = window.jQuery = require('./js/jquery-2.2.4.min.js');
require("./js/bootstrap.min.js")
require("./js/jquery.nicescroll")

document.getElementById("btnSignup").addEventListener("click",()=>{
    var txtUsername = document.getElementById("txtUsername")
    var txtPassword1 = document.getElementById("txtPassword1")
    var txtPassword2 = document.getElementById("txtPassword2")
    var radAgree = document.getElementById("radAgree")

    var context = {
        username:"randy@gmail.com",
        password:"pass"
    }

    var valid = true;
    var msg = []
    if(txtPassword1.value !== txtPassword1){
        valid = false
        msg.push("Password did not match")
    }

    if(txtPassword1.value === ""){
        valid = false
        msg.push("Password is required")
    }
    
    if(txtPassword2 !== ""){
        valid = false
        msg.push("Confirm Password is required")
    }

    if(txtUsername.value !== ""){
        valid = false
        msg.push("Username is required")
    }

    if(!radAgree.checked){
        valid = false
        msg.push("User must agree to terms")
    }

    if(valid){
        remote.getCurrentWindow().loadURL(`file://${__dirname}/space.html`)
    }else{
        alert(msg)
    }
})