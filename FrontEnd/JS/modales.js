async function modalAdmin() {
document.addEventListener("DOMContentLoaded", function () {
//Affichage de la modale
const modification = document.querySelector (".modification-button");
const modalWindow = document.querySelector (".modal-window");
const closeModal = document.querySelector (".xmark");
    //Ajout eventListener sur modifier
    modification.addEventListener("click", () => {
        modalWindow.style.display = "flex";
        
        const modalChild = document.createElement("div");
        modalChild.className = "modal-child";
        modalWindow.appendChild(modalChild);

        const span = document.createElement("span");
        span.className = "xmark";
        modalChild.appendChild(span);

        const xmarkImg = document.createElement("img");
        xmarkImg.src = "./assets/icons/xmark-solid-black.svg";
        span.appendChild(xmarkImg);

        const modalTitle = document.createElement("h2");
        modalTitle.textContent = "Galerie Photo";
        modalChild.appendChild(modalTitle);

        const modalWorks = document.createElement("div");
        modalWorks.className = "modal-works";
        modalChild.appendChild(modalWorks);

        const modalButton = document.createElement("button");
        modalButton.className = "modal-works-button";
        modalButton.textContent = "Ajouter une photo";
        modalChild.appendChild(modalButton);
    });

    closeModal.addEventListener("click", () => {
        modalChild.remove();
        modalWindow.style.display = "none";
    });
}
)};
modalAdmin();