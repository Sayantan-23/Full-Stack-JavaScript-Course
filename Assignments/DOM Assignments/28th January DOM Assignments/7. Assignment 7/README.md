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