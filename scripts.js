"use strict";

function notice() {
    var fname= document.getElementById("fname");
    var lname= document.getElementById("lname");
    var email= document.getElementById("email");
    var message= document.getElementById("message");
    if(fname.value.length==0||lname.value.length==0||email.value.length==0||message.value.length==0){
      alert("Please fill in required fields");
    }
    else{
    alert("Message sent!");
    document.getElementById("fname").setAttribute("onfocus", "this.value=''");
    document.getElementById("lname").setAttribute("onfocus", "this.value=''");
    document.getElementById("email").setAttribute("onfocus", "this.value=''");
    document.getElementById("message").setAttribute("onfocus", "this.value=''");
    }
}