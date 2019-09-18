<?php

if(isset($_POST['submit'])){
    $username=$_POST['username'];
    $email=$_POST['email'];
    $password1=$_POST['password1'];
    $password2=$_POST['password2'];
    $password=$_POST['password'];
    if($password1  !==$password2){
        return false;
    }
    if($username==" " || $password==" " || $email=" " ){
       return false;
    }
    
    else{
        header("Location:index.html");
    };
   
}


























?>