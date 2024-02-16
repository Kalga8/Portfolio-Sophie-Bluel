async function interfaceAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
        const logout = document.querySelector("header nav ul li:nth-child(3) a");
        const banner = document.querySelector("header");
        //Changer login en logout
        if (localStorage.loged == "true") {
            logout.textContent = "logout";
        //Afficher bandeau noir mode édition
            const bannerContainer = document.createElement("div");
            bannerContainer.className = "banner-admin";
            banner.appendChild(bannerContainer);
            banner.insertBefore(bannerContainer, banner.firstChild);

            const penIcon = document.createElement("img");
            penIcon.src = "./assets/icons/pen-to-square-regular-white.svg";
            penIcon.className = "pen-admin";
            bannerContainer.appendChild(penIcon);

            const edition = document.createElement("p");
            edition.textContent = "Mode édition";
            bannerContainer.appendChild(edition);

        //Lien modification projets
        const iconModification = document.querySelector(".modification-project");
        iconModification.style.display ="flex";

        //Enlever filtres
        const filters = document.querySelector(".filter-bar");
        filters.remove();
        }
      // Fonction logout => Effacer token
      logout.addEventListener("click", () => {
      localStorage.removeItem("token");
      localStorage.loged = false;
      window.location.reload();
      });
    });
}
interfaceAdmin();