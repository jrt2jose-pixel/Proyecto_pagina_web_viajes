emailjs.init("TU_PUBLIC_KEY_AQUI");

document.getElementById('form-suscripcion').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const btn = document.getElementById('btn-suscribir');
    const mensajeEstado = document.getElementById('mensaje-estado');
    
    btn.textContent = 'Enviando...';
    mensajeEstado.style.display = 'none';
    const params = {
        to_name: document.getElementById('nombre_usuario').value,
        to_email: document.getElementById('correo_usuario').value,
    };

    const serviceID = 'TU_SERVICE_ID_AQUI';
    const templateID = 'TU_TEMPLATE_ID_AQUI';

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            btn.textContent = 'Suscribirse';
            mensajeEstado.style.display = 'block';
            mensajeEstado.style.color = '#27ae60'; 
            mensajeEstado.textContent = '¡Suscripción exitosa! Revisa tu bandeja de entrada.';
            document.getElementById('form-suscripcion').reset(); 
        }, (err) => {
            btn.textContent = 'Suscribirse';
            mensajeEstado.style.display = 'block';
            mensajeEstado.style.color = '#c0392b';
            mensajeEstado.textContent = 'Hubo un error al suscribirte. Intenta de nuevo más tarde.';
            console.error('Error de EmailJS:', err);
        });
});