/**
 * SuDu AI - Components Injection
 * Injects Navbar and Footer from external HTML files
 */

async function injectComponent(containerId, filePath) {
    const container = document.getElementById(containerId);
    if (!container) return;

    try {
        const response = await fetch(filePath);
        if (!response.ok) throw new Error(`Failed to load ${filePath}`);
        const html = await response.text();
        container.innerHTML = html;

        // Initialize Lucide icons if they haven't been initialized yet
        if (window.lucide) {
            lucide.createIcons();
        }

        // Special handling for navbar to mark active link
        if (containerId === 'navbar-container') {
            const currentPath = window.location.pathname.split('/').pop() || 'index.html';
            const navLinks = container.querySelectorAll('a');
            navLinks.forEach(link => {
                if (link.getAttribute('href') === currentPath) {
                    link.classList.add('active-nav-link');
                }
            });

            // Re-initialize mobile menu after injection
            if (typeof initMobileMenu === 'function') {
                initMobileMenu();
            }
        }

        // Re-initialize stars if footer/whatever contains them or just to be safe
        if (typeof initStars === 'function') {
            initStars();
        }
    } catch (error) {
        console.error('Error injecting component:', error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    // Inject Navbar
    injectComponent('navbar-container', 'header.html');

    // Inject Footer
    injectComponent('footer-container', 'footer.html');
});
