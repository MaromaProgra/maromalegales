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