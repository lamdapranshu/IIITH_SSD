var emailfine=false;
var unamefine=false;
console.log("hello");
var emailf=document.getElementById("great");
var uname=document.getElementById("usr");
var pass=document.getElementById("cpass");
var apass=document.getElementById("spass");
//console.log(emailf);
function isle(str) {
    return /[A-Z]/.test(str);
}
function d(str) {
  return /[0-9]/.test(str);
}

emailf.addEventListener('keyup',function() 
{
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(emailf.value))
  {
    window.emailfine=true;
    emailf.style.borderColor = "green";
    var l=document.getElementById("le");
    l.innerHTML = "Invalid Password";

  }
  else
  {
   window.emailfine=false;
   emailf.style.borderColor = "red";

  }
  console.log(emailfine);

});


uname.addEventListener('keyup',function() 
{

 if(isle(uname.value) && d(uname.value))
 {
  window.unamefine=true;
  document.getElementById("be").innerHTML="";


 }
 else
 {
  window.unamefine=false;
  document.getElementById("be").innerHTML="Invalid username";

 }
 console.log(window.unamefine);

});
pass.addEventListener('keyup',function() 
{
var apass=document.getElementById("spass");
 if(pass.value==apass.value)
 {
  
  document.getElementById("de").innerHTML="";


 }
 else
 {
  document.getElementById("de").innerHTML="Invalid Password";

 }
 //onsole.log(window.unamefine);

});
