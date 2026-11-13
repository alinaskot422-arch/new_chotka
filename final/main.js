
    const header = document.querySelector('.nav-panel');
    const hamburger = document.querySelector('.nav-panel__hamburger');
    const menu = document.querySelector('.nav-panel__menu');
    const screenCover = document.querySelector('.screen-cover');
    if (header && hamburger && menu) {
        const toggleMenu = (forceClose = false) => {
            const isOpen = forceClose ? false : header.classList.toggle('nav-panel--menu-open');
            if (forceClose) header.classList.remove('nav-panel--menu-open');
            hamburger.setAttribute('aria-expanded', isOpen);
        };

        hamburger.addEventListener('click', () => toggleMenu());

        menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMenu(true));
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') toggleMenu(true);
        });

        document.addEventListener('click', (e) => {
            if (!header.contains(e.target)) toggleMenu(true);
        });
    }

    if (header && screenCover) {
        const handleScroll = () => {
            const scrollLimit = screenCover.offsetHeight - header.offsetHeight;
            header.classList.toggle('nav-panel--scrolled', window.scrollY > scrollLimit);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll);
        handleScroll();
    }
