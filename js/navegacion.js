
function navegar(url) {
    window.open(url, '_self')
}

function playSong(id) {
    let cancion = document.getElementById(id);
    
    if (cancion.classList.contains('pausa')) {
        cancion.classList.remove('pausa');
        cancion.className += " reprod";
        cancion.play()
    } else {
        cancion.classList.remove('reprod');
        cancion.className += " pausa";
        cancion.pause()
    }


}