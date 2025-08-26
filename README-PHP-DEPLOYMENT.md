# Tech Hub Faisalabad - PHP/MySQL Deployment Guide

This is the converted PHP/HTML/CSS/JavaScript version of the original React TypeScript application. This hybrid version maintains all the modern frontend functionality while being compatible with traditional PHP/MySQL hosting environments.

## 🚀 **Features**

### **Frontend Features**
- ✅ Modern responsive design with CSS Grid and Flexbox
- ✅ Smooth animations and transitions
- ✅ Infinite scrolling logo carousel
- ✅ Image carousel with automatic switching
- ✅ Mobile-responsive navigation
- ✅ Performance-optimized CSS and JavaScript
- ✅ Accessibility features (ARIA labels, skip links)
- ✅ SEO optimized with meta tags and structured data

### **Backend Features**
- ✅ PHP 7.4+ compatible
- ✅ MySQL database integration
- ✅ Contact form with email notifications
- ✅ Newsletter subscription system
- ✅ CSRF protection
- ✅ Input validation and sanitization
- ✅ Error handling and logging

## 📁 **Project Structure**

```
├── public/                     # Public web files
│   ├── assets/
│   │   ├── css/
│   │   │   ├── main.css        # Main styles
│   │   │   ├── animations.css  # Animations
│   │   │   └── components.css  # Component styles
│   │   └── js/
│   │       ├── main.js         # Main JavaScript
│   │       ├── utils.js        # Utility functions
│   │       ├── animations.js   # Animation helpers
│   │       └── components.js   # Component logic
│   └── index.html             # Static HTML version
├── config/
│   └── database.php           # Database configuration
├── includes/
│   ├── header.php             # Header template
│   └── footer.php             # Footer template
├── about.php                  # About page
├── contact.php               # Contact page with form
├── courses.php               # Courses page
├── gallery.php               # Gallery page
├── services.php              # Services page
└── index.php                 # Main homepage
```

## 🛠 **Installation & Setup**

### **Requirements**
- PHP 7.4 or higher
- MySQL 5.7 or higher
- Web server (Apache/Nginx)
- mod_rewrite enabled (for clean URLs)

### **1. Upload Files**
```bash
# Upload all files to your web server's public directory
# For cPanel: public_html/
# For others: /var/www/html/ or similar
```

### **2. Database Setup**
```sql
-- Create database
CREATE DATABASE techhub_db CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create contact submissions table
CREATE TABLE contact_submissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_created_at (created_at)
);

-- Create newsletter subscriptions table
CREATE TABLE newsletter_subscriptions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    status ENUM('active', 'inactive') DEFAULT 'active',
    subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_email (email),
    INDEX idx_status (status)
);

-- Create courses table (optional)
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    duration VARCHAR(100),
    level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
    price DECIMAL(10,2) DEFAULT 0.00,
    type ENUM('free', 'paid') DEFAULT 'free',
    image_url VARCHAR(500),
    status ENUM('active', 'inactive') DEFAULT 'active',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

### **3. Configuration**
Edit `config/database.php`:
```php
// Database configuration
define('DB_HOST', 'localhost');           // Your database host
define('DB_NAME', 'techhub_db');         // Your database name
define('DB_USER', 'your_username');       // Your database username
define('DB_PASS', 'your_password');       // Your database password

// Application configuration
define('APP_URL', 'https://yourdomain.com'); // Your website URL

// Security
define('SECRET_KEY', 'your-unique-secret-key-here'); // Change this!
```

### **4. File Permissions**
```bash
# Set appropriate permissions
chmod 755 public/
chmod 644 public/assets/css/*
chmod 644 public/assets/js/*
chmod 644 *.php
chmod 644 includes/*.php
chmod 644 config/*.php
```

### **5. Apache Configuration**
Create `.htaccess` file in root directory:
```apache
RewriteEngine On

# Force HTTPS (recommended)
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Clean URLs
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^([^.]+)$ $1.php [NC,L]

# Security headers
Header always set X-Content-Type-Options nosniff
Header always set X-Frame-Options DENY
Header always set X-XSS-Protection "1; mode=block"

# Compression
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>

# Cache control
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 month"
    ExpiresByType image/jpg "access plus 1 month"
    ExpiresByType image/jpeg "access plus 1 month"
    ExpiresByType image/gif "access plus 1 month"
    ExpiresByType image/webp "access plus 1 month"
</IfModule>
```

## 📧 **Email Configuration**

### **Contact Form Email Setup**
Edit `contact.php` to add email functionality:
```php
// Add after successful database insert
$to = 'info@yourdomain.com';
$subject = 'New Contact Form Submission: ' . $subject;
$email_body = "
Name: $name
Email: $email
Phone: $phone
Subject: $subject

Message:
$message
";

$headers = array(
    'From' => $email,
    'Reply-To' => $email,
    'Content-Type' => 'text/plain; charset=UTF-8'
);

mail($to, $subject, $email_body, implode("\r\n", $headers));
```

### **SMTP Configuration (Recommended)**
For better email delivery, use PHPMailer:
```bash
composer require phpmailer/phpmailer
```

## 🎨 **Customization**

### **Colors and Branding**
Edit `public/assets/css/main.css`:
```css
:root {
    --primary: #1e40af;           /* Primary color */
    --primary-light: #3b82f6;     /* Light primary */
    --success: #10b981;           /* Success color */
    --warning: #f59e0b;           /* Warning color */
    --error: #ef4444;             /* Error color */
}
```

### **Logo and Images**
- Replace `/logo.webp` with your logo
- Update partner logos in `/public/` directory
- Add course images to `/images/` directory

### **Content**
- Edit page content in respective PHP files
- Update contact information in `includes/footer.php`
- Modify navigation links in `includes/header.php`

## 🚀 **Performance Optimization**

### **Image Optimization**
```bash
# Install imagemin for image optimization
npm install -g imagemin-cli imagemin-webp imagemin-mozjpeg

# Optimize images
imagemin images/*.jpg --out-dir=images/optimized --plugin=mozjpeg
imagemin images/*.png --out-dir=images/optimized --plugin=pngquant
```

### **CSS/JS Minification**
```bash
# Install minification tools
npm install -g csso-cli uglify-js

# Minify CSS
csso public/assets/css/main.css --output public/assets/css/main.min.css

# Minify JavaScript
uglifyjs public/assets/js/main.js --compress --mangle --output public/assets/js/main.min.js
```

### **CDN Integration**
Update asset URLs to use CDN:
```php
define('CDN_URL', 'https://cdn.yourdomain.com');
```

## 📱 **Mobile Optimization**

The application is fully responsive and includes:
- Mobile-first CSS design
- Touch-friendly navigation
- Optimized animations for mobile
- Compressed images for faster loading
- Reduced motion support for accessibility

## 🔒 **Security Features**

- CSRF token protection
- Input validation and sanitization
- SQL injection prevention with prepared statements
- XSS protection
- Secure headers configuration
- Session security

## 📊 **Analytics Integration**

Add Google Analytics to `includes/footer.php`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 🐛 **Troubleshooting**

### **Common Issues**

1. **Database Connection Error**
   - Check database credentials in `config/database.php`
   - Ensure MySQL service is running
   - Verify database exists

2. **CSS/JS Not Loading**
   - Check file permissions
   - Verify file paths
   - Clear browser cache

3. **Contact Form Not Working**
   - Check PHP mail configuration
   - Verify database table exists
   - Check error logs

4. **Images Not Displaying**
   - Verify image file paths
   - Check file permissions
   - Ensure images exist in correct directories

### **Debug Mode**
Enable debug mode by editing `config/database.php`:
```php
// Enable error reporting for development
error_reporting(E_ALL);
ini_set('display_errors', 1);
```

## 📝 **Maintenance**

### **Regular Tasks**
- Backup database regularly
- Update PHP and dependencies
- Monitor error logs
- Optimize database tables
- Update content and images

### **Database Maintenance**
```sql
-- Clean old contact submissions (optional)
DELETE FROM contact_submissions WHERE created_at < DATE_SUB(NOW(), INTERVAL 1 YEAR);

-- Optimize tables
OPTIMIZE TABLE contact_submissions, newsletter_subscriptions;
```

## 🆕 **Adding New Features**

### **Adding New Pages**
1. Create new PHP file (e.g., `new-page.php`)
2. Include header and footer templates
3. Add navigation link in `includes/header.php`
4. Add database tables if needed

### **Adding Forms**
1. Create form HTML with CSRF token
2. Add validation logic
3. Handle form submission
4. Add database storage
5. Send email notifications if needed

## 📞 **Support**

For technical support or questions about this PHP conversion:
- Check the troubleshooting section above
- Review error logs on your server
- Ensure all requirements are met
- Verify database and file permissions

## 🎉 **Deployment Checklist**

- [ ] Database created and configured
- [ ] All files uploaded to server
- [ ] Configuration file updated
- [ ] File permissions set correctly
- [ ] .htaccess file configured
- [ ] Email functionality tested
- [ ] Contact form tested
- [ ] All pages loading correctly
- [ ] Mobile responsiveness verified
- [ ] Performance optimized
- [ ] Analytics configured
- [ ] SSL certificate installed
- [ ] Backup system in place

---

**Happy Deploying! 🚀**

This PHP version maintains all the modern functionality of the original React application while being compatible with traditional web hosting environments.
