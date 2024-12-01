# Frontend Mentor - Mortgage repayment calculator solution

This is a solution to the [Mortgage repayment calculator challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/mortgage-repayment-calculator-Galx1LXK73). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- Input mortgage information and see monthly repayment and total repayment amounts after submitting the form
- See form validation messages if any field is incomplete
- Complete the form only using their keyboard
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![Desktop Solution:](./design/desktop%20solution.jpg)

![Mobile Solution:](./design/mobile%20solution.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

```js
document.getElementById("reset").addEventListener("click", function() {
    form.reset();
    resultsComplete.style.display = "none";
    resultsEmpty.style.display = "block";
    var errReset = document.querySelectorAll(".error");
    var bgReset = document.querySelectorAll("span");
    var borderReset = document.querySelectorAll("input");

    errReset.forEach(function(e) {
        e.innerText = "";
    });

    document.querySelector(".queryError").innerText = "";

    bgReset.forEach(function(e) {
        // e.style.backgroundColor = "hsl(202, 86%, 94%)";
        // e.style.color = "hsl(200, 24%, 40%)";
        e.classList.remove("errClass");
    });

    borderReset.forEach(function(e) {
        e.classList.remove("errBorder");
    });
})
```

### Useful resources

- [Getting a value of one number to the power of other number](https://www.w3schools.com/js/js_math.asp) - This tutorial helped to how to get the value of number to the power of other number.

## Author

- Frontend Mentor - [Vignesh470](https://www.frontendmentor.io/profile/Vignesh470)
- My Website - [Vignesh Portfolio](https://vignesh470.github.io/Vignesh-Portfolio-website)
- LinkedIn profile - [Vignesh J](https://www.linkedin.com/in/vignesh-j-005a6291/)
- Github profile - [Vignesh470](https://github.com/Vignesh470)