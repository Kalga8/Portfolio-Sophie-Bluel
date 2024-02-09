async function modalAdmin() {
document.addEventListener("DOMContentLoaded", function () {
//Affichage de la modale
const modification = document.querySelector (".modification-project");
const modalWindow = document.querySelector (".modal-window");
const closeModal = document.querySelector (".xmark");
    //Ajout eventListener sur modifier
    modification.addEventListener("click", () => {
        modalWindow.style.display = "flex";
    });
    closeModal.addEventListener("click", () => {
        modalWindow.style.display = "none";
    });
}
)};
modalAdmin();