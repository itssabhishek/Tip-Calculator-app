# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person

### Screenshot

![](./design/desktop-design-empty.jpg)
![](./design/mobile-design.jpg)

### Links

- Solution URL: [https://www.frontendmentor.io/solutions/css-flexbox-css-grid-sass-iuCkAuEz1]
- Live Site URL: [https://tip-calculator-app-six-kappa.vercel.app/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- SASS

### What I learned

During this challege i learned that coding is not easy. I took 7 hours to find out a solution which was only of 3 lines. Although that was not on internet. This project increased my critical thinking skill.

```html
<div class="forms_tip" onclick="calculateBill()">
  <input
    type="button"
    id="5"
    class="forms_tip-1"
    value="5%"
    name="Tip"
    onclick="reply_click(this.id)"
  />
  <input
    type="button"
    id="10"
    class="forms_tip-2"
    value="10%"
    name="Tip"
    onclick="reply_click(this.id)"
  />
  <input
    type="button"
    id="15"
    class="forms_tip-3"
    value="15%"
    name="Tip"
    onclick="reply_click(this.id)"
  />
  <input
    type="button"
    id="25"
    class="forms_tip-4"
    value="25%"
    name="Tip"
    onclick="reply_click(this.id)"
  />
  <input
    type="button"
    id="50"
    class="forms_tip-5"
    value="50%"
    name="Tip"
    onclick="reply_click(this.id)"
  />
  <input
    type="number"
    id="1"
    class="forms_tip-6 forms_number"
    placeholder="Custom"
    min="0"
    onfocusout="reply_click(this.id)"
  />
</div>
```

```css(All elements get translated when i clicked on amy inputr type. Then i come with this solution)
      &.forms_tip-6 {
        background-color: $color-White;
        color: $color-secondary;
        text-align: center !important;
        border: 2px solid $color-White;
      }

      &[type='number']:focus {
        border: 2px solid $color-primary;
      }
```

```js
function reply_click(clicked_id) {
  percentage_value = clicked_id;
  percentage_value = parseInt(percentage_value);
}

  percentage_value == 1
    ? (percentage_value = ent_tip_percentage)
    : percentage_value;


  if (bill < 0 || no_of_people < 0) {
    div.style.color = 'red';
  } else {
    div.style.display = 'none';
  }

};
```

### Continued development

Again some more functions can be added.

### Useful resources

- [https://developer.mozilla.org/en-US/] - This helped me to learn various javascript function.
- [https://www.w3schools.com/] - This helped me to learn how to remove upward and downward arrow present in Input type equals to number.
- [https://stackoverflow.com/] - onclick="reply_click(this.id) i learned this method from here.

## Author

- Abhishek Tiwari
- Frontend Mentor - [@itssabhishek](https://www.frontendmentor.io/profile/itssabhishek)
