<?php
require_once 'config/database.php';

$page_title = 'About Us - Tech Hub Faisalabad';
$page_description = 'Learn about Tech Hub Faisalabad, the premier IT learning institute in the region.';

include 'includes/header.php';
?>

<main>
    <!-- About Hero Section -->
    <section class="about-hero-section">
        <div class="container">
            <div class="hero-text animate-fade-in-fast">
                <h1 class="hero-title animate-text-pulse">About Tech Hub</h1>
                <p class="hero-description">
                    Tech Hub Faisalabad is the premier <strong>IT learning institute</strong> in the region, 
                    dedicated to providing <strong>top-quality technology education</strong>.
                </p>
            </div>
        </div>
    </section>

    <!-- Mission & Vision -->
    <section class="mission-vision-section">
        <div class="container">
            <div class="mission-vision-grid">
                <div class="mission-card animate-scale-in-fast">
                    <h2>Our Mission</h2>
                    <p>To empower individuals with cutting-edge technical skills and practical knowledge that transforms them into industry-ready professionals, while fostering innovation and excellence in technology education.</p>
                </div>
                <div class="vision-card animate-scale-in-fast">
                    <h2>Our Vision</h2>
                    <p>To be the leading technology education hub that bridges the gap between academic learning and industry requirements, producing highly skilled professionals who drive technological advancement in Pakistan and beyond.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Why Choose Tech Hub -->
    <section class="why-choose-section">
        <div class="container">
            <h2 class="section-title animate-text-alternate">Why Choose Tech Hub?</h2>
            <div class="features-grid stagger-children">
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                            <circle cx="12" cy="7" r="4"/>
                        </svg>
                    </div>
                    <h3>Expert Instructors</h3>
                    <p>Learn from industry professionals with years of hands-on experience.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                            <path d="M2 17l10 5 10-5"/>
                            <path d="M2 12l10 5 10-5"/>
                        </svg>
                    </div>
                    <h3>Practical Learning</h3>
                    <p>Focus on real-world projects and hands-on training.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/>
                            <rect x="8" y="2" width="8" height="4" rx="1" ry="1"/>
                        </svg>
                    </div>
                    <h3>Job Placement</h3>
                    <p>Dedicated support to help you land your dream tech job.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Stats Section -->
    <section class="stats-section">
        <div class="container">
            <div class="stats-grid stagger-children">
                <div class="stat-card">
                    <div class="stat-number" data-count="1000">0</div>
                    <div class="stat-label">Students Trained</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-count="50">0</div>
                    <div class="stat-label">Expert Instructors</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-count="95">0</div>
                    <div class="stat-label">Placement Rate %</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number" data-count="25">0</div>
                    <div class="stat-label">Courses Offered</div>
                </div>
            </div>
        </div>
    </section>

    <!-- Team Section -->
    <section class="team-section">
        <div class="container">
            <h2 class="section-title animate-text-pulse">Our Expert Team</h2>
            <div class="team-grid stagger-children">
                <div class="team-member">
                    <div class="member-image">
                        <img src="/images/team/instructor1.jpg" alt="Senior Instructor" loading="lazy">
                    </div>
                    <h3>Muhammad Ali</h3>
                    <p class="member-role">Senior Web Development Instructor</p>
                    <p class="member-experience">8+ years industry experience</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <img src="/images/team/instructor2.jpg" alt="Mobile Development Expert" loading="lazy">
                    </div>
                    <h3>Sarah Khan</h3>
                    <p class="member-role">Mobile App Development Expert</p>
                    <p class="member-experience">6+ years industry experience</p>
                </div>
                <div class="team-member">
                    <div class="member-image">
                        <img src="/images/team/instructor3.jpg" alt="UI/UX Design Lead" loading="lazy">
                    </div>
                    <h3>Ahmed Hassan</h3>
                    <p class="member-role">UI/UX Design Lead</p>
                    <p class="member-experience">7+ years industry experience</p>
                </div>
            </div>
        </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
        <div class="container">
            <div class="cta-content">
                <h2 class="animate-text-alternate">Ready to Start Your Tech Journey?</h2>
                <p>Join thousands of students who have transformed their careers with our expert training programs.</p>
                <div class="cta-buttons">
                    <a href="courses.php?type=free" class="btn btn-primary btn-large hover-lift-fast btn-pulse">
                        Get Started Today
                    </a>
                    <a href="contact.php" class="btn btn-outline btn-large hover-scale-fast">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
/* About Page Specific Styles */
.about-hero-section {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
}

.about-hero-section .hero-title {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
}

.about-hero-section .hero-description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
}

.mission-vision-section {
    padding: 4rem 0;
    background: var(--muted);
}

.mission-vision-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    max-width: 800px;
    margin: 0 auto;
}

@media (min-width: 768px) {
    .mission-vision-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.mission-card, .vision-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    border: 2px solid rgba(30, 64, 175, 0.1);
}

.mission-card h2, .vision-card h2 {
    color: var(--primary);
    margin-bottom: 1rem;
}

.why-choose-section {
    padding: 4rem 0;
}

.section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
}

.features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .features-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.feature-card {
    background: white;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: var(--transition-smooth);
}

.feature-card:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.feature-icon {
    color: var(--primary);
    margin-bottom: 1rem;
}

.feature-card h3 {
    color: var(--primary);
    margin-bottom: 1rem;
}

.stats-section {
    background: var(--primary);
    color: white;
    padding: 4rem 0;
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
}

@media (min-width: 768px) {
    .stats-grid {
        grid-template-columns: repeat(4, 1fr);
    }
}

.stat-card {
    text-align: center;
}

.stat-number {
    font-size: 3rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
}

.stat-label {
    font-size: 1.1rem;
    opacity: 0.9;
}

.team-section {
    padding: 4rem 0;
}

.team-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .team-grid {
        grid-template-columns: repeat(3, 1fr);
    }
}

.team-member {
    background: white;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    text-align: center;
    transition: var(--transition-smooth);
}

.team-member:hover {
    transform: translateY(-4px);
    box-shadow: var(--shadow-xl);
}

.member-image {
    width: 120px;
    height: 120px;
    margin: 0 auto 1rem;
    border-radius: 50%;
    overflow: hidden;
    border: 4px solid var(--primary);
}

.member-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.team-member h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.member-role {
    font-weight: 600;
    margin-bottom: 0.5rem;
}

.member-experience {
    color: var(--muted-foreground);
    font-size: 0.9rem;
}

.cta-section {
    background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
    padding: 4rem 0;
    text-align: center;
}

.cta-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

.cta-content p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.cta-buttons {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    justify-content: center;
}

@media (min-width: 640px) {
    .cta-buttons {
        flex-direction: row;
    }
}
</style>

<script>
// Counter animation for stats
document.addEventListener('DOMContentLoaded', function() {
    const counters = document.querySelectorAll('.stat-number');
    
    const observerOptions = {
        threshold: 0.5
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        observer.observe(counter);
    });
});

function animateCounter(element) {
    const target = parseInt(element.getAttribute('data-count'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current);
    }, 16);
}
</script>

<?php include 'includes/footer.php'; ?>
