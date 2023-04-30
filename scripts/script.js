let loginForm = document.getElementById("loginForm")
let submitBtn = document.getElementById("submitBtn")
let count=0;

submitBtn.addEventListener('click',()=>{
    let usernameinput= document.getElementById("usernameinput").value
    let passwordinput= document.getElementById("passwordinput").value

    for(i in usernames)
    {
        if (usernameinput==usernames[i] && passwordinput==passwords[i])
        {
            count++
        }
    }

    if(count==1)
    {
        alert("LOGIN SUCCESSFUL!")
        loginForm.action="home.html"
    }
    else{
        alert("INCORRECT CREDENTIALS!")
        // loginForm.action="index.html"
    }
})
