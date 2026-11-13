const header = document.querySelector('.nav-panel');
const hamburger = document.querySelector('.nav-panel__hamburger');
const menu = document.querySelector('.nav-panel__menu');
const screenCover = document.querySelector('.screen-cover');

if (header && hamburger && menu) {
    function closeMenu() {
        header.classList.remove('nav-panel--menu-open');
    }

    hamburger.addEventListener('click', function () {
        if (header.classList.contains('nav-panel--menu-open')) {
            closeMenu();
        } else {
            header.classList.add('nav-panel--menu-open');
        }
    });

    const links = menu.querySelectorAll('a');
    for (let i = 0; i < links.length; i++) {
        links[i].addEventListener('click', function () {
            closeMenu();
        });
    }

    document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape') {
            closeMenu();
        }
    });

    document.addEventListener('click', function (event) {
        if (!header.contains(event.target)) {
            closeMenu();
        }
    });
}

if (header && screenCover) {
    function checkScroll() {
        const scrollLimit = screenCover.offsetHeight - header.offsetHeight;
        if (window.scrollY > scrollLimit) {
            header.classList.add('nav-panel--scrolled');
        } else {
            header.classList.remove('nav-panel--scrolled');
        }
    }
    window.addEventListener('scroll', checkScroll);
    window.addEventListener('resize', checkScroll);
    checkScroll();
}