let Username =document.getElementById("username");
let pass =document.getElementById("password");
let flag1=1,flag2=1;
function validateForm(){
    if(Username.value==""){
        document.getElementById("userError").innerHTML= "User name is empty";
        flag1=0;
    }
    else if(Username.value.length<3)
    {
       document.getElementById("userError").innerHTML="Username require min 3 character";
       flag1=0;
    }
    else
    {
        document.getElementById("userError").innerHTML="";
        flag1=1;
    }
     if(pass.value=="")
    {
       document.getElementById("passError").innerHTML="Password is empty";
       flag2=0;
    }
    else
    {
        document.getElementById("passError").innerHTML="";
   flag2=1;
    }
    if(flag1&&flag2)
    {
return true;
    }else{
        return false;
    }
}