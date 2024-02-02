//Variables globales pour login
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const loginForm = document.getElementById("login-form");
const errorMessage = document.querySelector(".login p");

//Récupérer les valeurs du formulaire

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userEmail = email.value;
    const userPasseword = password.value;
    console.log(userEmail, userPasseword);
});

//Contrôler que le mail est saisi
const emailVerified = document.getElementById("emailVerified");
emailVerified.addEventListener ("input", function() {
    const email = email = emailVerified.value;
    const ValidEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]+;
    if (ValidEmail) {
        emailVerified.setCustomValidity("");
    } else {
        emailVerified.setCustomValidity ("Mail non valide");
    }
});

    //Si mail non saisi ou non conforme => Afficher message de'erreur
    //Si password non saisi alors afficher message d'erreur

//Contrôler que le password est saisi

    //Si erreur dans le formulaire (saisie incorrecte) => Stop code

    //Sinon envoyer à l'API les données email et password
        //Si API envoie 200 => Rediriger vers page admin
            //Enregistrer le token
fu        //Si API envoie erreur => Message erreur