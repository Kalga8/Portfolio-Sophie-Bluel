// Déclarer variable
const gallery = document.querySelector(".gallery");
console.log(gallery);

// Fonction appel tableau works API
async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}
getWorks();

//Affichage des works dans le DOM
async function displayWorks() {
    const arrayWorks = await getWorks();
    arrayWorks.forEach((element) => {
        const figure = document.createElement("figure");
        const img = document.createElement("img");
        const figcaption = document.createElement("figcaption");
        img.src = element.imageUrl;
        figcaption.textContent = element.title;
        figure.appendChild(img);
        figure.appendChild(figcaption);
        gallery.appendChild(figure);
    });
}
displayWorks();