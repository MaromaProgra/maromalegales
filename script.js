//Notificaciones
function showNotification(message, duration = 3000) {
  const notification = document.getElementById('downloadNotification');
  notification.textContent = message;
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, duration);
}

//Funcion de descargas y manejo de errores
async function downloadPDF(documentName, filePath) {
  try {
    //prioridad de notificacion
    showNotification(`Descargando ${documentName}...`);

    //Crear y disparar descarga
    const link = document.createElement('a');
    link.href = filePath;
    link.download = `${documentName}.pdf`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    //boton animacion
    animateButton(event.target);
  } catch (error) {
    showNotification(`Error al descargar ${documentName}`, 5000);
    console.error('Error al descargar:', error);
  }
}

//Funcion del boton
function animateButton(button) {
  button.classList.add('animate__animated', 'animate__pulse');
  setTimeout(() => {
    button.classList.remove(`animate__animated`, `animate__pulse`);
  }, 1000);
}

//Deteccion de tema
function handleThemeChange() {
  const logoLight = document.querySelector(`.logo-light`);
  const logoDark = document.querySelector(`.logo-dark`);

  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    //Modo obscuro
    logoLight.style.display = 'none';
    logoLight.style.opacity = '0';
    logoDark.style.display = 'block';
    logoDark.style.opacity = '1'
  } else {
    //Modo claro
    logoLight.style.display = 'block';
    logoLight.style.opacity = '1';
    logoDark.style.display = 'none'
    logoDark.style.opacity = '0'

  }
}

//Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
  handleThemeChange();
  //Escucha cambios
  window.matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', handleThemeChange);
})