function repos() {
	const el = document.querySelector('.container')
	const w = (window.innerWidth * 0.97 - el.offsetWidth) * Math.random()
	const h = (window.innerHeight - el.offsetHeight) * Math.random()

	el.style.position = 'absolute';
	el.style.left = `${w}px`;
	el.style.top  = `${h}px`;

}