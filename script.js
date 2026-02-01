/**
 * ARCHIVO: script.js
 * EMPRESA: Jardines y Multiservicios Jarvey
 * DESCRIPCIÓN: Control de navegación, animaciones y formulario.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. MANEJO DEL FORMULARIO DE CONTACTO
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Captura de datos básicos
            const nombre = this.querySelector('input[type="text"]').value;
            const btn = this.querySelector('button');

            // Efecto visual en el botón al enviar
            btn.innerText = 'Enviando...';
            btn.disabled = true;

            // Simulación de envío (aquí se integraría el backend en el futuro)
            setTimeout(() => {
                alert(`¡Gracias ${nombre}! Tu solicitud ha sido enviada a Jarvey. Nos pondremos en contacto contigo a la brevedad.`);
                btn.innerText = 'Enviar Solicitud';
                btn.disabled = false;
                this.reset();
            }, 1500);
        });
    }

    // 2. HEADER DINÁMICO AL HACER SCROLL
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.padding = '10px 5%';
            header.style.boxShadow = '0 5px 20px rgba(0,0,0,0.1)';
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.padding = '20px 5%';
            header.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
            header.style.backgroundColor = '#ffffff';
        }
    });

    // 3. ANIMACIÓN DE APARICIÓN (REVEAL) PARA LAS TARJETAS DE SERVICIOS
    const observerOptions = {
        threshold: 0.2
    };

    const revealOnScroll = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const cards = document.querySelectorAll('.servicio-card');
    cards.forEach(card => {
        // Estado inicial de la animación
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.8s ease-out';
        revealOnScroll.observe(card);
    });

    // 4. SCROLL SUAVE PARA ENLACES INTERNOS
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 70, // Espacio para el header fijo
                    behavior: 'smooth'
                });
            }
        });
    });

});

console.log("Sistema de Jardines y Multiservicios Jarvey inicializado.");