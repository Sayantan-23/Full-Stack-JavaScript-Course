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