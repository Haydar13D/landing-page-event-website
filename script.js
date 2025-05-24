// JavaScript untuk smooth scrolling dan fungsionalitas lainnya
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling untuk navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Navigasi aktif saat scroll
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    window.addEventListener('scroll', () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });

    // Tambahkan efek fade-in saat scroll
    function fadeInOnScroll() {
        const elements = document.querySelectorAll('.highlight-item, .day, .partner-logo');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    }

    // Aktifkan efek fade-in saat pertama kali load dan saat scroll
    window.addEventListener('scroll', fadeInOnScroll);
    fadeInOnScroll();

    // Tambahkan CSS untuk efek fade-in
    const style = document.createElement('style');
    style.innerHTML = `
        .highlight-item, .day, .partner-logo {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .fade-in {
            opacity: 1;
            transform: translateY(0);
        }
        
        nav ul li a.active {
            color: #4361ee;
        }
    `;
    document.head.appendChild(style);
});