//Variables globales pour login
const loginForm = document.getElementById("login-form");
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
//Récupérer les valeurs du formulaire et les vérifier
    //Ajout d'un listener
    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    //Récupérer et vérifier le champ password
        if (userPassword ==="") {
            window.alert("Le champ du mot de passe est vide");
        }
        console.log(userEmail, userPassword);
    });
// Envoie une requête POST à l'URL de l'API avec les informations d'authentification
async function authentification (email, password) {
    const responseLoginAPI = await fetch("http://localhost:5678/api/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
    })
    // Enregistrer le token
    if (responseLoginAPI.status === 200) {
        const data = await responseLoginAPI.json();
        const token = token.value;
        window.localStorage.setItem("token", token);
        console.log ("Jeton enregistré:", token);
        return data;
    // Rediriger vers page admin
    } else {
        window.alert("L'identifiant ou le mot de passe est incorrect");
      }
};