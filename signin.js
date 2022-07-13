function validateForm() {
     
     var f = document.forms["myForm"]["email"].value;
     if (f == "") {
    alert("Email must be filled out");
    return false;}
    var atposition=f.indexOf("@");  
var dotposition=f.lastIndexOf(".");  
if (atposition<1 || dotposition<atposition+2 || dotposition+2>=f.length){  
  alert("Please enter a valid e-mail address");  
  return false;  
  }  
    var w = document.forms["myForm"]["pass"].value;
  if (w == "") {
    alert("Enter the password");
    return false;}
   if(w.length<5 || w.length>10 ){  
  alert("Password must contain 5-10 characters .");  
  return false;  
  }  
    
 var btn=document.querySelectorAll("#st");
console.log(btn);
    btn[0].addEventListener("click",function(){ alert("sign Up Successfully.");})

    
}

var btn=document.querySelectorAll("#st");
console.log(btn);
    btn[1].addEventListener("click",function(){ alert("sign Up Successfully.");})
btn[2].addEventListener("click",function(){ alert("sign Up Successfully.");})
