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
// Solution
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
