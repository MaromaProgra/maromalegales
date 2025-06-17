  // Opcional: Confirmar cuando usuario haga click en botón de descarga
document.querySelectorAll('.btn-download').forEach(btn => {
btn.addEventListener('click', e => {
      // Puedes suprimir alert si no deseas interrupciones
    alert('Gracias por descargar el documento.');
});
});