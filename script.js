document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. ENVÍO DE FORMULARIO CON EMAILJS --- */
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const btn = contactForm.querySelector('button');
            btn.innerText = 'Enviando...';

            // REEMPLAZA ESTOS DOS VALORES CON LOS DE TU PANEL DE EMAILJS
            const serviceID = 'TU_SERVICE_ID_AQUÍ'; 
            const templateID = 'TU_TEMPLATE_ID_AQUÍ';

            emailjs.sendForm(serviceID, templateID, this)
                .then(() => {
                    btn.innerText = 'Enviar Solicitud';
                    alert('¡Mensaje enviado con éxito! Jarvey contactará contigo pronto.');
                    contactForm.reset();
                }, (err) => {
                    btn.innerText = 'Enviar Solicitud';
                    alert('Error al enviar: ' + JSON.stringify(err));
                });
        });
    }

    /* --- 2. NAVEGACIÓN SUAVE --- */
    const links = document.querySelectorAll('nav a, .btn, .hero-btns a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* --- 3. HEADER DINÁMICO --- */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 5%';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '10px 5%';
            header.style.background = '#ffffff';
            header.style.boxShadow = 'none';
        }
    });
});
