=== Centre for Lasik WordPress Theme ===
Contributors: centreforlasik
Tags: one-page, medical, lasik, eye-surgery, responsive, custom-menu, custom-logo
Requires at least: 6.0
Tested up to: 6.5
Requires PHP: 7.4
License: GPLv2 or later
License URI: https://www.gnu.org/licenses/gpl-2.0.html

== Description ==

A professional one-page scroll theme for Centre for Lasik — India's #1 LASIK
eye surgery platform. Features smooth scrolling navigation, consultation forms,
procedures grid, testimonials, FAQ accordion, and full WordPress Customizer
integration.

== Installation ==

1. Download and zip the `centre-for-lasik` folder
2. Go to WordPress Admin → Appearance → Themes → Add New → Upload Theme
3. Upload the zip file and click Install Now
4. Activate the theme

== Setup ==

1. Go to Appearance → Customize to set:
   - Brand name, phone, email, address
   - Hero heading, text, and background image
   - Upload your logo

2. Go to Appearance → Menus to create your navigation menu
   - For anchor-based scrolling, use Custom Links with URLs like #procedures, #why-us, #testimonials, #faq, #consultation

3. (Optional) Install ACF (Advanced Custom Fields) to make procedures and
   testimonials editable from the admin panel.

4. (Optional) Install Contact Form 7 or WPForms and replace the static form
   in front-page.php with your form shortcode.

== Folder Structure ==

centre-for-lasik/
├── style.css              ← Main stylesheet (includes theme header)
├── functions.php          ← Theme setup, enqueue, customizer, helpers
├── header.php             ← Navbar + USP strip
├── footer.php             ← Footer + sticky mobile CTA
├── front-page.php         ← Homepage one-page template
├── index.php              ← Blog listing fallback
├── assets/
│   ├── js/
│   │   └── main.js        ← Mobile menu, FAQ accordion, smooth scroll
│   └── images/
│       └── hero-lasik.png ← Hero background (add your own)
├── screenshot.png         ← Theme screenshot (1200×900 recommended)
└── README.txt             ← This file

== ACF Compatibility ==

The theme includes cfl_acf_field() helper function. To make content dynamic:

1. Install ACF Pro
2. Create field groups for:
   - Procedures (repeater with name, price, tagline, features)
   - Testimonials (repeater with text, name, city, age, rating)
   - Hero content (text fields)
3. Replace static arrays in front-page.php with get_field() calls

== Customizer Options ==

- Brand Name
- Phone Number
- Phone Display Format
- Email Address
- Address
- Hero Heading
- Hero Text
- Hero Background Image

== Changelog ==

= 1.0.0 =
* Initial release
* One-page scroll layout
* WordPress Customizer integration
* FAQ accordion
* Responsive design
* Mobile sticky CTA
