//Variables globales pour login
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const form = document.querySelector("form");
const errorMessage = document.querySelector(".login p");


//Récupérer les valeurs du formulaire
function getValue() {
    e.preventDefault();
        const userEmail = email.value;
        const userPasseword = password.value;
        console.log(userEmail, userPasseword);
};
getValue();