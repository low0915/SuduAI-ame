
async function injectComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        container.innerHTML = html;

        if (window.lucide) {
            lucide.createIcons();
        }

        if (containerId === 'navbar-container') {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = container.querySelectorAll('a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active-nav-link');
                }
            });

            if (typeof initMobileMenu === 'function') {
                initMobileMenu();
            }
        }

        if (typeof initStars === 'function') {
            initStars();
        }
    } catch (error) {
        console.error('Error injecting component:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {

    injectComponent('navbar-container', 'header.html');

    injectComponent('footer-container', 'footer.html');
});