(function () {
    const header = document.querySelector('.header_background');
    window.onscroll = () => {
        if (window.pageYOffset > 50) {
            header.classList.add('header_active');
        } else  {
            header.classList.remove('header_active');
        } 
    };
}());

//menu_mobile

(function () {
    const burgerItem = document.querySelector('.burger_menu');
    const menu = document.querySelector('.header_nav');
    const menuCloseItem = document.querySelector('.header_nav_close');
    const mobMenuPoint = document.querySelector('.header_navlinks'); 
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header_nav_active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header_nav_active');
    });
    mobMenuPoint.addEventListener('click', (e) => {
        if (e.target.getAttribute('href')) {
            menu.classList.remove('header_nav_active');
        }
    });

    //smooth_scroller

    const anchors = document.querySelectorAll('a[href*="#"]')
    for (let anchor of anchors) {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const blockID = anchor.getAttribute('href')
            document.querySelector('' + blockID).scrollIntoView({
                behavior: "smooth", block: "start"
            })
        })
    }

    //observer


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                document.querySelectorAll('.s1-link').forEach((link) => {
                    if (link.getAttribute('href').replace('#', '') === entry.target.id) {
                        link.classList.add('kek');
                    } else {
                        link.classList.remove('kek');
                    }

                })
            }
        });
    }, {
        threshold: 0.7
    });

    document.querySelectorAll('.section').forEach(
        (section) =>  observer.observe(section),
    );
}());

