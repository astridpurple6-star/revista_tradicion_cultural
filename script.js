document.addEventListener('DOMContentLoaded', () => {
    console.log("Revista Digital cargada. ¡Interactividad lista!");

    // ==========================================================
    // 1. LÓGICA DE APERTURA DE VIDEOS CORTOS EN MODAL
    // ==========================================================
    
    const smallVideoLinks = document.querySelectorAll('.video-item-small');

    smallVideoLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Detiene la navegación estándar
            const videoUrl = link.getAttribute('href');

            // 1. Crear el overlay del modal
            const modalOverlay = document.createElement('div');
            modalOverlay.classList.add('modal-overlay');
            
            // 2. Crear el contenido del modal (video y botón de cierre)
            const modalContent = document.createElement('div');
            modalContent.classList.add('modal-content');

            // Insertar el iframe del video (la clase video-responsive lo hace 16:9)
            modalContent.innerHTML = `
                <div class="video-responsive">
                    <iframe 
                        src="${videoUrl}" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    ></iframe>
                </div>
                <button class="close-button" aria-label="Cerrar video">X</button>
            `;
            
            modalOverlay.appendChild(modalContent);
            document.body.appendChild(modalOverlay);

            // Lógica para cerrar el modal
            const closeButton = modalContent.querySelector('.close-button');
            
            function closeModal() {
                modalOverlay.remove();
            }

            // Cierra al hacer clic en el botón X
            closeButton.addEventListener('click', closeModal);
            
            // Cierra al hacer clic en el fondo oscuro
            modalOverlay.addEventListener('click', (e) => {
                if (e.target === modalOverlay) {
                    closeModal();
                }
            });
        });
    });

    // ==========================================================
    // 2. FUNCIONALIDAD RESPONSIVA (EJEMPLO: COLAPSAR SECCIONES)
    //    Requiere la clase .collapsible-section y .toggle-button en tu HTML
    // ==========================================================
    
    const collapsibleSections = document.querySelectorAll('.collapsible-section');
    
    collapsibleSections.forEach(section => {
        const toggleButton = section.querySelector('.toggle-button');
        const content = section.querySelector('.collapsible-content');

        if (toggleButton) {
            toggleButton.addEventListener('click', () => {
                content.classList.toggle('is-expanded');
                toggleButton.textContent = content.classList.contains('is-expanded') ? 'Ver menos' : 'Ver más';
            });
        }
    });

});