async function modalAdmin() {
document.addEventListener("DOMContentLoaded", function () {
//Affichage de la modale
const modification = document.querySelector (".modification-project");
const modalWindow = document.querySelector (".modal-window");
    //Ajout eventListener sur modifier
    modification.addEventListener("click", () => {
        modalWindow.style.display = "flex";
    });
}
)};
modalAdmin();