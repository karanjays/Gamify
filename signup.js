function validateForm() {
      var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("First Name must be filled out");
     
         
    return false;
  }
    var y = document.forms["myForm"]["lname"].value;
  if (y == "") {
    alert("Last Name must be filled out");
    return false;}
   
       var z = document.forms["myForm"]["contact"].value;
  if (z == "") {
    alert("Contact detail must be filled out");
    return false;
  }
     
if (isNaN(z)){  
  alert("Only numerical value is allowed");  
  return false;} 
    if (z.length!=10){  
  alert("Entered number must contain 10 digits.");  
  return false;} 
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
    var f = document.forms["myForm"]["cpass"].value;
  if (f == "") {
    alert("Confirm your password");
    return false;}
    
    if(w!=f)
        {
            alert("Your confirmed password is not matching with the password ");
    return false;
            
        }
    
var btn=document.querySelectorAll("#lz");
console.log(btn);
    btn[0].addEventListener("click",function(){ alert("sign Up Successfully.");})

    
}

    btn[1].addEventListener("click",function(){ alert("sign Up Successfully.");})
btn[2].addEventListener("click",function(){ alert("sign Up Successfully.");})
