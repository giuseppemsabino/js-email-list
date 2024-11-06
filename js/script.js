
const emailList = document.getElementById("user-emails")
let email;


for(let i = 0; i < 10; i++){
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => response.json())
    .then ((data) => {
    
       
        email = data.response
        console.log(email)
    
    });
}

