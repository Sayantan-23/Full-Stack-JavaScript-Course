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