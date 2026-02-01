// Esperar a que todo el contenido de la página esté cargado
document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. GESTIÓN DEL FORMULARIO (ENVÍO A GMAIL) --- */
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault(); // Evita que la página se recargue o se vaya a otra web
            
            const data = new FormData(contactForm);
            const button = contactForm.querySelector('button');
            
            // Cambiar estado del botón mientras se envía
            const originalButtonText = button.innerText;
            button.innerText = 'Enviando...';
            button.disabled = true;

            try {
                // Enviar datos a Formspree mediante AJAX
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Mensaje de éxito si todo ha ido bien
                    alert('¡Gracias! Tu mensaje ha sido enviado correctamente. Jarvey te contactará muy pronto.');
                    contactForm.reset(); // Limpiar el formulario
                } else {
                    // Si hay un error en la respuesta del servidor
                    alert('Huy, algo ha fallado. Por favor, asegúrate de haber confirmado tu correo en Formspree o inténtalo de nuevo.');
                }
            } catch (error) {
                // Si hay un error de conexión (internet, etc.)
                alert('No hemos podido conectar con el servidor. Por favor, revisa tu conexión o escríbenos por WhatsApp.');
            } finally {
                // Restaurar el botón a su estado original
                button.innerText = originalButtonText;
                button.disabled = false;
            }
        });
    }

    /* --- 2. NAVEGACIÓN SUAVE (SCROLL) --- */
    const menuLinks = document.querySelectorAll('nav a, .btn, .hero-btns a');
    
    menuLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Verificar que sea un enlace interno que empiece con #
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Espacio para que el menú no tape el título
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* --- 3. EFECTO VISUAL DEL HEADER AL HACER SCROLL --- */
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            // Cuando bajamos: el menú se vuelve más compacto y sólido
            header.style.padding = '5px 5%';
            header.style.background = 'rgba(255, 255, 255, 0.98)';
            header.style.boxShadow = '0 2px 15px rgba(0,0,0,0.1)';
        } else {
            // Cuando estamos arriba: el menú recupera su tamaño original
            header.style.padding = '10px 5%';
            header.style.background = '#ffffff';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
        }
    });

});