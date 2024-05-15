const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

 function showError(input,message){
     let formControl = input.parentElement;
     formControl.className = "form-control error";
     let small = formControl.querySelector('small');
     small.innerHTML = message;
 }


 function showSuccess(input){
    let formControl = input.parentElement;
    formControl.className = "form-control success";
 }

 function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1)
 }

 function checkRequired(inputs){
     inputs.forEach((input) => {
     if(input.value.trim() === ""){
     showError(input, `${getFieldName(input)} is required`)
     } else {   
        showSuccess(input)
     }
   })
 }

function checkLength (input, min, max) {
   if(input.value.length < min){
      showError(input,`${getFieldName(input)} кеминде ${min} белгиден туруш керек`)
   } else if (input,value.length > max){
      showError(input,`${getFieldName(input)} ${max} белгиден аз болуш керек `)
   } else  {
      showSuccess(input)
   }
}

function checkEmail (input) {
   const re =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;

    if(re.test(String(input.value.trim()).toLowerCase())){
      showSuccess(input)
    } else {
      showError(input,`${getFieldName(input)} жарактуу эмес`)
    }
}

function checkPassword(input1, input2){
   if (input1.value !== input2.value) {
      showError(input2, "сыр соз дал келбеди")
   }
}
 form.addEventListener('submit',(event) =>{{
     event.preventDefault();
     checkRequired([username,email,password,password2])
     checkLength(username, 3, 15);
     checkEmail(email);
     checkLength(password, 6, 25)
     checkPassword(password, password2)
 }})



