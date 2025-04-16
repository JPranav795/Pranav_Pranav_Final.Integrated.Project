function toggleMenu() {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
}

function wiggle(element) {
    element.style.animation = 'wiggle 0.5s ease';
    setTimeout(function () {
        element.style.animation = '';
    }, 500);
}

function bubblePop(element) {
    element.style.transform = 'scale(1.5)';
    setTimeout(function () {
        element.style.transform = 'scale(1)';
    }, 300);
}

function submitForm(event) {
    event.preventDefault();
    alert('Thanks for reaching out! We’ll get back to you soon.');
    var contactForm = document.querySelector('form[name="contact-form"]');
    contactForm.reset();
}


const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
        100% { transform: rotate(0deg); }
    }
`;
document.head.appendChild(styleSheet);

const svgIcons = document.querySelectorAll('#svg-icons-section img');
svgIcons.forEach(icon => {
    icon.addEventListener('mouseenter', () => wiggle(icon));
    icon.addEventListener('click', () => bubblePop(icon));
});

const contactForm = document.querySelector('form[name="contact-form"]');
if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
}
