const API_KEY = "5fab87c1cb204930922ab4c9287a5590";
const recipeListEl = document.getElementById("recipe-list");

function displayRecipes(recipes){
    recipeListEl.innerHTML = "";
    recipes.forEach((recipe) => {

        const recipeItemEl = document.createElement("li");
        recipeItemEl.classList.add("recipe-item");

        const recipeImageEl = document.createElement("img");
        recipeImageEl.src = recipe.image;
        recipeImageEl.alt = "image";

        const recipeTitleEl = document.createElement("h2");
        recipeTitleEl.innerText = recipe.title;

        const recipeIngredientEl = document.createElement("p");
        recipeIngredientEl.innerHTML = `
                <strong>Ingredients:</strong> 
                ${recipe.extendedIngredients
                    .map((ingredient) => ingredient.original)
                    .join(", ")
                }
        `;

        const recipeLinkEl = document.createElement("a");
        recipeLinkEl.href = recipe.sourceUrl;
        recipeLinkEl.innerText = "view recipe"
        
        recipeItemEl.appendChild(recipeImageEl);
        recipeItemEl.appendChild(recipeTitleEl);
        recipeItemEl.appendChild(recipeIngredientEl);
        recipeItemEl.appendChild(recipeLinkEl);
        recipeListEl.appendChild(recipeItemEl);
    })
}

async function getRecipes(){
    const res = await fetch(
        `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`
        );

    const data = await res.json();
    return data.recipes;
}

async function init(){
    const recipes = await getRecipes();
    displayRecipes(recipes);
}

init();