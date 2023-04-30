let usernameinput = document.getElementById("usernameinput2");
let passwordinput = document.getElementById("passwordinput2");
let usernameCheck = document.getElementsByClassName("usernameCheck2");
let passwordCheck = document.getElementsByClassName("passwordCheck2");
let emailinput = document.getElementById("emailinput");
let emailCheck = document.getElementsByClassName("emailCheck");
let submit=document.getElementById("submitBtnSU");
let signupForm = document.getElementById("signupForm");
let uv=false;
let ev=false;
let pv=false;

usernameinput.addEventListener('blur',()=>{
    let uservalid = /^\D/g.exec(usernameinput.value);
    let uservalid2 = /[^a-zA-Z0-9]/g.exec(usernameinput.value)
    if (usernameinput.value == "" || usernameinput.value.length > 15 || usernameinput.value.length < 6)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should be less than 15 and greater than 5 in length.</li>
        </ul>
        </center>
        `
    }
    if(uservalid == null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should not start with a number.</li>
        </ul>
        </center>
        `
    }
    if ((usernameinput.value == "" || usernameinput.value.length > 15 || usernameinput.value.length < 6) && uservalid == null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should be less than 16 and greater than 5 in length.</li>
            <li class="usernameLI"> The username should not start with a number or a special character.</li>
        </ul>
        </center>
        `
    }
    if(uservalid2 != null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
        
            <li class="usernameLI"> The username should not contain any special character.</li>
        </ul>
        </center>
        `
    }
    if(uservalid == null && uservalid2 !=null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should not start with a number.</li>
            <li class="usernameLI"> The username should not contain any special character.</li>
        </ul>
        </center>
        `
    }
    if ((usernameinput.value == "" || usernameinput.value.length > 15 || usernameinput.value.length < 6) && uservalid2 !=null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should be less than 15 and greater than 5 in length.</li>
            <li class="usernameLI"> The username should not contain any special character.</li>
        </ul>
        </center>
        `
    }
    if((usernameinput.value == "" || usernameinput.value.length > 15 || usernameinput.value.length < 6) && uservalid == null && uservalid2 != null)
    {
        usernameCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The username should be less than 16 and greater than 5 in length.</li>
            <li class="usernameLI"> The username should not start with a number or a special character.</li>
            <li class="usernameLI"> The username should not contain any special character.</li>
        </ul>
        </center>
        `
    }
    if((usernameinput.value != "" && usernameinput.value.length <= 15 && usernameinput.value.length >= 6) && uservalid != null && uservalid2 == null) 
    {
        usernameCheck[0].innerHTML="";
        uv=true;
    }
    
})

passwordinput.addEventListener('blur',()=>{
    let passnumberValid = /(.*\d){3}/g.exec(passwordinput.value);
    let passscValid = /[^a-zA-Z0-9]/g.exec(passwordinput.value);

    if((passwordinput.value == "" || passwordinput.value.length > 15 || passwordinput.value.length < 6))
    {
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should be less than 15 and greater than 5 in length.</li>
        </ul>
        </center>
        `
    }
    if(passnumberValid == null){
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should contain atleast 3 numbers.</li>
        </ul>
        </center>
        `
    }
    if(passscValid == null){
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should contain atleast 1 special character.</li>
        </ul>
        </center>
        `
    }
    if((passwordinput.value == "" || passwordinput.value.length > 15 && passwordinput.value.length < 6) && passnumberValid == null){
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should be less than 15 and greater than 5 in length.</li>  
            <li class="usernameLI"> The password should contain atleast 3 numbers.</li>
        </ul>
        </center>
        `
    }
    if(passnumberValid==null && passscValid==null){
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should contain atleast 3 numbers.</li>
            <li class="usernameLI"> The password should contain atleast 1 special character.</li>
        </ul>
        </center>
        `
    }
    if((passwordinput.value == "" || passwordinput.value.length > 15 && passwordinput.value.length < 6) && passscValid == null)
    {
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should be less than 15 and greater than 5 in length.</li>  
            <li class="usernameLI"> The password should contain atleast 1 special character.</li>
        </ul>
        </center>
        `
    }
    if((passwordinput.value == "" || passwordinput.value.length > 15 && passwordinput.value.length < 6) && passscValid == null && passnumberValid==null){
        passwordCheck[0].innerHTML = 
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> The password should be less than 15 and greater than 5 in length.</li>  
            <li class="usernameLI"> The password should contain atleast 3 numbers.</li>
            <li class="usernameLI"> The password should contain atleast 1 special character.</li>
        </ul>
        </center>
        `
    }
    if((passwordinput.value != "" && passwordinput.value.length <= 15 && passwordinput.value.length >= 6) && passscValid != null && passnumberValid!=null)
    {
        passwordCheck[0].innerHTML = ``;
        pv=true;
    }
})

emailinput.addEventListener('blur',()=>{
    let emailValid = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g.exec(emailinput.value)
    if(emailValid != null)
    {
        ev= true;
    }
    if (ev==false)
    {
        emailCheck[0].innerHTML=
        `
        <center>
        <ul class="usernameLI">
            <li class="usernameLI"> Please enter a valid email.</li>  
        </ul>
        </center>
        `
    }
    else{
        emailCheck[0].innerHTML=``
        ev=true;
    }
})

submit.addEventListener('click',()=>{
    if(ev==true && uv==true && pv==true)
    {
        alert("REGISTRATION SUCCESSFUL!")
        signupForm.action = "index.html";
    }
    else{
        alert("PLEASE ENTER VALID DETAILS")
        signupForm.action = "signup.html";
    }
})