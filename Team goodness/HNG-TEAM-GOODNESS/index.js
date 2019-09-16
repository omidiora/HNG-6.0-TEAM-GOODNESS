function myfunction(){
    let username=document.forms.myform.username.value;
    let password=document.forms.myform.password.value;
    let email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(username=="" || !email.test(username)){
        alert("Incorrect email or username")
        event.preventDefault();
        return false
    }
    if(password==""){
        event.preventDefault();
        alert('Incorrect password');
    }
     
}
