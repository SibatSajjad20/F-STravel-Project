

const userPass = document.getElementById('pass');
const userMail = document.getElementById('email');
const loginBtn = document.getElementById('loginBtn');
const header = document.querySelector('#header');

function checkCredentials() {
    const enteredMail = userMail.value;
    const enteredPass = userPass.value;

    if (enteredMail === '' || enteredPass === '') {
        header.innerHTML = "Please Enter Credentials";
        header.style.color = 'red';
        return;
    }
    let users = JSON.parse(localStorage.getItem('users')) || [];

    const validUser = users.find(user => user.Email ===enteredMail && user.Password === enteredPass);
    if(validUser){
        window.location.href = 'home.html';
        header.innerHTML = 'Login was Successfull';
        header.style.color = 'green';
        
    }
    else {
        header.innerHTML = 'Wrong Credentials';
        header.style.color = 'red';
    }
}

loginBtn.addEventListener('click', checkCredentials);

document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); 
        checkCredentials();
    }
});
