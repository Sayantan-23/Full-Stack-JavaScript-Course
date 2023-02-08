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