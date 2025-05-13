document.addEventListener("DOMContentLoaded", () => {
	function actualizarRelojParaguay() {
		const opciones = {
			timeZone: 'America/Asuncion',
			hour: 'numeric',
			minute: 'numeric',
			second: 'numeric',
			hour12: true
		};
		
		const ahora = new Date();
		const horaParaguay = ahora.toLocaleTimeString('es-PY', opciones);
		
		document.getElementById('reloj').textContent = horaParaguay;
	}
		
	// Actualiza el reloj cada segundo
	setInterval(actualizarRelojParaguay, 1000);
	// Ejecuta inmediatamente al cargar
	actualizarRelojParaguay();
});