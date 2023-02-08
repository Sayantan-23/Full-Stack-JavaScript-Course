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