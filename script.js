document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. GESTIÓN DEL FORMULARIO CON AJAX --- */
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); 
            
            const data = new FormData(contactForm);
            const button = contactForm.querySelector('button');
            const originalText = button.innerText;
            
            button.innerText = 'Enviando...';
            button.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    alert('¡Mensaje enviado con éxito! Recuerda revisar lg97648@gmail.com para activar el servicio la primera vez.');
                    contactForm.reset();
                } else {
                    alert('Error en el envío. Asegúrate de que la página esté subida a GitHub.');
                }
            } catch (error) {
                alert('No se pudo enviar. Desde archivos locales (Windows) Formspree no funciona. ¡Súbelo a GitHub!');
            } finally {
                button.innerText = originalText;
                button.disabled = false;
            }
        });
    }

    /* --- 2. NAVEGACIÓN SUAVE --- */
    document.querySelectorAll('nav a, .btn').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 70,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* --- 3. DISEÑO DEL HEADER AL SCROLL --- */
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '5px 5%';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        } else {
            header.style.padding = '10px 5%';
            header.style.boxShadow = 'none';
        }
    });
});
