        // Función para cambiar el logo según el esquema de color
        function updateLogoBasedOnTheme() {
            const logoLight = document.querySelector('.logo-light');
            const logoDark = document.querySelector('.logo-dark');
            
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                // Modo oscuro
                logoLight.style.display = 'none';
                logoLight.style.opacity = '0';
                logoDark.style.display = 'block';
                logoDark.style.opacity = '1';
            } else {
                // Modo claro
                logoLight.style.display = 'block';
                logoLight.style.opacity = '1';
                logoDark.style.display = 'none';
                logoDark.style.opacity = '0';
            }
        }

        // Verificar al cargar la página
        document.addEventListener('DOMContentLoaded', updateLogoBasedOnTheme);

        // Escuchar cambios en el esquema de color
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateLogoBasedOnTheme);
        
        function downloadPDF(documentName, filePath) {
            //Crear elemento de anclaje temporal
          const link = document.createElement('a');
          link.href = filePath;
          link.download = documentName + '.pdf';
          document.body.appendChild(link);

            //Activar la descarga
          link.click();
            //Elminar el elemento
          document.body.removeChild(link)
            //Mostrar la confirmacion de la descarga
          showDownloadNotification(documentName);

            //Añadir animacion al boton pulsado
          const button = document.querySelectorAll('.btn-download');
          buttons.forEach(btn => {
            btn.classList.remove('animate_animated', 'animate_pulse');
          });
          event.target.classList.add('animate_animated', 'animate_pulse');
        }

        function showDownloadNotification(documentName) {
          const notification = document.getElementById('downloadNotification');
          notification.textContent = `Descargando ${documentName}...`;
          notification.style.display = 'block';
          notification.ClassList.add('animate_animated', 'animate_fadeInRight');
            //Ocultar despues de 3 segundos
          setTimeout (() => {
            notification.classList.remove('animate_fadeInRight');
            notification.classList.add('animate_fadeOutRight');

            setTimeout(() => {
              notification.style.display = 'none';
              notification.classList.remove('animate_fadeOutRight');
            }, 500);
          }, 300);
        }