# Frontend Mentor - Tip calculator app solution

This is a solution to the [Tip calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/tip-calculator-app-ugJNGbJUX). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Frontend Mentor - Tip calculator app solution](#frontend-mentor---tip-calculator-app-solution)
  - [Table of contents](#table-of-contents)
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

![](images/screenshot.jpg)

### Links

- Solution URL: [Github](https://github.com/ksmacleod99/vigilant-adventure/tree/main/tip-calculator-app-main)
- Live Site URL: [Live Demo](https://vigilant-adventure-1d5f97.netlify.app/tip-calculator-app-main/index.html)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Desktop-first workflow, with an eye to responsiveness
- Vanilla JS

### What I learned

- I can do client-side validation in vanilla HTML! To some extent.
- There is a `test()` method for regex in Javascript! I didn't use this. 
- Checking one function to see if it returned 'true' before running another.
- The SVGs are in the `/images` directory and I didn't need to import Font Awesome...

### Continued development

I am stuck on the button styling. I could not find good examples of removing the "active" class from buttons that were previously selected, on select of a new button. 

I also haven't been looked into / put effort into cents or decimal places after dollar amounts that do not have cents (e.g. $5 vs $5.00). 

Updates should also be made for accessibility. 

### Useful resources

- [SO - Regex for Prices?](https://stackoverflow.com/questions/1547574/regex-for-prices) - I hate regex, but needed it for validations. This helped. 
- [Tipping Etiquette Guide](https://www.realsimple.com/work-life/money/money-etiquette/tipping-etiquette-guide) - Tipping etiquette guide. I used this to make sure I was calculating tips correctly (in the social sense)
- [MDN - classList](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList) - Also learned some cool tricks here.

## Author

- Frontend Mentor - [@ksmacleod99](https://www.frontendmentor.io/profile/ksmacleod99)
- Twitter - [@ksmacleod99](https://www.twitter.com/ksmacleod99)

