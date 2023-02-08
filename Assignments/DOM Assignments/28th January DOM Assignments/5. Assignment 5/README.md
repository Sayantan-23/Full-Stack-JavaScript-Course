# 5. DOM Assignment 5
>I have to change the font color of the Navbar links and the Recipe Gallery, add a new button beside "Contact", add new "Chinese" recipe in the recipe names and I have to add a new card in the "Recipe Gallery" with "add 6th card here" written in it.

**After Update**
![Assignment 5 Output](https://user-images.githubusercontent.com/110087385/216787474-706cebd8-6f46-409b-acef-d8b6b0e0df41.png)

```javascript
// Solution Assignment 5

// Changing Colors Of Navbar Links
const navElements = document.querySelectorAll(".nav-link");
navElements.forEach((element) => (element.style.color = "#764a9f"));

// Selecting Button Container
const buttonContainer = document.querySelector(".nav-center div:nth-child(3)");
// Creating New Button
const subButton = document.createElement("div");
const subButtonLink = document.createElement("a");
subButtonLink.classList.add("btn");
subButtonLink.innerText = "Pro Subscription";
subButton.append(subButtonLink);
buttonContainer.append(subButton);
// Adding Style to the Button Container
buttonContainer.style.display = "flex";
buttonContainer.style.alignItems = "center";

// Adding Chinese in Recipe Container
const recipeNames = document.querySelector(".tags-container div");
const newRecipe = document.createElement("a");
newRecipe.href = "#";
newRecipe.innerText = "Chinese (7)";
recipeNames.append(newRecipe);

// Changing Font Color in Recipe Gallery
const recipeDetails = document.querySelectorAll(".recipe-name, .recipe-disp");
recipeDetails.forEach((element) => (element.style.color = "#764a9f"));

// Adding 6th Option in Recipe Gallery
const recipeGallery = document.querySelector(".recipe-gallery");
const newCard = document.createElement("div");
newCard.classList.add("card");
newCard.innerText = "add 6th card here";
newCard.style.fontWeight = "600";
newCard.style.fontSize = "1.2rem";
recipeGallery.appendChild(newCard);
```