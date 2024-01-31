// Déclarer variable
const gallery = document.querySelector(".gallery");

// Fonction appel tableau works API
async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}

//Affichage des works dans le DOM
async function displayWorks(){
    const works = await getWorks();
    works.forEach ((work) => {
        createWorks(work);
    });
}
displayWorks();

function createWorks(work) {
    const figure = document.createElement("figure");
    const img = document.createElement("img");
    const figcaption = document.createElement("figcaption");
    img.src = work.imageUrl;
    figcaption.textContent = work.title;
    figure.appendChild(img);
    figure.appendChild(figcaption);
    gallery.appendChild(figure);
}