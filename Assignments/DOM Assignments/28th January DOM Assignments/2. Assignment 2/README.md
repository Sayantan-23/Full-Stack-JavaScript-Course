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