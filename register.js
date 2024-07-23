const fullName = document.getElementById("fullName");
const remail = document.getElementById("remail");
const rphone = document.getElementById("rphone");
const rpass = document.getElementById("rpass");
const rpass2 = document.getElementById("rpass2");
const regisBtn = document.getElementById("regisBtn");
const rHeader = document.querySelector("#rHeader");

function checkRCredentials() {
  const enteredFullname = fullName.value;
  const enteredRemail = remail.value;
  const enteredRphone = rphone.value;
  const enteredRpass = rpass.value;
  const enteredPass2 = rpass2.value;

  if (
    enteredFullname === "" ||
    enteredRemail === "" ||
    enteredRphone === "" ||
    enteredRpass === "" ||
    enteredPass2 === ""
  ) {
    rHeader.innerHTML = "Please Enter Credentials";
    rHeader.style.color = "red";
    return;
  }
  if (enteredPass2 !== enteredRpass) {
    rHeader.innerHTML = "Password doesnt match";
} else {
    rHeader.innerHTML = "Registeration was Successfull";
    rHeader.style.color = "green";
    let users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.FullName === enteredFullname && user.Email ===enteredRemail );
    if(userExists){
        rHeader.innerHTML = "User Already Exists";
        rHeader.style.color = "red";
        
    }
    else{

    users.push({"FullName": enteredFullname , "Email":enteredRemail , "PhoneNum":enteredRphone , "Password":enteredRpass});

    localStorage.setItem('users' , JSON.stringify(users));
    }
  }
}

regisBtn.addEventListener("click", checkRCredentials);

document.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    checkRCredentials();
  }
});
