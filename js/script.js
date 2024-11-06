
const emailList = document.getElementById("user-emails")



for(let i = 0; i < 10; i++){
    fetch('https://flynn.boolean.careers/exercises/api/random/mail')
    .then((response) => response.json())
    .then ((data) => {
    
       
        const email = data.response
        
        const itemList = document.createElement("li");

        itemList.textContent = email;

        emailList.appendChild(itemList);
    
    });
}

