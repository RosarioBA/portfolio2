// Enhanced header on scroll and progress bar
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const scrollProgress = document.querySelector('.scroll-progress');
    const scrollTop = window.pageYOffset;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    // Update progress bar
    if (scrollProgress) {
        scrollProgress.style.width = scrollPercent + '%';
    }
    
    // Update header
    if (header) {
        if (window.scrollY > 50) {
            header.style.background = 'rgba(254, 254, 254, 0.98)';
            header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
        } else {
            header.style.background = 'rgba(254, 254, 254, 0.95)';
            header.style.boxShadow = 'none';
        }
    }
});

// Cursor trail effect
let mouseX = 0, mouseY = 0;
let trailElements = [];

// Create trail elements
for (let i = 0; i < 5; i++) {
    const trail = document.createElement('div');
    trail.className = 'cursor-trail';
    document.body.appendChild(trail);
    trailElements.push(trail);
}

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    
    trailElements.forEach((trail, index) => {
        setTimeout(() => {
            trail.style.left = mouseX + 'px';
            trail.style.top = mouseY + 'px';
            trail.style.opacity = '1';
            trail.style.transform = `scale(${1 - index * 0.2})`;
        }, index * 50);
    });
});

// Hide cursor trail when mouse leaves
document.addEventListener('mouseleave', () => {
    trailElements.forEach(trail => {
        trail.style.opacity = '0';
    });
});

// Fun emoji reactions on clicks
function createEmojiReaction(x, y) {
    const emojis = ['🎉', '✨', '🚀', '💫', '🌟', '⭐', '💡', '🎯'];
    const emoji = document.createElement('div');
    emoji.className = 'emoji-reaction';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = x + 'px';
    emoji.style.top = y + 'px';
    document.body.appendChild(emoji);
    
    setTimeout(() => {
        emoji.remove();
    }, 2000);
}

// Easter egg functionality
let clickCount = 0;
document.addEventListener('click', (e) => {
    clickCount++;
    createEmojiReaction(e.clientX, e.clientY);
    
    if (clickCount === 10) {
        const easterEgg = document.getElementById('easterEgg');
        if (easterEgg) {
            easterEgg.classList.add('show');
            setTimeout(() => {
                easterEgg.classList.remove('show');
            }, 3000);
        }
    }
});

// Staggered animation for project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, index * 150);
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(card);
    });

    // Start typewriter effect after page load
    setTimeout(() => {
        const typewriter = document.querySelector('.typewriter');
        if (typewriter) {
            typewriter.style.animation = 'typing 3.5s steps(40, end), blink-caret 0.75s step-end infinite';
        }
    }, 500);
});

// Subtle parallax for floating elements
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.floating-element');
    const scrolled = window.pageYOffset;
    
    elements.forEach((element, index) => {
        const speed = (index + 1) * 0.1;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// Fun navigation interactions
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-2px)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0)';
    });
});

// Skill tags hover effect
document.querySelectorAll('.skill-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-3px) scale(1.05)';
        tag.style.boxShadow = '0 8px 25px rgba(0, 0, 0, 0.15)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
        tag.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05)';
    });
});

// Social links fun interactions
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.style.transform = 'translateY(-5px) rotate(5deg)';
    });
    
    link.addEventListener('mouseleave', () => {
        link.style.transform = 'translateY(0) rotate(0deg)';
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
// Expandable Projects Functionality

function toggleProject(headerElement) {
    const projectItem = headerElement.parentElement;
    const isActive = projectItem.classList.contains('active');
    
    // Close all other projects
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current project
    if (!isActive) {
        projectItem.classList.add('active');
    }
}

// Optional: Close project when clicking outside
document.addEventListener('click', function(event) {
    const projectsContainer = document.querySelector('.projects-list');
    if (projectsContainer && !projectsContainer.contains(event.target)) {
        // Could close all projects here if desired
        // document.querySelectorAll('.project-item').forEach(item => {
        //     item.classList.remove('active');
        // });
    }
});

// Projects Toggle Function
function toggleProject(headerElement) {
    const projectItem = headerElement.parentElement;
    const projectsList = document.querySelector('.projects-list');
    const isActive = projectItem.classList.contains('active');
    
    // Close all other projects
    document.querySelectorAll('.project-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Toggle current project
    if (!isActive) {
        projectItem.classList.add('active');
        // Add class to list to trigger left movement
        projectsList.classList.add('has-active');
    } else {
        projectsList.classList.remove('has-active');
    }
}