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