// const pass = document.getElementById("epassword")
function showfun(){
    let x = document.getElementById('ePassword')         

      if (x.type = "password" ){
          x.type = "text";
      }
      else{
       x.type = "password";
      }
   } 

function validation(){
    let  frst = document.getElementById('firstname')
    let  last = document.getElementById('lastname')
    let  email = document.getElementById('emailadd')
    let  pass  = document.getElementById('ePassword')
    let  num = document.getElementById('number')         
    
    console.log(frst.value)
    console.log(last.value)
    console.log(email.value)
    console.log(pass.value)
    console.log(num.value)
    let message = []

if(frst.value == '' ||  last.value == '' || email.value == '' || pass == '' ||num.value == '' ){
          alert("Fill form please")
           frst.focus()
     }   

if(frst.value.length >= 10 ||  last.value.length >= 10 ){
        alert("Please write less then 10 chracter in name")
   }

if(email.value !== '@'  ){
    alert("@ is missing")
}   
if(num.value.length > 11){
    alert("write correct phone number")
}

}
