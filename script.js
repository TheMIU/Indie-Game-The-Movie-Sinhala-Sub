console.log("running")

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) {
            e.target.style.opacity = '1';
            e.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.stat-card, .howto-card, .download-card, .translator-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Download counter feedback
document.querySelector('.btn-primary[download]')?.addEventListener('click', function () {
    const orig = this.innerHTML;
    this.innerHTML = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg> සූදානම් වෙමින්...`;
    setTimeout(() => this.innerHTML = orig, 2500);
});