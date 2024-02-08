async function interfaceAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
        //Changer login en logout
        const logout = document.querySelector("header nav ul li:nth-child(3) a");
        if (localStorage.token !== "") {
            logout.textContent = "logout";
        //Afficher bandeau noir mode édition
            const banner = document.querySelector(".banner-admin");
            banner.style.display = "flex";

        //Lien modification projets

        //Enlever filtres
      }
    });
  }
  
  interfaceAdmin();
      