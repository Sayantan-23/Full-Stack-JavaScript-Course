# 1. DOM Assignment 1

### Task 1
>I have to add an element named "Hire Me" in the navigation menu.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/215560132-b1e52f33-a5a1-4f73-ac86-99c7881b3bb7.png)


```javascript
// Solution Task 1

const navLi = document.querySelector("nav ul");
const element = document.createElement("li");
element.innerHTML = "<a>Hire Me</a>";
navLi.appendChild(element);
```

### Task 2
>I have to change the text inside search input field from "Search" to "Search My Project".

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/215563189-cfbf0428-a39c-4355-be36-b7eb8f397eb4.png)

```javascript
// Solution Task 2

const searchField = document.querySelector(".search-field input");
searchField.placeholder = "Search My Project";
```

### Task 3
>I have to change the paragraph text from "a Freelancer for National and International Client" to "an Employee for iNeuron Intelligence Pvt Ltd".

**After Update**
![Task 3 Output](https://user-images.githubusercontent.com/110087385/215575422-92a6e14a-6c9f-4635-9fe3-c3af1d9fda77.png)

```javascript
// Solution Task 3

const textField = document.querySelectorAll(".hero-left-section p span");
textField[1].innerText = "an Employee";
textField[2].innerText = "iNeuron Intelligence Pvt Ltd";
```

### Task 4
>I have to change to image to Hitesh sir's image.

**After Update**
![Task 4 Output](https://user-images.githubusercontent.com/110087385/215575321-efcd04fb-2f7f-44f1-bd3a-70a4679ab8c7.png)

```javascript
// Solution Task 4

const imageField = document.querySelector(".hero-right-section img");
imageField.src = "https://hiteshchoudhary.com/static/a8d73d1aac4c79e9bb689640e6090367/2eaab/person-image.jpg";
```

### Task 5
>I have to add another named "Support Me" beside the "Chat With Me" button.

**After Update**
![Task 5 Output](https://user-images.githubusercontent.com/110087385/215580843-7aa50b98-9c48-4b04-ae68-c1c0c9702a66.png)

```javascript
// Solution Task 5

const container = document.querySelector(".hero-right-section-btns");
const button = document.createElement("button");
button.innerText = "Support Me";
container.appendChild(button);
```

# 2. DOM Assignment 2

### Task 1
>I have to add background color in the heading and description in the About page.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216097364-a0f92f5f-bab4-4ce1-a20d-46c1d5ce8ac3.png)

```javascript
// Solution Task 1

const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");

accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));
```

### Task 2
>I have to add a new "Skills" section in About page.

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/216108417-3c5efb98-bdea-4145-9d3a-19821d7d45d6.png)

```javascript
// Solution Task 2

// Adding Skills Section in About
const accordianContainer = document.querySelector(".accordian-wrapper");
const accordianSkills = document.createElement("div");
accordianSkills.classList.add("accordian");
accordianContainer.appendChild(accordianSkills);
const skillsHeading = document.createElement("h3");
skillsHeading.innerText = "Skills";
accordianSkills.appendChild(skillsHeading);
const skillsDescription = document.createElement("p");
skillsDescription.innerText = "I posses a very good command over the full stack development technologies like MERN which can be seen in my work over Github.";
accordianSkills.appendChild(skillsDescription);

// Giving background Colors in Heading and Description
const accordianHeading = document.querySelectorAll(".accordian h3");
const accordianDescription = document.querySelectorAll(".accordian p");
accordianHeading.forEach((val) => (val.style.backgroundColor = "#dadaf8"));
accordianDescription.forEach((val) => (val.style.backgroundColor = "#eeeeff"));

// For the dropdown
accordianHeading.forEach((element) => {
  element.addEventListener("click", () => {
    const para = element.nextElementSibling;
    if (para.style.display === "block") {
      para.style.display = "none";
    } else {
      para.style.display = "block";
    }
  });
});

```

# 3. DOM Assignment 3
>I have to change all the placeholders in the input fields in contact page.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216132890-6af89685-d975-4967-be4a-c6ff293674b0.png)

```javascript
// Solution Assignment 3

const name = document.querySelectorAll(".enterName, .userName");
const email = document.querySelectorAll(".enterMail, .userEmail");
const message = document.querySelectorAll(".enterMessage, .userMessage");
name.forEach((element) => (element.placeholder = "FSJS 2.0"));
email.forEach((element) => (element.placeholder = "fsjs@ineuron.ai"));
message.forEach((element) => (element.placeholder = "Hello World"));
```

# 4. DOM Assignment 4
>I have to change the background colors and the font color of the cards.

**After Update**
![Assignment 4 Output](https://user-images.githubusercontent.com/110087385/216595994-b6561e76-32a8-4924-a7f0-0047cff1da65.png)

```javascript
// Solution Assignment 4

// Setting font colors to white
const allContainers = document.querySelectorAll(".clash-card__unit-stats div");
allContainers.forEach((element) => (element.style.color = "#ffffff"));

// Changing Background Colors
// Barbarian
const barbarian = document.querySelector(".clash-card__unit-stats--barbarian");
barbarian.style.backgroundColor = "#ec9b3b";

// archer
const archer = document.querySelector(".clash-card__unit-stats--archer");
archer.style.backgroundColor = "#ee5487";

// giant
const giant = document.querySelector(".clash-card__unit-stats--giant");
giant.style.backgroundColor = "#f6901a";

// goblin
const goblin = document.querySelector(".clash-card__unit-stats--goblin");
goblin.style.backgroundColor = "#82bb30";

// wizard
const wizard = document.querySelector(".clash-card__unit-stats--wizard");
wizard.style.backgroundColor = "#4facff";
```

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

# 6. DOM Assignment 6

### Task 1
>I have to change logo of the page and set the "ineuron" logo.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216823655-b86f1bb9-e2e2-4b14-8bf8-9b2370293701.png)

```javascript
// Solution Assignment 6 Task 1

const image = document.querySelector(".logo");
image.src = "https://ineuron.ai/images/ineuron-logo.png";
```

### Task 2
>I have to change app price from "$4" to "$10".

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/216826716-1a8b13e5-87ae-4bbd-b0af-3970a857fc77.png)

```javascript
// Solution Assignment 6 Task 2

const price = document.querySelector(".app_price span");
price.innerText = "$10";
```

# 7. DOM Assignment 7

### Task 1
> I have to remove the languages that have "2.0" in their name.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216918301-183a087e-1081-4517-ba81-99a6a03377f4.png)

```javascript
// Solution Assignment 7 Task 1 

const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});
```

### Task 2
> I have to use JavaScript to write something in the input box and submit the form. This should refresh the page and the languages in the left card should come back.

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/216929481-511736c0-31a7-4afb-bc40-86e6f32f3c1b.png)

```javascript
// Solution Assignment 7 Task 2

const languages = document.querySelectorAll(".main__languages a");
languages.forEach((element) => {
  if (element.innerText.includes("2.0")) {
    element.style.display = "none";
  }
});

const inputField = document.querySelector(".main__form-input");
const formButton = document.querySelector(".main__form-btn");
inputField.disabled = false;
formButton.disabled = false;
inputField.value = "iNeuron";
```

# 8. DOM Assignment 8

### Task 1
> I have to add new text to the side bar and I have to add scroll to it.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216953047-a95d143b-bb0c-4634-b320-9daa3ae06afb.png)

```javascript
// Solution Assignment 8 Task 1

// Creating A Custom Heading
const customTextHeading = document.createElement("h2")
customTextHeading.innerText = "This is my custom heading"
customTextHeading.classList.add("new-head")
// Creating A Custom Text
const customText = document.createElement("p")
customText.innerText = "This is my custom text"
customText.classList.add("new-p")
// Selecting The Container 
const textContainer = document.querySelector(".col-lg-4")
// Adding Text Heading and Text in the Container
textContainer.append(customTextHeading)
textContainer.append(customText)
// Adding overflow-y: scroll to it
textContainer.style.overflowY = "scroll"
```

### Task 2
> I have to remove the background image from the body.

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/216961307-2c65c954-7ecd-45d7-bd22-60d451da02da.png)

```javascript
// Solution Assignment 8 Task 2

const body = document.querySelector("body");
body.style.backgroundImage = "none";
```

### Task 3
> I have to add functionality to the Navbar toggle button.

**After Update**
![Task 3 Output](https://user-images.githubusercontent.com/110087385/216966844-47c3df20-41a9-4bfc-8ed7-decffe6f2001.png)


```javascript
// Solution  Assignment 8 Task 3

const toggleButton = document.querySelector(".navbar-toggler");
const navList = document.querySelector("#navbarTogglerDemo01");
toggleButton.addEventListener("click", () => {
  navList.classList.toggle("collapse");
});
```

# 9. DOM Assignment 9

### Task 1
> I have to change the "font-family" and the font "color" of the card heading.

**After Update**
![Task 1 Output](https://user-images.githubusercontent.com/110087385/216970107-b4f3e8b3-69ab-4a0a-a405-51f927fa212d.png)

```javascript
// Solution Assignment 9 Task 1

const title = document.querySelector(".caption .title");
title.style.fontFamily = "serif";
title.style.color = "#dc143c";
```

### Task 2
> I have to change the hover color of the "Add to Cart" button.

**After Update**
![Task 2 Output](https://user-images.githubusercontent.com/110087385/217021279-8ad63d04-7b11-47bf-93c7-171b6b581d04.png)

```javascript
// Solution Assignment 9 Task 2

const cartButton = document.querySelector(".add-to-cart");
cartButton.addEventListener("mouseover", () => {
  cartButton.style.backgroundColor = "#dc143c";
});
cartButton.addEventListener("mouseout", () => {
  cartButton.style.backgroundColor = "#3c8067";
});
```