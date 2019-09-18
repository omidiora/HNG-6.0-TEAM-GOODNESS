function myfunction(){
    let username=document.forms.myform.username.value;
    let password=document.forms.myform.password.value;
    let email=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(username=="" || !email.test(username)){
      let invalidemail=document.getElementById("invalidemail");
      invalidemail.style.display="block";
        event.preventDefault();
        return false
    }
    if(password==""){
        let invalidpassword=document.getElementById("invalidpassword");
        invalidpassword.style.display="block";
        event.preventDefault();
        return false
    }
     
}
