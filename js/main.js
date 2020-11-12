const form = document.getElementById("form");
const email = document.getElementById("email");
const password = document.getElementById("password");
const errorElement = document.getElementById("error");
const successElement = document.getElementById("success");

// Prevent form would be sended?
form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();

  ValidateEmail();
  ValidatePassword();
  
});

function checkInputs() {
  // get values from the inputs
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (emailValue === "") {
    // show error
    // add error class
    setErrorFor(email, "Email cannot be blank");
  }

  if (emailValue != "") {
    // add success class
    // here, we cannot a message, just add success style class
    setSuccessFor(email);
  }

  if (passwordValue === "") {
    // show error
    // add error class
    setErrorFor(password, "Email cannot be blank");
  }

  if (passwordValue != "") {
    // add success class
    // here, we cannot a message, just add success style class
    setSuccessFor(password);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement; //maybe formGroup is the parent...
  const small = formControl.querySelector("small");

  // add error message inside small
  small.innerText = message;

  // add error class
  formControl.classEmail = "form-control error";
}




  // MAIL AND PASSWORD FORMAT

function ValidateEmail(input) {
  var mailformat = /^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$/;
  if (input.value.match(mailformat)) {
    document.getElementById('message-mail').textContent ='Check that the format of your email is correct';
  }
}

function ValidatePassword(input) {
    var passwordformat = input.length;
    if (passwordformat < 6 && passwordformat >8) {
      document.getElementById('message-password').textContent ='Password must contain more than 6 caracters and less than 8.';
    }
}
