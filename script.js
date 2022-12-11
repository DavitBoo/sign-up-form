const firstNameInput = document.getElementById('first-name')
const lastNameInput = document.getElementById('last-name')
const emailInput = document.getElementById('email')
const emailValue = emailInput.value
const phoneInput = document.getElementById('phone')
const passwordInput = document.getElementById('password')
const confirmPassInput = document.getElementById('confrim-pass')
const form = document.getElementById('my-form')
const errorMessage = document.querySelector('.error');



function validatePhoneNumber(input_str) {
    var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/;
    console.log(re.test(input_str))
    return re.test(input_str);
  }

function errorHandler(errorText){
    errorMessage.innerHTML = errorText
    errorMessage.classList.remove('not-display')
}

form.addEventListener('submit', (e) => {

    let emailValue = emailInput.value
    let atposition = emailValue.indexOf("@");  
    let dotposition = emailValue.lastIndexOf(".");  

    // name validation
    if (firstNameInput.value === null || firstNameInput.value === ""){
        errorHandler("The first name is not defined")
        e.preventDefault()
    }
    // last name validation
    if (lastNameInput.value === null || lastNameInput.value === ""){
        errorHandler("The last name is not defined")
        e.preventDefault()
    }
    //email validation
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=emailValue.length){  
        errorHandler("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);  
        e.preventDefault()
    }
    //phone number validation
    console.log(validatePhoneNumber(phoneInput.value))
    if(!validatePhoneNumber(phoneInput.value)){
        errorHandler("The phone number is not defined")
        e.preventDefault()
    }

    //password validation
    if(passwordInput.value !== confirmPassInput.value){
        errorHandler("Both passwords don't match")
        e.preventDefault()
    }


    
})