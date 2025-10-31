// Selecciona (y guarda) el primer elemento del DOM que tenga la clase "header".
// Representa el <header> de la página.
const header = document.querySelector('header');
// Selecciona (y guarda) el primer elemento del DOM que tenga la clase "barra-reservas".
// Representa la barra de reservas que queremos mostrar/ocultar.
const barraReservas = document.querySelector('.barra-reservas');


// Añade un 'escuchador' para el evento de scroll en la ventana del navegador.
// La función dentro se ejecutará cada vez que el usuario haga scroll (suba o baje).
window.addEventListener('scroll', () => {
    // Calcula la posición (en píxeles) donde termina el header en el documento.
    // offsetTop = distancia desde el inicio de la página hasta la parte superior del header.
    // offsetHeight = altura en píxeles del header.
    // Sumando ambos obtenemos la coordenada donde acaba el header.
    const headerBottom = header.offsetTop + header.offsetHeight - 150;
    // window.scrollY indica cuántos píxeles hemos bajado con respecto al inicio de la página.
    // Si hemos hecho más scroll que la posición donde acaba el header, significa que
    // ya no estamos viendo el header (estamos fuera de su zona).
    if (window.scrollY > headerBottom) {
        // Añade la clase 'hidden' a la barra de reservas.
        // Esto cambia las clases del elemento; en CSS la clase 'hidden' suele ocultarla.
        barraReservas.classList.add('hidden'); // fuera del header
    } else {
        // Quita la clase 'hidden' de la barra de reservas.
        // Al quitarla, la barra vuelve a su estado visible según el CSS base.
        barraReservas.classList.remove('hidden'); // dentro del header
    }
});