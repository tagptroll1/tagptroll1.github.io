
// Modal functionality
const modal = document.getElementById('imageModal');
const modalImg = document.getElementById('modalImage');
const closeBtn = document.querySelector('.close-modal');
const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
	item.addEventListener('click', () => {
		const imgSrc = item.querySelector('img').src;
		modalImg.src = imgSrc;
		modal.classList.add('active');
	});
});

closeBtn.addEventListener('click', () => {
	modal.classList.remove('active');
});

modal.addEventListener('click', (e) => {
	if (e.target === modal) {
		modal.classList.remove('active');
	}
});

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector(this.getAttribute('href')).scrollIntoView({
			behavior: 'smooth'
		});
	});
});

// Add animation on scroll
const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('animate');
		}
	});
});

document.querySelectorAll('.portfolio-item').forEach((el) => observer.observe(el));
