// Esperar a que el documento esté cargado
document.addEventListener('DOMContentLoaded', () => {

    // 1. Navegación fluida para los enlaces del menú
    const links = document.querySelectorAll('nav a, .btn, .hero-btns a');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Solo aplicar si es un enlace interno (que empieza con #)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 70, // Espacio para el menú fijo
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Manejo del Formulario de Contacto
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Aquí capturamos los datos (puedes conectarlo con un servicio de email luego)
            const formData = new FormData(contactForm);
            const nombre = formData.get('nombre'); // Asegúrate de que los inputs tengan name="nombre"
            
            alert('¡Gracias por contactar con Jarvey! Hemos recibido tu mensaje y te responderemos muy pronto.');
            contactForm.reset();
        });
    }

    // 3. Efecto visual al hacer scroll en el Header
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '0.5rem 5%';
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '1rem 5%';
            header.style.background = '#ffffff';
        }
    });

});