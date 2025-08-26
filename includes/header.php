<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo isset($page_title) ? $page_title : 'Tech Hub Faisalabad - IT Learning Institute'; ?></title>
    <meta name="description" content="<?php echo isset($page_description) ? $page_description : 'Faisalabad\'s largest IT learning institute offering expert-led courses in web development, mobile app development, and more.'; ?>">
    
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="<?php echo isset($page_title) ? $page_title : 'Tech Hub Faisalabad'; ?>">
    <meta property="og:description" content="<?php echo isset($page_description) ? $page_description : 'Premier IT learning institute in Faisalabad'; ?>">
    <meta property="og:image" content="<?php echo APP_URL; ?>/logo.webp">
    <meta property="og:url" content="<?php echo APP_URL . $_SERVER['REQUEST_URI']; ?>">
    <meta property="og:type" content="website">
    
    <!-- Twitter Card Meta Tags -->
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="<?php echo isset($page_title) ? $page_title : 'Tech Hub Faisalabad'; ?>">
    <meta name="twitter:description" content="<?php echo isset($page_description) ? $page_description : 'Premier IT learning institute in Faisalabad'; ?>">
    <meta name="twitter:image" content="<?php echo APP_URL; ?>/logo.webp">
    
    <!-- Preload critical resources -->
    <link rel="preload" href="/logo.webp" as="image">
    <link rel="preload" href="/images/front.webp" as="image">
    
    <!-- CSS Files -->
    <link rel="stylesheet" href="assets/css/main.css">
    <link rel="stylesheet" href="assets/css/animations.css">
    <link rel="stylesheet" href="assets/css/components.css">
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Favicon -->
    <link rel="icon" href="/logo.webp" type="image/webp">
    <link rel="apple-touch-icon" href="/logo.webp">
    
    <!-- CSRF Token -->
    <meta name="csrf-token" content="<?php echo generateCSRFToken(); ?>">
    
    <!-- Structured Data -->
    <script type="application/ld+json">
    {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Tech Hub Faisalabad",
        "description": "Premier IT learning institute in Faisalabad offering expert-led courses",
        "url": "<?php echo APP_URL; ?>",
        "logo": "<?php echo APP_URL; ?>/logo.webp",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Faisalabad",
            "addressCountry": "Pakistan"
        },
        "offers": [
            {
                "@type": "Course",
                "name": "Web Development",
                "description": "Complete web development course with modern technologies"
            },
            {
                "@type": "Course", 
                "name": "Mobile App Development",
                "description": "Native and cross-platform mobile app development"
            }
        ]
    }
    </script>
</head>
<body>
    <!-- Skip to main content for accessibility -->
    <a href="#main-content" class="skip-link">Skip to main content</a>
    
    <!-- Header -->
    <header id="main-header" class="header">
        <div class="header-container">
            <div class="header-content">
                <!-- Logo -->
                <div class="logo-container animate-fade-in-fast">
                    <a href="/" class="logo-wrapper">
                        <img src="/logo.webp" alt="Tech Hub Logo" class="logo" width="116" height="40">
                    </a>
                </div>

                <!-- Desktop Navigation -->
                <nav class="desktop-nav stagger-children" role="navigation" aria-label="Main navigation">
                    <a href="/" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'index.php' || $_SERVER['REQUEST_URI'] == '/' ? 'active' : ''; ?>">Home</a>
                    <a href="about.php" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'about.php' ? 'active' : ''; ?>">About</a>
                    <a href="services.php" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'services.php' ? 'active' : ''; ?>">Services</a>
                    <a href="courses.php?type=free" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'courses.php' && $_GET['type'] == 'free' ? 'active' : ''; ?>">Free Courses</a>
                    <a href="courses.php?type=paid" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'courses.php' && $_GET['type'] == 'paid' ? 'active' : ''; ?>">Paid Courses</a>
                    <a href="gallery.php" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'gallery.php' ? 'active' : ''; ?>">Gallery</a>
                    <a href="contact.php" class="nav-link hover-scale-fast <?php echo basename($_SERVER['PHP_SELF']) == 'contact.php' ? 'active' : ''; ?>">Contact</a>
                </nav>

                <!-- CTA Button -->
                <div class="cta-container">
                    <a href="courses.php?type=free" class="btn btn-primary btn-pulse hover-lift-fast">
                        Enroll Now
                    </a>
                </div>

                <!-- Mobile Menu Toggle -->
                <button class="mobile-toggle hover-scale-fast" id="mobile-toggle" aria-label="Toggle menu" aria-expanded="false">
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                    <span class="hamburger-line"></span>
                </button>
            </div>

            <!-- Mobile Menu -->
            <div class="mobile-menu" id="mobile-menu" role="navigation" aria-label="Mobile navigation">
                <nav class="mobile-nav stagger-children">
                    <a href="/" class="mobile-nav-link hover-scale-fast">Home</a>
                    <a href="about.php" class="mobile-nav-link hover-scale-fast">About</a>
                    <a href="services.php" class="mobile-nav-link hover-scale-fast">Services</a>
                    <a href="courses.php?type=free" class="mobile-nav-link hover-scale-fast">Free Courses</a>
                    <a href="courses.php?type=paid" class="mobile-nav-link hover-scale-fast">Paid Courses</a>
                    <a href="gallery.php" class="mobile-nav-link hover-scale-fast">Gallery</a>
                    <a href="contact.php" class="mobile-nav-link hover-scale-fast">Contact</a>
                    <a href="courses.php?type=free" class="btn btn-primary btn-pulse hover-lift-fast mobile-cta">
                        Enroll Now
                    </a>
                </nav>
            </div>
        </div>
    </header>

    <!-- Main Content -->
    <main id="main-content">
