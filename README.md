# Pranav_Pranav_F.I.P

## Description

The Dr. Nut Website is a static web application designed to showcase "Dr. Nut," a defunct softdrink brand that revoleves around the city of New Orleans-themed concept (e.g., nut products, nutrition and storytelling). The site has three core pages:
- **Home**: Welcomes visitors with an overview of Dr. Nut, has the some qualities of the drink Dr. NUT, the product list and review of our customers.
- **About**: Shares the backstory or mission of Dr. Nut and also tells about the team members behind the brand.
- **Contact**: Provides a form for users to send messages (simulated with JS) as well as has the locations of our factories and FAQs regarding Dr. NUT.

This project of 'Dr. NUT' is done for the Final Integrated Project for the 2nd semester of the IDP course in the Fanshawe College.

## Sprint Overview

The project was completed in a single sprint, spanning approximately **3-5 days**, with the following breakdown:

- **Day 1: Planning & Setup**
  - Planned what pages to be included in the website apart from the obvious homepage.
  - Thaught of the content that is to be included in those pages.
  - Created wireframes for the diffrent sizes of the screens (Mobile, Tablet and desktop).
  - Created the repo on the GitHub (Also made the branches).
  - Created project folder and initialized files: `index.html`, `about.html`, `contact.html`, `script.js`, `styles.css` and the `grid.css`.

- **Day 2: HTML Development**
  - Built `index.html` with a welcome section, flavours, and customer reviews.
  - Created `about.html` with a mission statement, a little history of the brand and our team introduction.
  - Designed `contact.html` with a form for name, email, and message.
  - Made `styles.css`for styling.
  - Designed `grid.css`.
  - Added consistent navigation across all pages through header.

- **Day 3: JavaScript Implementation**
  - Wrote `script.js` to handle contact form validation.
  - Tested form submissions for valid and invalid inputs.
  - Debugged navigation and script loading issues.

- **Day 4: Testing & Refinement**
  - Tested all pages in Chrome and Edge for functionality.
  - Verified form alerts and navigation links.
  - Got feedback of the wireframes from Sir Jarrod (Aligned all the text to the left).
  - Made minor HTML and CSS adjustments for clarity and consistency.

- **Day 5: Documentation**
  - Wrote the `README.md` to summarize and well as show the paper-plan of this project.
  - Gone through the whole website to find any minor mistake for preparing the repo for submission.

The sprint is mainly written for the functionality over styling, but I also made a lot alterations in the CSS styling as well.

## Functionality of `script.js`

The `script.js` file powers the interactivity of the website, specifically the contact form on `contact.html`. Its key features include:

- **Form Validation**:
  - Listens for the form’s `submit` event using an event listener.
  - Checks that the `name`, `email`, and `message` fields are non-empty.

- **User Feedback**:
  - On valid input:
    - Displays an alert (e.g., "Thank you, [Name]! Your message has been sent to Dr. Nut.").
    - Resets the form for reuse.
  - On invalid input:
    - Shows an error alert (e.g., "Please fill out all fields.").

- **Event Handling**:
  - Ensures the script runs only after the DOM is fully loaded (`DOMContentLoaded` event).
  - Targets the form by its ID (`contact-form`) to avoid affecting other elements of the website.

The JavaScript is very rarely used but is focused, avoiding unnecessary complexity while meeting the F.I.P’s interactivity requirements.

## Features

- **Navigation Bar**:
  - Present on all pages (`index.html`, `about.html`, `contact.html`).
  - Links to Home, About, and Contact for seamless user experience.
  - Also has the glowing logo of Dr. NUT.
- **Homepage**:
  - Introduces Dr. Nut with a catchy headline and brief text regarding the flavours and customer reviews of this drink as well as some daily blogs .
- **About Page**:
  - Describes Dr. Nut’s mission and introduces the team behind the success.
- **Contact Form**:
  - Collects user input (name, email, message).
  - Validates input client-side and provides instant feedback.
- **Cross-Browser Compatibility**:
  - Tested in Chrome and Edge; works in any modern browser.
- **Minimalist Design**:
  - Focuses on functionality with clean HTML structure, ready for CSS enhancements.

## Technologies Used

- **HTML5**:
  - Semantic elements (`header`, `nav`, `main`, `section`) for accessibility.
  - Form elements (`input`, `textarea`, `button`) for user interaction.
- **JavaScript**:
  - Event listeners for dynamic behavior.
  - DOM manipulation for form handling.
- **Development Tools**:
  - VS Code for coding.
  - Chrome Browser DevTools for debugging.
  - Simple JS.

## Challenges Faced

- **Form Validation Logic**:
  - Initially, the form submitted without checking all fields. Fixed by adding a comprehensive check in `script.js`.
- **Navigation Consistency**:
  - Ensured the navigation bar was identical across pages by copying the `header` code, avoiding manual errors.
- **Debugging Alerts**:
  - Early versions of `script.js` triggered alerts prematurely. Used `preventDefault()` to control form submission timing.
- **Scope Management**:
  - Added a lot of CSS styling to make the website look attractive.
- **Forgot to put the Grid.css**:
  - Earlier I forgot to use the Grid.css for this assignment. I came to know at the 3rd day that we have to use the Grid.css.
  
## Author Notes

This project was a fun way to practice core web development skills. I enjoyed creating Dr. Nut’s quirky world and learned a lot about form validation and debugging. Now I just hope for some good grades :D

---

**Made By**: ___Pranav_Pranav___ 