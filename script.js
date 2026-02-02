document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. NAVEGACIÓN SUAVE (SCROLL) --- */
    // Mantenemos la funcionalidad para que al pulsar en el menú la página baje suavemente
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
                        top: targetElement.offsetTop - 70, // Ajuste para que el menú no tape el título
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    /* --- 2. HEADER DINÁMICO AL HACER SCROLL --- */
    // El menú cambia ligeramente de aspecto al bajar para mejorar la visibilidad
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

    /* --- 3. NOTA SOBRE EL FORMULARIO --- */
    // Hemos eliminado la gestión por fetch/AJAX para permitir que el 'mailto' 
    // definido en el HTML abra directamente el gestor de correo del usuario.
    console.log("Configuración de Jarvey lista: Envío directo por mailto activado.");

});
