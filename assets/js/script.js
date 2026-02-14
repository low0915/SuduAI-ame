
function initStars() {
    const starsContainer = document.getElementById('stars');
    if (!starsContainer) return;

    starsContainer.innerHTML = '';

    const starCount = 50;
    for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        star.classList.add('star', 'animate-drift');

        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const size = Math.random() * 2 + 1; 
        const duration = Math.random() * 3 + 2; 
        const delay = Math.random() * 5;
        const opacity = Math.random() * 0.5 + 0.3;

        const driftX = (Math.random() - 0.5) * 40; 
        const driftY = (Math.random() - 0.5) * 40;
        const driftDuration = Math.random() * 20 + 10; 

        star.style.left = `${x}%`;
        star.style.top = `${y}%`;
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.setProperty('--duration', `${duration}s`);
        star.style.setProperty('--delay', `${delay}s`);
        star.style.setProperty('--opacity', opacity);
        star.style.setProperty('--drift-x', `${driftX}px`);
        star.style.setProperty('--drift-y', `${driftY}px`);
        star.style.setProperty('--drift-duration', `${driftDuration}s`);

        starsContainer.appendChild(star);
    }
}

function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    if (!mobileMenuBtn || !mobileMenu) return;

    const newBtn = mobileMenuBtn.cloneNode(true);
    mobileMenuBtn.parentNode.replaceChild(newBtn, mobileMenuBtn);

    let isMenuOpen = false;

    const toggleMenu = (show) => {
        isMenuOpen = show;
        if (isMenuOpen) {
            mobileMenu.classList.remove('opacity-0', 'pointer-events-none', 'scale-95');
            mobileMenu.classList.add('opacity-100', 'pointer-events-auto', 'scale-100');
            newBtn.classList.add('opacity-50');
        } else {
            mobileMenu.classList.add('opacity-0', 'pointer-events-none', 'scale-95');
            mobileMenu.classList.remove('opacity-100', 'pointer-events-auto', 'scale-100');
            newBtn.classList.remove('opacity-50');
        }
    };

    newBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu(!isMenuOpen);
    });

    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    document.addEventListener('click', (e) => {
        if (isMenuOpen && !mobileMenu.contains(e.target) && !newBtn.contains(e.target)) {
            toggleMenu(false);
        }
    });

    mobileMenu.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

function showProductTab(tabId) {
    const btnCore = document.getElementById('btn-core');
    const btnRevenue = document.getElementById('btn-revenue');
    const contentCore = document.getElementById('tab-content-core');
    const contentRevenue = document.getElementById('tab-content-revenue');

    if (!btnCore || !btnRevenue || !contentCore || !contentRevenue) return;

    if (tabId === 'core') {
        btnCore.classList.add('border-sudu-sec', 'text-gray-900');
        btnCore.classList.remove('border-transparent', 'text-gray-400');
        btnRevenue.classList.add('border-transparent', 'text-gray-400');
        btnRevenue.classList.remove('border-sudu-sec', 'text-gray-900');

        contentCore.classList.remove('hidden');
        contentRevenue.classList.add('hidden');
    } else {
        btnRevenue.classList.add('border-sudu-sec', 'text-gray-900');
        btnRevenue.classList.remove('border-transparent', 'text-gray-400');
        btnCore.classList.add('border-transparent', 'text-gray-400');
        btnCore.classList.remove('border-sudu-sec', 'text-gray-900');

        contentRevenue.classList.remove('hidden');
        contentCore.classList.add('hidden');
    }

    if (window.lucide) {
        lucide.createIcons();
    }
}

function togglePricing(type) {
    const perBtn = document.getElementById('toggle-per');
    const fullBtn = document.getElementById('toggle-full');

    if (!perBtn || !fullBtn) return;

    if (type === 'per') {
        perBtn.classList.add('bg-[#003406]', 'text-white');
        perBtn.classList.remove('text-[#003406]', 'hover:bg-gray-50');
        fullBtn.classList.remove('bg-[#003406]', 'text-white');
        fullBtn.classList.add('text-[#003406]', 'hover:bg-gray-50');
    } else {
        fullBtn.classList.add('bg-[#003406]', 'text-white');
        fullBtn.classList.remove('text-[#003406]', 'hover:bg-gray-50');
        perBtn.classList.remove('bg-[#003406]', 'text-white');
        perBtn.classList.add('text-[#003406]', 'hover:bg-gray-50');
    }
}

const agents = [
    {
        id: "text",
        name: "Text",
        description: "Communicate with the AI Agent using natural language to search records, generate reports, and perform ERP actions quickly and accurately.",
        consoleTask: "Natural Language Interaction",
        consoleStatus: "Processing data stream...",
        cpu: "12%",
        mem: "450MB",
        net: "1.2GB/s",
        video: "assets/videos/Ai_Text.mp4"
    },
    {
        id: "voice",
        name: "Voice",
        description: "Seamlessly integrate voice commands to manage production status, update inventory, or query financial data through AI voice synthesis.",
        consoleTask: "Voice Synthesis Loop",
        consoleStatus: "Listening for input...",
        cpu: "18%",
        mem: "620MB",
        net: "2.4GB/s",
        video: "assets/videos/AI_voice.mp4"
    },
    {
        id: "upload",
        name: "Upload",
        description: "Advanced document processing automatically extracts metadata from invoices, POs, and shipping manifests to populate your ERP system.",
        consoleTask: "Document OCR Engine",
        consoleStatus: "Extracting metadata...",
        cpu: "25%",
        mem: "890MB",
        net: "0.8GB/s",
        video: "assets/videos/Ai_Capture.mp4"
    },
    {
        id: "capture",
        name: "Capture",
        description: "Integrated with familiar messaging application such as WhatsApp and Email to send the details and notifications to the customers.",
        consoleTask: "Vision Stream Analysis",
        consoleStatus: "Scanning barcodes...",
        cpu: "32%",
        mem: "1.2GB",
        net: "4.5GB/s",
        video: "assets/videos/Ai_Email Whatsapp.mp4"
    }
];

let currentAgentIndex = 0;
let autoSlideInterval;

function switchAgent(index, resetTimer = true) {
    currentAgentIndex = index;
    const tabs = document.querySelectorAll('.agent-tab');
    const descArea = document.getElementById('agent-description');

    const termModule = document.getElementById('term-module');
    const termTask = document.getElementById('term-task');
    const termStatus = document.getElementById('term-status');
    const termCpu = document.getElementById('term-cpu');
    const termMem = document.getElementById('term-mem');
    const termNet = document.getElementById('term-net');
    const agentVideo = document.getElementById('agent-video');

    if (!tabs.length || !descArea) return;

    tabs.forEach((tab, i) => {
        if (i === index) {
            tab.classList.add('active-agent');
            tab.classList.remove('text-gray-400');
        } else {
            tab.classList.remove('active-agent');
            tab.classList.add('text-gray-400');
        }
    });

    descArea.style.opacity = 0;
    setTimeout(() => {
        const p = descArea.querySelector('p');
        if (p) p.innerText = agents[index].description;

        if (termModule) termModule.innerText = agents[index].id + "_module";
        if (termTask) termTask.innerText = agents[index].consoleTask;
        if (termStatus) termStatus.innerText = agents[index].consoleStatus;
        if (termCpu) termCpu.innerText = agents[index].cpu;
        if (termMem) termMem.innerText = agents[index].mem;
        if (termNet) termNet.innerText = agents[index].net;

        if (agentVideo && agents[index].video) {
            agentVideo.src = agents[index].video;
            agentVideo.load(); 
            agentVideo.play(); 
        }

        descArea.style.opacity = 1;
    }, 200);

    if (resetTimer) {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }
}

function startAutoSlide() {
    const agentVideo = document.getElementById('agent-video');
    if (!agentVideo) return;

    clearInterval(autoSlideInterval);

    agentVideo.onended = () => {
        currentAgentIndex = (currentAgentIndex + 1) % agents.length;
        switchAgent(currentAgentIndex, false);
    };

    autoSlideInterval = setInterval(() => {

        if (agentVideo.paused || agentVideo.ended) {
            currentAgentIndex = (currentAgentIndex + 1) % agents.length;
            switchAgent(currentAgentIndex, false);
        }
    }, 15000);
}

function initRevealAnimations() {

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    revealElements.forEach(el => revealObserver.observe(el));

    const scrollElements = document.querySelectorAll('.reveal-on-scroll');
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                if (entry.target.hasAttribute('data-reveal-class')) {
                    entry.target.classList.add(entry.target.getAttribute('data-reveal-class'));
                } else if (entry.target.classList.contains('reveal-on-scroll')) {

                    if (window.location.pathname.includes('careers')) {
                        entry.target.classList.add('animate-fade-in-up');
                    } else {
                        entry.target.classList.add('reveal-visible');
                    }
                }
                scrollObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    scrollElements.forEach(el => scrollObserver.observe(el));
}

function initContactForm() {
    const contactForm = document.getElementById('contact-form');
    const successMessage = document.getElementById('success-message');
    if (!contactForm || !successMessage) return;

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        successMessage.classList.remove('hidden');
    });

    const resetBtn = successMessage.querySelector('button');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            contactForm.reset();
            successMessage.classList.add('hidden');
        });
    }
}

function initOnboardingFlow() {
    const section = document.getElementById('onboarding-section');
    const path = document.getElementById('onboarding-flow-path');
    const steps = document.querySelectorAll('.onboarding-step');

    if (!section || !path) return;

    const pathLength = path.getTotalLength();
    path.style.strokeDasharray = pathLength;
    path.style.strokeDashoffset = pathLength;

    function updateFlow() {
        const sectionRect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        const start = windowHeight * 0.8;
        const end = windowHeight * 0.2;
        let progress = (start - sectionRect.top) / (start - end);
        progress = Math.max(0, Math.min(1, progress));

        path.style.strokeDashoffset = pathLength * (1 - progress);

        steps.forEach((step, index) => {
            const stepThreshold = (index + 0.5) / steps.length;
            if (progress >= stepThreshold) {
                step.classList.add('step-active');
            } else {
                step.classList.remove('step-active');
            }
        });
    }

    window.addEventListener('scroll', updateFlow);
    updateFlow(); 
}

document.addEventListener('DOMContentLoaded', () => {
    initStars();
    initMobileMenu();
    initRevealAnimations();
    initContactForm();
    initOnboardingFlow();

    if (document.querySelector('.agent-tab')) {
        switchAgent(0, false);
        startAutoSlide();
    }

    if (window.lucide) {
        lucide.createIcons();
    }
});