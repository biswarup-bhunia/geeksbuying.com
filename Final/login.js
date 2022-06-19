document.querySelector('form').addEventListener('submit',userLog);
let userArr=JSON.parse(localStorage.getItem('signData'));
function userLog(event){
    event.preventDefault();
    let obj={
        Email:document.getElementById('email').value,
        Password:document.getElementById('password').value,
    };
     if(checkLog(obj.Email,obj.Password)===true){
        localStorage.setItem('logData',JSON.stringify(obj));
        alert('Log-In Sucessfull')
        window.location.href='index.html'
     }
     else{
        alert('Invalied Email And Password');
     }
}
 function checkLog(Email,Password){
   let filtered=userArr.filter(function(elem){
    return elem.Email===Email && elem.Password===Password;
   })
    if(filtered.length >0){
        return true;
    }
    else{
        return false;
    }
 }