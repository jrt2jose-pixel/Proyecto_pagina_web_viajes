emailjs.init("t3ALAkM5ktEpILsle");

document.getElementById('form-suscripcion').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const btn = document.getElementById('btn-suscribir');
    const mensajeEstado = document.getElementById('mensaje-estado');
    
    btn.textContent = 'Enviando...';
    btn.disabled = true; 
    mensajeEstado.style.display = 'none';

        const params = {
        to_name: document.getElementById('nombre_usuario').value,
        to_email: document.getElementById('correo_usuario').value,
    };

    const serviceID = 'service_kcqvn0k';
    const templateID = 'template_y1ndo1o';

    emailjs.send(serviceID, templateID, params)
        .then(() => {
            btn.textContent = 'Suscribirse';
            btn.disabled = false;
            mensajeEstado.style.display = 'block';
            mensajeEstado.style.color = '#27ae60';
            mensajeEstado.textContent = '¡Suscripción exitosa! Revisa tu bandeja de entrada.';
            document.getElementById('form-suscripcion').reset(); 
        }, (err) => {
            btn.textContent = 'Suscribirse';
            btn.disabled = false;
            mensajeEstado.style.display = 'block';
            mensajeEstado.style.color = '#c0392b';
            mensajeEstado.textContent = 'Hubo un error al suscribirte. Intenta de nuevo.';
            console.error('Error de EmailJS:', err);
        });
});