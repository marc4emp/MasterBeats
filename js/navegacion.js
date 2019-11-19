
function navegar(url) {
    window.open(url, '_self')
}

function playSong(id) {
    let cancion = document.getElementById(id);
    
    if (cancion.classList.contains('pausa')) {
        cancion.classList.remove('pausa');
        cancion.className += " reprod";
        cancion.parentNode.classList.remove('pausa');
        cancion.parentNode.className += " reprod";
        cancion.play()
    } else {
        cancion.classList.remove('reprod');
        cancion.className += " pausa";
        cancion.parentNode.classList.remove('reprod');
        cancion.parentNode.className += " pausa";
        cancion.pause()
    }


}