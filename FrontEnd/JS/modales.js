async function modalAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
    //Affichage de la modale
    const modificationButton = document.querySelector(".modification-button");
    const modalWindow = document.querySelector(".modal-window");
    const closeModal = document.querySelector(".xmark");
    const addButton = document.querySelector (".modal-works-button");
    const modalWindowAdd = document.querySelector(".modal-window-add");
    const closeAddModal = document.querySelector (".xmark-2");
        //Ajout eventListener sur modifier
        modificationButton.addEventListener("click", () => {
            modalWindow.style.display = "flex";
            modaleWorks();
        });
        closeModal.addEventListener("click", () => {
            modalWindow.style.display = "none";
        });
        addButton.addEventListener("click", () => {
            modalWindow.style.display = "none";
            modalWindowAdd.style.display = "flex";
        });
        closeAddModal.addEventListener("click", () => {
            modalWindowAdd.style.display = "none";
        });
    });
};
modalAdmin();

async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
};

//Affichage des photos dans la modale
async function modaleWorks() {
    const modalWorks = document.querySelector(".modal-works");
    modalWorks.innerHTML = "";
    const works = await getWorks();
    works.forEach(element => {
        const figure = document.createElement("figure");
        modalWorks.appendChild(figure);

        const img = document.createElement("img");
        img.classList.add("works");
        img.src = element.imageUrl;
        figure.appendChild(img);

        const deletion = document.createElement("i");
        deletion.classList.add("fa-solid", "fa-trash-can");
        deletion.id = "trash_" + element.id;
        figure.appendChild(deletion); 

        deletion.addEventListener("click", (e) => {
            e.preventDefault();
            console.log("J'ai cliqué !")
            const token = localStorage.getItem("token");
            console.log(token)
            deleteWorks(element.id);
        });
    });
};

//Suppression des photos
async function deleteWorks(id) {
    const responseDelete = await fetch(`http://localhost:5678/api/works/${id}`,{
        method: "DELETE",
        headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer ${token}"
    },
    });
    console.log(responseDelete)
    return await responseDelete.json();
};