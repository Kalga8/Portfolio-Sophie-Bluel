async function interfaceAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
        const logout = document.querySelector("header nav ul li:nth-child(3) a");
        const banner = document.querySelector("header");
        const filters = document.querySelector(".filter-bar");
        const worksModifications = document.querySelector(".portfolio-title");
        const token = localStorage.getItem("token");

        //Changer login en logout
        if (token) {
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

        //Enlever filtres
            filters.remove();

        //Lien modification projets
            const modificationButton = document.createElement("button");
            modificationButton.className = "modification-button";
            modificationButton.textContent = "modifier";
            worksModifications.appendChild(modificationButton);

            const iconButton = document.createElement("img");
            iconButton.src = "./assets/icons/pen-to-square-regular-black.svg";
            modificationButton.appendChild(iconButton);
            modificationButton.insertBefore(iconButton, modificationButton.firstChild);
        }
      // Fonction logout => Effacer token
      logout.addEventListener("click", () => {
      localStorage.removeItem("token");
      window.location.reload();
      });
    });
}
interfaceAdmin();