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
            addWorks();
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

async function addWorks() {
    const modalAddWorks = document.querySelector (".modal-add-works");

    const minImageContainer = document.createElement("div");
    minImageContainer.classList.add ("min-image-container");
    modalAddWorks.appendChild(minImageContainer);

    const logoImage = document.createElement("img");
    logoImage.src = ("./assets/icons/logo-image.png");
    logoImage.classList.add("logo-image");
    minImageContainer.appendChild(logoImage);

    const addButton = document.createElement("button");
    addButton.classList = ("add-button");
    addButton.textContent = ("+ Ajouter photo");
    minImageContainer.appendChild(addButton);

    const textImageSize = document.createElement("p");
    textImageSize.classList = ("text-image-size");
    textImageSize.textContent = ("jpg, png : 4mo max");
    minImageContainer.appendChild(textImageSize);

    
    const formContainer = document.createElement("div");
    formContainer.classList.add ("form-container");
    modalAddWorks.appendChild(formContainer);

    const textTitle = document.createElement("label");
    textTitle.classList = ("text-title");
    textTitle.textContent = ("Titre");
    modalAddWorks.appendChild(textTitle);

    const inputTitle = document.createElement("input");
    modalAddWorks.appendChild(inputTitle);

    const textCategories = document.createElement("label");
    textCategories.classList = ("text-categories");
    textCategories.textContent = ("Catégorie");
    modalAddWorks.appendChild(textCategories);

    const inputCategories = document.createElement("select");
    modalAddWorks.appendChild(inputCategories);

    const barRestaurant = document.createElement("option");
    barRestaurant.textContent = ("Bar & Restaurant");
    barRestaurant.id = ("3");
    inputCategories.appendChild(barRestaurant);

    const object = document.createElement("option");
    object.textContent = ("Objets");
    object.id = ("1");
    inputCategories.appendChild(object);

    const appartment = document.createElement("option");
    appartment.textContent = ("Appartements");
    appartment.id = ("2");
    inputCategories.appendChild(appartment);
};