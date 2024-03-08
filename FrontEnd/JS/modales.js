async function modalAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
    //Affichage de la modale
    const modificationButton = document.querySelector(".modification-button");
    const modalWindow = document.querySelector(".modal-window");
    const closeModal = document.querySelector(".xmark");
    const addButton = document.querySelector (".modal-works-button");
    const modalWindowAdd = document.querySelector(".modal-window-add");
    const closeAddModal = document.querySelector(".xmark-2");
    const returnModal = document.querySelector(".arrow-left");
    const modalValidateButton = document.querySelector(".add-button");

        //Ajout eventListener pour naviguer
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
            modalAddWorks();
        });
        closeAddModal.addEventListener("click", () => {
            modalWindowAdd.style.display = "none";
        });
        returnModal.addEventListener("click", () => {
            modalWindowAdd.style.display = "none";
            modalWindow.style.display = "flex";
            modaleWorks();
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
            console.log("J'ai cliqué !");
            deleteWorks(element.id);
        });
    });
};

//Suppression des photos
async function deleteWorks(id) {
    try {
        const token = localStorage.getItem("token");
        const fetchWorks = await fetch(
            `http://localhost:5678/api/works/${id}`,
            {
              method: "DELETE",
              headers: {
                accept: "*/*",
                Authorization: `Bearer ${token}`,
              },
            }
        );
        console.log(fetchWorks);
    } catch {
        (error => {
        console.error('Erreur lors de la suppression du travail:', error);
    });
    }
};

async function modalAddWorks() {
    const modalAddWorks = document.querySelector (".modal-add-works");
    modalAddWorks.innerHTML = "";

    const minImageContainer = document.createElement("div");
    minImageContainer.classList.add ("min-image-container");
    modalAddWorks.appendChild(minImageContainer);

    const logoImage = document.createElement("img");
    logoImage.src = ("./assets/icons/logo-image.png");
    logoImage.classList.add("logo-image");
    minImageContainer.appendChild(logoImage);

    const labelPreview = document.createElement("label");
    labelPreview.classList = ("label-preview");
    labelPreview.textContent = ("+ Ajouter photo");
    labelPreview.htmlFor = "file";
    minImageContainer.appendChild(labelPreview);
    
    const inputPreview = document.createElement("input");
    inputPreview.type = "file";
    inputPreview.id = ("file");
    inputPreview.name = ("image");
    minImageContainer.appendChild(inputPreview);

    const imagePreview = document.createElement("img");
    imagePreview.classList = ("image-preview");
    imagePreview.src = ("#");
    minImageContainer.appendChild(imagePreview);

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
    textTitle.for = ("title");
    modalAddWorks.appendChild(textTitle);

    const inputTitle = document.createElement("input");
    inputTitle.type = ("text");
    inputTitle.id = ("title");
    inputTitle.name = ("title");
    modalAddWorks.appendChild(inputTitle);

    const textCategories = document.createElement("label");
    textCategories.classList = ("text-categories");
    textCategories.textContent = ("Catégorie");
    modalAddWorks.appendChild(textCategories);

    const inputCategories = document.createElement("select");
    inputCategories.id = ("categories");
    inputCategories.name = ("categories");
    modalAddWorks.appendChild(inputCategories);

    const emptyOption = document.createElement("option");
    emptyOption.textContent = "";
    inputCategories.appendChild(emptyOption);

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

//Prévisualisation image à ajouter modale
async function imagePreview(){
    const fileInput = document.createElement("input");
    fileInput.type = "file";
    document.body.appendChild(fileInput);

    //Ajout écouteurs
    fileInput.addEventListener("change",()=>{
        const file = fileInput.files[0]
        console.log(file);
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e){
                    previewImg.src = e.target.result
                    previewImg.style.display = "flex"
                    labelFile.style.display = "none"
                    inconFile.style.display = "none"
                    pFile.style.display = "none"
                }
                reader.readAsDataURL(file);
            }
        });
};