function signup(){
let email=document.forms.myform.email.value;
let username=document.forms.myform.username.value;
let  password1=document.forms.myform.password.value;
let  password2=document.forms.myform.password2.value;
let re =/^[^re\s@]+@[^\s@]+\.[^\s@]+$/;
if(email==""  || re.test(email)){
    let invalidemail=document.getElementById('invalidemail');
    invalidemail.style.display="block";
    event.preventDefault();
    return false;
    
}

if(username==""){
    let username=document.getElementById('username');
    username.style.display="block";
    event.preventDefault();
    return false;
    
}
if ( password1=="" ){
let password=document.getElementById("password");
password.style.display="block";
event.preventDefault();
return false;



}

if ( password1 !==password2 ){
    let password2=document.getElementById("password2");
    password2.style.display="block";
    event.preventDefault();
    return false;
    
    
    
    }
    





}