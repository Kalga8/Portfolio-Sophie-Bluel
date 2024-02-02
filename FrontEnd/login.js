//Variables globales pour login
const loginForm = document.getElementById("login-form");
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");

//Récupérer les valeurs du formulaire et les vérifier
    //Ajout d'un listener
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

    //Récupérer et vérifier le champ password
    const userEmail = email.value;
    const userPasseword = password.value;
        if (userPasseword ==="") {
            window.alert("Le champ du mot de passe est vide");
        }
        console.log(userEmail, userPasseword);
    }
    );

//Contrôler que le password est saisi

    //Si erreur dans le formulaire (saisie incorrecte) => Stop code

    //Sinon envoyer à l'API les données email et password
        //Si API envoie 200 => Rediriger vers page admin
            //Enregistrer le token
        //Si API envoie erreur => Message erreur