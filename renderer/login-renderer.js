// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
'use strict'

const { remote } = require("electron")
var dialog = require('electron').remote.dialog

window.$ = window.jQuery = require('jquery')
require("bootstrap")
require("jquery.nicescroll")

document.getElementById("btnSignUp").addEventListener("click", ()=>{
    remote.getCurrentWindow().loadURL(`file://${__dirname}/signup.html`)
})


document.getElementById("btnSignIn").addEventListener("click",()=>{
    var txtUsername = document.getElementById("txtUsername")
    var txtPassword1 = document.getElementById("txtPassword")

    var context = {
        username:"randy@gmail.com",
        password:"pass"
    }

    var valid = true;
    var msg = []

    

    if(txtUsername.value === ""){
        valid = false
        msg.push("Please enter your username")
    } else if (txtPassword.value === ""){
        valid = false
        msg.push("Please enter your password")
    } else if (txtUsername.value !== context.username || txtPassword1.value !== context.password){
        valid = false
        msg.push("Username and password did not match")
    }

    if(valid){
        remote.getCurrentWindow().loadURL(`file://${__dirname}/space.html`)
    }else{
        dialog.showErrorBox("", msg.join(", "))
    }
})