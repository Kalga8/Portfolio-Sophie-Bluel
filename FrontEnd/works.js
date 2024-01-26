// Déclarer variable
const gallery = document.querySelector(".gallery");

// Fonction appel tableau works API
async function getWorks() {
    const response = await fetch("http://localhost:5678/api/works");
    return await response.json();
}

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

/*const figureStr - '<figure>
<img src - ${element.imageUrl}/> alt="${element.title}"/>
<figcaption>
<h3>${element.title}</h3>
<figcaption>
</figure>

const figureElementHTML = new DOMParse().parseFromString
(figureStr, "text/html").body.firstChild*/