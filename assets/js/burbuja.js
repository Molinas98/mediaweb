document.addEventListener("DOMContentLoaded", () => {
	document.querySelectorAll('.bubble').forEach(el => {
		const color = el.getAttribute('data-color');
		if (color) {
			el.style.setProperty('--bubble-color', color);
		}
	});
});