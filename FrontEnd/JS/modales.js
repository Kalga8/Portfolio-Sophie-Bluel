async function modalAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
    //Affichage de la modale
    const modificationButton = document.querySelector (".modification-button");
    const modalWindow = document.querySelector (".modal-window");
    const closeModal = document.querySelector (".xmark");
        //Ajout eventListener sur modifier
        modificationButton.addEventListener("click", () => {
            modalWindow.style.display = "flex";
        });
        closeModal.addEventListener("click", () => {
            modalWindow.style.display = "none";
        });
    }
    )};
    modalAdmin();