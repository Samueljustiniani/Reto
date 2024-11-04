let currentIndex = 0; // Índice del slide actual
const items = document.querySelectorAll('.carousel-item');

function moveSlide(direction) {
    // Oculta el slide actual
    items[currentIndex].style.display = 'none';
    
    // Actualiza el índice según la dirección
    currentIndex += direction;
    
    // Si el índice se sale de rango, vuelve al inicio o final
    if (currentIndex >= items.length) {
        currentIndex = 0;
    } else if (currentIndex < 0) {
        currentIndex = items.length - 1;
    }
    
    // Muestra el nuevo slide
    items[currentIndex].style.display = 'flex'; // Flex para alinear el contenido en fila
}

// Inicializa el carrusel mostrando solo el primer slide
items.forEach((item, index) => {
    item.style.display = index === currentIndex ? 'flex' : 'none'; // Muestra solo el primer slide
});
