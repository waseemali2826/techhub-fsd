<?php
require_once 'config/database.php';

$page_title = 'Contact Us - Tech Hub Faisalabad';
$page_description = 'Get in touch with Tech Hub Faisalabad for inquiries about our IT courses and programs.';

// Handle form submission
$success_message = '';
$error_message = '';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Validate CSRF token
    if (!isset($_POST['csrf_token']) || !validateCSRFToken($_POST['csrf_token'])) {
        $error_message = 'Invalid security token. Please try again.';
    } else {
        // Sanitize input data
        $name = sanitizeInput($_POST['name'] ?? '');
        $email = sanitizeInput($_POST['email'] ?? '');
        $phone = sanitizeInput($_POST['phone'] ?? '');
        $subject = sanitizeInput($_POST['subject'] ?? '');
        $message = sanitizeInput($_POST['message'] ?? '');
        
        // Validate required fields
        if (empty($name) || empty($email) || empty($subject) || empty($message)) {
            $error_message = 'Please fill in all required fields.';
        } elseif (!validateEmail($email)) {
            $error_message = 'Please enter a valid email address.';
        } else {
            try {
                $db = Database::getInstance();
                
                // Insert contact form submission
                $sql = "INSERT INTO contact_submissions (name, email, phone, subject, message, created_at) 
                        VALUES (?, ?, ?, ?, ?, NOW())";
                
                $result = $db->insert($sql, [$name, $email, $phone, $subject, $message]);
                
                if ($result) {
                    $success_message = 'Thank you for your message! We will get back to you soon.';
                    
                    // Send email notification (implement your email sending logic here)
                    // mail($to, $subject, $email_body, $headers);
                    
                    // Clear form data
                    $name = $email = $phone = $subject = $message = '';
                } else {
                    $error_message = 'Failed to send message. Please try again.';
                }
            } catch (Exception $e) {
                error_log('Contact form error: ' . $e->getMessage());
                $error_message = 'An error occurred. Please try again later.';
            }
        }
    }
}

include 'includes/header.php';
?>

<main>
    <!-- Contact Hero Section -->
    <section class="contact-hero-section">
        <div class="container">
            <div class="hero-text animate-fade-in-fast">
                <h1 class="hero-title animate-text-pulse">Contact Us</h1>
                <p class="hero-description">
                    Get in touch with us for any inquiries about our courses, enrollment, or general questions.
                </p>
            </div>
        </div>
    </section>

    <!-- Contact Content -->
    <section class="contact-content-section">
        <div class="container">
            <div class="contact-grid">
                <!-- Contact Information -->
                <div class="contact-info-section animate-scale-in-fast">
                    <h2>Get in Touch</h2>
                    <p>We're here to help you start your tech journey. Reach out to us through any of the following methods:</p>
                    
                    <div class="contact-methods">
                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                            </div>
                            <div class="contact-method-content">
                                <h3>Visit Us</h3>
                                <p>Tech Hub Faisalabad<br>Main Campus<br>Faisalabad, Punjab, Pakistan</p>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                            </div>
                            <div class="contact-method-content">
                                <h3>Call Us</h3>
                                <p>+92 300 1234567<br>+92 41 1234567</p>
                                <small>Mon - Fri: 9:00 AM - 6:00 PM</small>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                    <polyline points="22,6 12,13 2,6"/>
                                </svg>
                            </div>
                            <div class="contact-method-content">
                                <h3>Email Us</h3>
                                <p>info@techhubfsd.com<br>admissions@techhubfsd.com</p>
                                <small>We'll respond within 24 hours</small>
                            </div>
                        </div>

                        <div class="contact-method">
                            <div class="contact-method-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                                </svg>
                            </div>
                            <div class="contact-method-content">
                                <h3>Office Hours</h3>
                                <p>Monday - Friday: 9:00 AM - 6:00 PM<br>Saturday: 10:00 AM - 4:00 PM<br>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Contact Form -->
                <div class="contact-form-section animate-slide-up-fast">
                    <h2>Send us a Message</h2>
                    
                    <?php if ($success_message): ?>
                        <div class="alert alert-success">
                            <?php echo $success_message; ?>
                        </div>
                    <?php endif; ?>
                    
                    <?php if ($error_message): ?>
                        <div class="alert alert-error">
                            <?php echo $error_message; ?>
                        </div>
                    <?php endif; ?>

                    <form class="contact-form" method="POST" action="">
                        <input type="hidden" name="csrf_token" value="<?php echo generateCSRFToken(); ?>">
                        
                        <div class="form-row">
                            <div class="form-group">
                                <label for="name" class="form-label">Full Name *</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    name="name" 
                                    class="form-input" 
                                    required
                                    value="<?php echo htmlspecialchars($name ?? ''); ?>"
                                    placeholder="Enter your full name"
                                >
                            </div>
                            
                            <div class="form-group">
                                <label for="email" class="form-label">Email Address *</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    name="email" 
                                    class="form-input" 
                                    required
                                    value="<?php echo htmlspecialchars($email ?? ''); ?>"
                                    placeholder="Enter your email address"
                                >
                            </div>
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="phone" class="form-label">Phone Number</label>
                                <input 
                                    type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    class="form-input"
                                    value="<?php echo htmlspecialchars($phone ?? ''); ?>"
                                    placeholder="Enter your phone number"
                                >
                            </div>
                            
                            <div class="form-group">
                                <label for="subject" class="form-label">Subject *</label>
                                <select id="subject" name="subject" class="form-input" required>
                                    <option value="">Select a subject</option>
                                    <option value="General Inquiry" <?php echo (isset($subject) && $subject === 'General Inquiry') ? 'selected' : ''; ?>>General Inquiry</option>
                                    <option value="Course Information" <?php echo (isset($subject) && $subject === 'Course Information') ? 'selected' : ''; ?>>Course Information</option>
                                    <option value="Enrollment" <?php echo (isset($subject) && $subject === 'Enrollment') ? 'selected' : ''; ?>>Enrollment</option>
                                    <option value="Technical Support" <?php echo (isset($subject) && $subject === 'Technical Support') ? 'selected' : ''; ?>>Technical Support</option>
                                    <option value="Partnership" <?php echo (isset($subject) && $subject === 'Partnership') ? 'selected' : ''; ?>>Partnership</option>
                                    <option value="Other" <?php echo (isset($subject) && $subject === 'Other') ? 'selected' : ''; ?>>Other</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="message" class="form-label">Message *</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                class="form-input form-textarea" 
                                required
                                placeholder="Enter your message here..."
                                rows="6"
                            ><?php echo htmlspecialchars($message ?? ''); ?></textarea>
                        </div>

                        <button type="submit" class="btn btn-primary btn-large hover-lift-fast btn-pulse" id="submit-btn">
                            Send Message
                            <svg class="btn-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="m22 2-7 20-4-9-9-4 20-7z"/>
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
        <div class="container">
            <h2 class="section-title">Find Us</h2>
            <div class="map-container">
                <!-- Replace with actual Google Maps embed or your preferred map service -->
                <div class="map-placeholder">
                    <div class="map-placeholder-content">
                        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                            <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <h3>Tech Hub Faisalabad</h3>
                        <p>Main Campus, Faisalabad, Punjab, Pakistan</p>
                        <a href="https://maps.google.com" target="_blank" class="btn btn-outline">
                            View on Google Maps
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- FAQ Section -->
    <section class="faq-section">
        <div class="container">
            <h2 class="section-title animate-text-alternate">Frequently Asked Questions</h2>
            <div class="faq-grid stagger-children">
                <div class="faq-item">
                    <h3>How can I enroll in a course?</h3>
                    <p>You can enroll in our courses by visiting our campus, calling us, or filling out the contact form above. Our admissions team will guide you through the process.</p>
                </div>
                
                <div class="faq-item">
                    <h3>What are your course timings?</h3>
                    <p>We offer flexible timings including morning, evening, and weekend batches to accommodate working professionals and students.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Do you provide job placement assistance?</h3>
                    <p>Yes, we have a dedicated placement cell that helps our students with job opportunities, interview preparation, and career guidance.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Are online courses available?</h3>
                    <p>Yes, we offer both in-person and online courses to cater to different learning preferences and schedules.</p>
                </div>
            </div>
        </div>
    </section>
</main>

<style>
/* Contact Page Specific Styles */
.contact-hero-section {
    background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
    color: white;
    padding: 4rem 0;
    text-align: center;
}

.contact-hero-section .hero-title {
    color: white;
    font-size: 3rem;
    margin-bottom: 1rem;
}

.contact-hero-section .hero-description {
    font-size: 1.25rem;
    max-width: 600px;
    margin: 0 auto;
}

.contact-content-section {
    padding: 4rem 0;
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 3rem;
}

@media (min-width: 1024px) {
    .contact-grid {
        grid-template-columns: 1fr 1fr;
    }
}

.contact-info-section h2,
.contact-form-section h2 {
    color: var(--primary);
    font-size: 2rem;
    margin-bottom: 1rem;
}

.contact-methods {
    display: grid;
    gap: 2rem;
    margin-top: 2rem;
}

.contact-method {
    display: flex;
    align-items: flex-start;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: var(--radius);
    box-shadow: var(--shadow-sm);
    border: 2px solid transparent;
    transition: var(--transition-smooth);
}

.contact-method:hover {
    border-color: var(--primary);
    box-shadow: var(--shadow-md);
    transform: translateY(-2px);
}

.contact-method-icon {
    color: var(--primary);
    background: rgba(30, 64, 175, 0.1);
    padding: 0.75rem;
    border-radius: 50%;
    flex-shrink: 0;
}

.contact-method-content h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
    font-size: 1.125rem;
}

.contact-method-content p {
    margin-bottom: 0.25rem;
    line-height: 1.5;
}

.contact-method-content small {
    color: var(--muted-foreground);
    font-style: italic;
}

/* Form Styles */
.contact-form {
    background: white;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    border: 2px solid rgba(30, 64, 175, 0.1);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
}

@media (min-width: 768px) {
    .form-row {
        grid-template-columns: 1fr 1fr;
    }
}

.alert {
    padding: 1rem 1.5rem;
    border-radius: var(--radius);
    margin-bottom: 1.5rem;
    font-weight: 500;
}

.alert-success {
    background: rgba(16, 185, 129, 0.1);
    color: var(--success);
    border: 1px solid rgba(16, 185, 129, 0.2);
}

.alert-error {
    background: rgba(239, 68, 68, 0.1);
    color: var(--error);
    border: 1px solid rgba(239, 68, 68, 0.2);
}

/* Map Section */
.map-section {
    padding: 4rem 0;
    background: var(--muted);
}

.map-container {
    margin-top: 2rem;
}

.map-placeholder {
    background: white;
    border-radius: var(--radius);
    padding: 4rem 2rem;
    text-align: center;
    box-shadow: var(--shadow-md);
}

.map-placeholder-content {
    max-width: 400px;
    margin: 0 auto;
}

.map-placeholder svg {
    color: var(--primary);
    margin-bottom: 1rem;
}

.map-placeholder h3 {
    color: var(--primary);
    margin-bottom: 0.5rem;
}

.map-placeholder p {
    color: var(--muted-foreground);
    margin-bottom: 1.5rem;
}

/* FAQ Section */
.faq-section {
    padding: 4rem 0;
}

.faq-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .faq-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

.faq-item {
    background: white;
    padding: 2rem;
    border-radius: var(--radius);
    box-shadow: var(--shadow-md);
    border: 2px solid transparent;
    transition: var(--transition-smooth);
}

.faq-item:hover {
    border-color: var(--primary);
    transform: translateY(-2px);
}

.faq-item h3 {
    color: var(--primary);
    margin-bottom: 1rem;
    font-size: 1.125rem;
}

.faq-item p {
    color: var(--muted-foreground);
    line-height: 1.6;
}

/* Form Enhancements */
.form-input:focus {
    border-color: var(--primary);
    box-shadow: 0 0 0 3px rgba(30, 64, 175, 0.1);
}

.form-textarea {
    resize: vertical;
    min-height: 120px;
}

#submit-btn:disabled {
    opacity: 0.7;
    cursor: not-allowed;
}

/* Responsive Design */
@media (max-width: 767px) {
    .contact-hero-section .hero-title {
        font-size: 2rem;
    }
    
    .contact-hero-section .hero-description {
        font-size: 1.125rem;
    }
    
    .contact-form {
        padding: 1.5rem;
    }
}
</style>

<script>
// Contact form enhancements
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('.contact-form');
    const submitBtn = document.getElementById('submit-btn');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Show loading state
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<span class="loading-spinner"></span> Sending...';
        });
    }
    
    // Auto-hide alerts after 5 seconds
    const alerts = document.querySelectorAll('.alert');
    alerts.forEach(alert => {
        setTimeout(() => {
            alert.style.opacity = '0';
            setTimeout(() => alert.remove(), 300);
        }, 5000);
    });
});
</script>

<?php include 'includes/footer.php'; ?>
