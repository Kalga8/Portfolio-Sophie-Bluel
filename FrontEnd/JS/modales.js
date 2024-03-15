function modalAdmin() {
    document.addEventListener("DOMContentLoaded", function () {
    //Affichage de la modale
    const modificationButton = document.querySelector(".modification-button");
    const modalWindow = document.querySelector(".modal-window");
    const closeModal = document.querySelector(".xmark");
    const addButton = document.querySelector (".modal-works-button");
    const modalWindowAdd = document.querySelector(".modal-window-add");
    const closeAddModal = document.querySelector(".xmark-2");
    const returnModal = document.querySelector(".arrow-left");

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
            imagePreview();
            postImage();
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

//*******************************Suppression des photos*****************************//
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

//****************************Ajout des photos**************************************//

//Création modale 2

function modalAddWorks() {
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
    inputPreview.classList = ("input-preview");
    inputPreview.id = ("file");
    inputPreview.name = ("imageUrl");
    minImageContainer.appendChild(inputPreview);

    const imagePreview = document.createElement("img");
    imagePreview.classList = ("image-preview");
    imagePreview.src = ("#");
    imagePreview.type = "file";
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
    inputTitle.classList = ("title");
    inputTitle.id = ("title");
    inputTitle.name = ("title");
    modalAddWorks.appendChild(inputTitle);

    const textCategories = document.createElement("label");
    textCategories.classList = ("text-categories");
    textCategories.textContent = ("Catégorie");
    modalAddWorks.appendChild(textCategories);

    const inputCategories = document.createElement("select");
    inputCategories.classList = ("categories");
    inputCategories.id = ("");
    inputCategories.name = ("");
    modalAddWorks.appendChild(inputCategories);

    const emptyOption = document.createElement("option");
    emptyOption.textContent = "";
    inputCategories.appendChild(emptyOption);

    const barRestaurant = document.createElement("option");
    barRestaurant.textContent = ("Hôtel & Restaurant");
    barRestaurant.classList = ("option");
    barRestaurant.id = ("3");
    barRestaurant.name =("Hotels & Restaurants");
    inputCategories.appendChild(barRestaurant);

    const object = document.createElement("option");
    object.textContent = ("Objets");
    barRestaurant.classList = ("option");
    object.id = ("1");
    object.name = ("Objets");
    inputCategories.appendChild(object);

    const appartment = document.createElement("option");
    appartment.textContent = ("Appartements");
    barRestaurant.classList = ("option");
    appartment.id = ("2");
    appartment.name = ("Appartements");
    inputCategories.appendChild(appartment);
};

//Prévisualisation image à ajouter modale
function imagePreview(){

const imageFile = document.querySelector(".image-preview");
const labelFile = document.querySelector(".label-preview");
const inputFile = document.querySelector(".input-preview");
const iconFile = document.querySelector(".logo-image");
const paragrapheFile = document.querySelector(".text-image-size");

    //Ajout écouteurs
    inputFile.addEventListener("change",()=>{
        const file = inputFile.files[0]
            if (file) {
                const reader = new FileReader();
                reader.onload = function (e){
                    imageFile.src = e.target.result;
                    imageFile.style.display = "flex";
                    labelFile.style.display = "none";
                    iconFile.style.display = "none";
                    paragrapheFile.style.display = "none";
                }
                reader.readAsDataURL(file);
            }
        });
};


//Ajouter une image avec la méthode POST
async function postImage() {
    const buttonSubmit = document.querySelector(".modal-validate-button");
    const token = localStorage.getItem("token");
    const title = document.querySelector(".title");
    const inputFile = document.querySelector(".input-preview");
    const option = document.querySelector(".option");

// Écoutez l'événement bouton
    buttonSubmit.addEventListener("click", async (e) => {
        e.preventDefault();

        const imageValue = inputFile.files[0];
        console.log(imageValue);
        const titleValue = title.value;
        console.log(titleValue);
        const categoryValue = option.id;
        console.log(categoryValue);

        const formData = new FormData();
        formData.append("image", imageValue);
        formData.append("title", titleValue);
		formData.append("category", categoryValue);

        try {
            const response = await fetch(`http://localhost:5678/api/works`, {
                method: "POST",
                headers: {
                    accept: "*/*",
                    Authorization: `Bearer ${token}`,
                },
                body: formData
            });
            if (response.ok) {
                const data = await response.json();
                console.log("Voici le travail ajouté", data);
                modaleWorks();
                displayWorks();
            } else {
                console.error("Erreur lors de la requête :", response.status);
            }
        } catch (error) {
            console.error("Erreur lors de la requête :", error);
        }
    });
}