//Variables globales
const loginForm = document.getElementById("login-form");
const email = document.querySelector("form #email");
const password = document.querySelector("form #password");
const urlLoginApi = "http://localhost:5678/api/users/login";

//Récupérer les valeurs du formulaire et les vérifier
  //Ajout d'un listener
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const userEmail = email.value;
    // Vérification des champs
    if (userEmail==="") {
      email.classList.add("input-error");
    }
    const userPassword = password.value;
    if (userPassword==="") {
      password.classList.add("input-error");
    }

    // Affichage message d'erreur
    if (userEmail==="" || userPassword===""){
      // Vérifie si un message d'erreur existe
      const errorMessageInput = document.querySelector(".login-error");
      if (!errorMessageInput) {
        paragraphError = document.createElement("p");
        paragraphError.textContent = ("Votre email ou votre mot de passe est incorrect");
        paragraphError.className = "login-error";
        loginForm.insertBefore(paragraphError, loginForm.firstChild);
      } else {
      authentification(userEmail, userPassword);  
    }
  }
  });
// Envoie une requête POST à l'URL de l'API avec les informations d'authentification
async function authentification(email, password) {
  try {
    const responseLoginAPI = await fetch(urlLoginApi, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email,
        password
      })
    });
    // Enregistrer le token
    if (responseLoginAPI.status === 200) {
      const data = await responseLoginAPI.json();
      const token = data.token;
      localStorage.setItem("token", token);
      // Rediriger vers page admin
      window.location.href = "./index.html";
    }
  } catch (error) {
    console.error("Erreur lors de la connexion à l'API :", error);
  }
};