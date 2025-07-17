// Custom cursor functionality
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');
const interactiveElements = document.querySelectorAll('.interactive');

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

    // Add slight delay to follower for smooth effect
    setTimeout(() => {
        cursorFollower.style.left = e.clientX + 'px';
        cursorFollower.style.top = e.clientY + 'px';
    }, 50);
});

// Cursor hover effects
interactiveElements.forEach(element => {
    element.addEventListener('mouseenter', () => {
        cursor.classList.add('active');
        cursorFollower.classList.add('active');
    });

    element.addEventListener('mouseleave', () => {
        cursor.classList.remove('active');
        cursorFollower.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for scroll animations
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            // Remove visible class when scrolling back up
            entry.target.classList.remove('visible');
        }
    });
}, observerOptions);

// Observe all sections and animated elements
document.querySelectorAll('.scroll-section, .animate-up, .animate-left, .animate-right, .animate-text').forEach(element => {
    observer.observe(element);
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        navbar.classList.remove('scroll-up');
        return;
    }

    if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
        // Scrolling down
        navbar.classList.remove('scroll-up');
        navbar.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
        // Scrolling up
        navbar.classList.remove('scroll-down');
        navbar.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Add ripple effect to buttons
document.querySelectorAll('.apple-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        this.appendChild(ripple);

        const rect = button.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);

        ripple.style.width = ripple.style.height = `${size}px`;
        ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
        ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

        ripple.classList.add('active');

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Navbar background change on scroll with Apple-style blur effect
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'saturate(180%) blur(20px)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
        navbar.style.backdropFilter = 'saturate(180%) blur(20px)';
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', function () {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Apple-style hover effects for cards
document.querySelectorAll('.skill-category, .project-card, .timeline-content').forEach(card => {
    card.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    card.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Apple-style button hover effect
document.querySelectorAll('.apple-button').forEach(button => {
    button.addEventListener('mouseenter', function () {
        this.style.transform = 'scale(1.02)';
        this.style.transition = 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    button.addEventListener('mouseleave', function () {
        this.style.transform = 'scale(1)';
    });
});

// Add smooth reveal animation for stats
const stats = document.querySelectorAll('.stat-number');
stats.forEach(stat => {
    const finalValue = parseInt(stat.textContent);
    let currentValue = 0;
    const duration = 2000; // 2 seconds
    const increment = finalValue / (duration / 16); // 60fps

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const interval = setInterval(() => {
                    currentValue += increment;
                    if (currentValue >= finalValue) {
                        stat.textContent = finalValue + '+';
                        clearInterval(interval);
                    } else {
                        stat.textContent = Math.floor(currentValue) + '+';
                    }
                }, 16);
                observer.unobserve(stat);
            }
        });
    });

    observer.observe(stat);
});

// Initialize animations for elements in view on page load
document.addEventListener('DOMContentLoaded', () => {
    const elements = document.querySelectorAll('.scroll-section, .animate-up, .animate-left, .animate-right, .animate-text');
    elements.forEach(element => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Modal functionality
function createModal(content) {
    const modal = document.createElement('div');
    modal.className = 'modal';
    modal.innerHTML = `
        <div class="modal-content">
            <button class="modal-close">&times;</button>
            ${content}
        </div>
    `;
    document.body.appendChild(modal);

    // Add event listeners
    modal.querySelector('.modal-close').addEventListener('click', () => {
        modal.classList.remove('active');
        setTimeout(() => modal.remove(), 300);
    });

    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            setTimeout(() => modal.remove(), 300);
        }
    });

    // Show modal
    setTimeout(() => modal.classList.add('active'), 10);
}

// Section button handlers
function toggleResume() {
    createModal(`
        <h2>Resume</h2>
        <div class="resume-content">
            <h3>Education</h3>
            <p>UCLA - Computer Science (2021-2025)</p>
            <h3>Experience</h3>
            <p>Software Engineering Intern - Tech Company</p>
            <p>Research Assistant - UCLA CS Department</p>
            <h3>Skills</h3>
            <p>Programming Languages, Web Technologies, Tools</p>
        </div>
    `);
}

function toggleTimeline() {
    createModal(`
        <h2>My Journey</h2>
        <div class="timeline-content">
            <div class="timeline-item">
                <h3>2021</h3>
                <p>Started at UCLA</p>
            </div>
            <div class="timeline-item">
                <h3>2022</h3>
                <p>First Internship</p>
            </div>
            <div class="timeline-item">
                <h3>2023</h3>
                <p>Research Project</p>
            </div>
        </div>
    `);
}

function toggleCoursework() {
    createModal(`
        <h2>Coursework</h2>
        <div class="coursework-content">
            <h3>Computer Science</h3>
            <ul>
                <li>Data Structures and Algorithms</li>
                <li>Machine Learning</li>
                <li>Computer Architecture</li>
                <li>Operating Systems</li>
            </ul>
        </div>
    `);
}

function toggleCertifications() {
    createModal(`
        <h2>Certifications</h2>
        <div class="certifications-content">
            <div class="cert-item">
                <h3>AWS Certified Developer</h3>
                <p>Issued: 2023</p>
            </div>
            <div class="cert-item">
                <h3>Google Cloud Professional</h3>
                <p>Issued: 2022</p>
            </div>
        </div>
    `);
}

function toggleSkillDetails() {
    createModal(`
        <h2>Skill Details</h2>
        <div class="skill-details-content">
            <div class="skill-category">
                <h3>Python</h3>
                <p>Advanced proficiency in data analysis, machine learning, and web development</p>
            </div>
            <div class="skill-category">
                <h3>React</h3>
                <p>Expert in modern React development, hooks, and state management</p>
            </div>
        </div>
    `);
}

function toggleSkillProgress() {
    createModal(`
        <h2>Learning Progress</h2>
        <div class="progress-content">
            <div class="progress-item">
                <h3>Machine Learning</h3>
                <div class="progress-bar">
                    <div class="progress" style="width: 85%"></div>
                </div>
            </div>
            <div class="progress-item">
                <h3>Cloud Computing</h3>
                <div class="progress-bar">
                    <div class="progress" style="width: 70%"></div>
                </div>
            </div>
        </div>
    `);
}

function toggleProjectGallery() {
    createModal(`
        <h2>Project Gallery</h2>
        <div class="gallery-content">
            <div class="gallery-item">
                <img src="project1.jpg" alt="Project 1">
                <h3>AI Study Assistant</h3>
            </div>
            <div class="gallery-item">
                <img src="project2.jpg" alt="Project 2">
                <h3>Smart Campus</h3>
            </div>
        </div>
    `);
}

function toggleProjectDetails() {
    createModal(`
        <h2>All Projects</h2>
        <div class="projects-content">
            <div class="project-item">
                <h3>AI Study Assistant</h3>
                <p>Machine learning application for study optimization</p>
            </div>
            <div class="project-item">
                <h3>Smart Campus Navigation</h3>
                <p>AR app for campus navigation</p>
            </div>
            <div class="project-item">
                <h3>EcoTrack</h3>
                <p>Sustainability tracking platform</p>
            </div>
        </div>
    `);
}

function toggleContactForm() {
    createModal(`
        <h2>Send Message</h2>
        <form class="contact-form">
            <div class="form-group">
                <label for="name">Name</label>
                <input type="text" id="name" required>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" id="email" required>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea id="message" required></textarea>
            </div>
            <button type="submit" class="apple-button">Send Message</button>
        </form>
    `);
}

function toggleAvailability() {
    createModal(`
        <h2>Availability</h2>
        <div class="availability-content">
            <h3>Current Status</h3>
            <p>Available for freelance projects and internships</p>
            <h3>Schedule</h3>
            <p>Monday - Friday: 9 AM - 5 PM PST</p>
            <h3>Response Time</h3>
            <p>Usually within 24 hours</p>
        </div>
    `);
} 