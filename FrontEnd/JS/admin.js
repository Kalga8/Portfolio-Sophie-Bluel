async function interfaceAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
        //Changer login en logout
        const logout = document.querySelector("header nav ul li:nth-child(3) a");
        if (localStorage.loged == "true") {
            logout.textContent = "logout";
        //Afficher bandeau noir mode édition
            const banner = document.querySelector(".banner-admin");
            banner.style.display = "flex";
        //Lien modification projets
        const iconModification = document.querySelector(".modification-project");
        iconModification.style.display ="flex";
        //Enlever filtres
        const filters = document.querySelector(".filter-bar");
        filters.style.display = "none";
        }
      // Fonction logout => Effacer token
      logout.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.loged = false;
      location.reload();
      });
    });
}
interfaceAdmin();