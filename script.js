function showNotification(message, duration = 3000) {
    const notification = document.getElementById('downloadNotification');
    notification.textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
        notification.classList.remove('show');
    }, duration);
}

async function downloadPDF(documentName, filePath, button) {
    try {
        showNotification(`Descargando ${documentName}...`);

        const link = document.createElement('a');
        link.href = filePath;
        link.download = `${documentName}.pdf`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        animateButton(button); // Asegúrate de pasar el botón correcto
    } catch (error) {
        showNotification(`Error al descargar ${documentName}`, 5000);
        console.error('Error al descargar:', error);
    }
}

function animateButton(button) {
    if (button) {
        button.classList.add('animate__animated', 'animate__pulse');
        setTimeout(() => {
            button.classList.remove('animate__animated', 'animate__pulse');
        }, 1000);
    }
}

function handleThemeChange() {
    const logoLight = document.querySelector('.logo-light');
    const logoDark = document.querySelector('.logo-dark');

    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        logoLight.style.display = 'none';
        logoDark.style.display = 'block';
    } else {
        logoLight.style.display = 'block';
        logoDark.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', () => {
    handleThemeChange();
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', handleThemeChange);
});
