document.querySelector('form').addEventListener('submit',userData);
let userArr=JSON.parse(localStorage.getItem('signData')) || [];
function userData(event){
    event.preventDefault();
    let obj={
        Name:document.getElementById('name').value,
        Email:document.getElementById('email').value,
        Password:document.getElementById('password').value,
        Code:document.getElementById('code').value,
    };
    
     if(checkEmail(obj.Email)===true){
        userArr.push(obj);
        localStorage.setItem('signData',JSON.stringify(userArr));
        window.location.href='login.html';
        alert('Sign In Sucessfull')
     }
     else{
        alert('Account Already Exists')
     }
        
}

function checkEmail(Email){
    let filtered= userArr.filter(function(elem){
        return Email === elem.Email
    })
    if(filtered.length >0){
        return false;
    }
     else{
        return true;
     }
}