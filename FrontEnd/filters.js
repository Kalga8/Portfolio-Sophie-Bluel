// Affichage des boutons par catégories
const filters = document.querySelector(".filter-bar");

//Récupérer le tableau des catégories
async function getCategories() {
    const response = await fetch ("http://localhost:5678/api/categories");
    return await response.json();
}

async function displayCategoriesButtons() {
    const categories = await getCategories();
    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.textContent = category.name;
        btn.id = category.id;
        btn.className = "filter";
        filters.appendChild(btn);
    });
}
displayCategoriesButtons();

//Filtrer au click bouton catégorie
async function filterCategory(){
    const works = await getWorks();
    const buttons = document.querySelectorAll(".filter-bar button");
    buttons.forEach(button => {
        button.addEventListener("click", (e) => {
            btnId = e.target.id;
            gallery.innerHTML = "";
            if (btnId !== "0") {
                const workSortCategory = works.filter((work) => {
                    return work.categoryId == btnId;
                });
                workSortCategory.forEach(work => {
                   createWorks(work);
                });
            } else {
                displayWorks();
            }
        });
    });
}
filterCategory();