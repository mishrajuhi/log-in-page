let signupBtn=document.getElementById("signupBtn");
let signinBtn=document.getElementById("signinBtn");
let namefield=document.getElementById("namefield");
let title=document.getElementById("name")
signinBtn.onclick=fuction()
{
    namefield.style.maxHeight="0";
    title.innerHTML="sing in";
    signupBtn.classList.add("disable");
    signinBtn.classList.remove("disable");
}
signupBtn.onclick=fuction()
{
    namefield.style.maxHeight="0";
    title.innerHTML="sing up";
    signupBtn.classList.remove("disable");
    signinBtn.classList.add("disable");
}

