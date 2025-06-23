 // Opcional: Confirmar cuando usuario haga click en botón de descarga
document.querySelectorAll('.btn-download').forEach(btn => {
btn.addEventListener('click', e => {
    alert('Gracias por descargar el documento.');
});
});
