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

var style = document.createElement('style');
style.textContent = `
  
@keyframes wiggle {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(5deg); }
        50% { transform: rotate(-5deg); }
        75% { transform: rotate(5deg); }
        100% { transform: rotate(0deg); }
    }

    .scroll-top {
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: purple;
        color: white;
        padding: 10px;
        border-radius: 50%;
        display: none;
        cursor: pointer;
        font-size: 20px;
    }

    .show-scroll {
        display: block;
    }

    .hidden-section {
        opacity: 0;
        transform: translateY(50px);
        transition: all 0.6s ease;
    }

    .show-section {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

var scrollBtn = document.createElement('div');
scrollBtn.className = 'scroll-top';
scrollBtn.innerHTML = '↑';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', function () {
    if (window.scrollY > 200) {
        scrollBtn.classList.add('show-scroll');
    } else {
        scrollBtn.classList.remove('show-scroll');
    }
});

var navLinks = document.querySelectorAll('.nav-list li a[href^="#"]');
for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function (e) {
        e.preventDefault();
        var targetId = this.getAttribute('href');
        var target = document.querySelector(targetId);
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50,
                behavior: 'smooth'
            });
        }
    });
}

var svgIcons = document.querySelectorAll('#svg-icons-section img');
for (var i = 0; i < svgIcons.length; i++) {
    svgIcons[i].addEventListener('mouseenter', function () {
        wiggle(this);
    });
    svgIcons[i].addEventListener('click', function () {
        bubblePop(this);
    });
}

var contactForm = document.querySelector('form[name="contact-form"]');
if (contactForm) {
    contactForm.addEventListener('submit', submitForm);
}