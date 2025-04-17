# Pranav_Pranav_F.I.P

## Description

The Dr. Nut Website is designed to showcase "Dr. Nut," a defunct softdrink brand that revolves around the city of New Orleans-themed concept. The site has three functional pages (These all pages work on mobile, tablet and desktop sizes):
- **Home**: Welcomes visitors with an overview of Dr. Nut.
- **About**: Shares the backstory or mission of Dr. Nut and also tells about the team members behind the brand.
- **Contact**: Provides a form for users to send messages (with the use of JS).

This project of 'Dr. NUT' is done for the Final Integrated Project for the 2nd semester of the IDP course in the Fanshawe College.

## Sprint Overview

- **Day 1:**
  - Planned what pages to be included in the website apart from the obvious homepage.
  - Thought of the content that is to be included in those pages.
  - Created wireframes for the diffrent sizes of the screens (Mobile, Tablet and desktop).
  - Created the repo on the GitHub (Also made the branches).
  - Created project folder and initialized files: `index.html`, `about.html`, `contact.html`, `script.js`, `styles.css` and the `grid.css`.

- **Day 2:**
  - Built `index.html` with a welcome section, flavours, and customer reviews.
  - Created `about.html` with a mission statement, a little history of the brand and our team introduction.
  - Designed `contact.html` with a form for name, email, and message.
  - Made `styles.css`for styling.
  - Designed `grid.css`.
  - Added consistent navigation across all pages through header.

- **Day 3:**
  - Wrote `script.js` to handle contact form validation.
  - Tested form submissions for valid and invalid inputs.

- **Day 4:**
  - Tested all pages in Chrome and Edge for functionality.
  - Verified form pop-ups and navigation links.
  - Got feedback of the wireframes from Sir Jarrod (Aligned all the text to the left).
  - Made minor HTML and CSS adjustments for clarity and consistency.

- **Day 5:**
  - Wrote the `README.md` to summarize and well as show the paper-plan of this project.
  - Gone through the whole website to find any minor mistake for preparing the repo for submission.

The sprint is mainly written for the HTML and JS functionality over styling, but I also made a lot of changes in the CSS styling as well.

## Functionality of `script.js`

The `script.js` file powers the interactivity of the website, specifically the contact form on `contact.html`. Its key features include:

- **Form Validation**:
  - Listens for the form’s `submit` event using an event listener.
  - Checks that the `name`, `email`, and `message` fields are non-empty.

- **User Feedback**:
  - On valid input:
    - Displays an alert ("Thank you, [Name]! Your message has been sent to Dr. Nut.").
    - Resets the form for reuse.
  - On invalid input:
    - Shows an error alert (e.g., "Please fill out all fields.").

- **Event Handling**:
  - Targets the form by its ID (`contact-form`) to avoid affecting other elements of the website.

- **Interactivity**:
  - Handles the scrolling of the page.
  - Make the buttons wiggle when hovered.


## Features

- **Navigation Bar**:
  - Present on all pages (`index.html`, `about.html`, `contact.html`).
  - Links to Home, About, and Contact for seamless user experience.
  - Also has the glowing logo of Dr. NUT.
- **Homepage**:
  - Introduces Dr. Nut with a headline and brief text regarding the flavours and customer reviews of this drink as well as some daily blogs and a commercial .
- **About Page**:
  - Describes Dr. Nut’s mission and introduces the team behind the success.
- **Contact Form**:
  - Collects user input (name, email, message).
  - Validates input client-side and provides instant feedback.
- **Cross-Browser Compatibility**:
  - Tested in Chrome and Edge; works in any modern browser.
- **Minimalist Design**:
  - The website is simple yet stunning with a little CSS magic from my side !!!

## Languages Used

- **HTML5**:
  - Semantic elements (`header`, `nav`, `main`, `section`) for accessibility.
  - Form elements (`input`, `textarea`, `button`) for user interaction.
- **JavaScript**:
  - Handles the scrolling, buttons and the form.
- **CSS**:
  - For styling of pages and grid.css for the structure.
  
## Challenges Faced

- **Form Validation Logic**:
  - Initially, the form submitted without checking all fields. Fixed by rechecking the `script.js`.
- **Navigation Consistency**:
  - Ensured the navigation bar was identical across pages by copying the `header` HTML code, avoiding manual errors.
- **Scope Management**:
  - Added a lot of CSS styling to make the website look attractive.
- **Forgot to put the Grid.css**:
  - Earlier I forgot to use the Grid.css for this assignment. I came to know at the 3rd day that we have to use the Grid.css.
  
##  Final Thoughts

This project was a fun way to practice web development skills. I enjoyed creating Dr. Nut and learned a lot about contact form. Now I'm just hoping for some good grades :D

---

**Made By**: ___Pranav_Pranav___

![Coldrink](https://media.tenor.com/vrsfu81IlVkAAAAM/iced-coffee-tea.gif)
