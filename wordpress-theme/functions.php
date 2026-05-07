<?php
/**
 * Centre for Lasik Theme Functions
 *
 * @package Centre_For_Lasik
 * @version 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) exit;

/* ─── Theme Setup ─── */
function cfl_theme_setup() {
    // Title tag support
    add_theme_support( 'title-tag' );

    // Custom logo
    add_theme_support( 'custom-logo', array(
        'height'      => 64,
        'width'       => 200,
        'flex-height' => true,
        'flex-width'  => true,
    ) );

    // HTML5 support
    add_theme_support( 'html5', array( 'search-form', 'comment-list', 'gallery', 'caption', 'style', 'script' ) );

    // Post thumbnails
    add_theme_support( 'post-thumbnails' );

    // Register navigation menus
    register_nav_menus( array(
        'primary' => __( 'Primary Menu', 'centre-for-lasik' ),
        'footer'  => __( 'Footer Menu', 'centre-for-lasik' ),
    ) );
}
add_action( 'after_setup_theme', 'cfl_theme_setup' );

/* ─── Enqueue Styles & Scripts ─── */
function cfl_enqueue_assets() {
    // Google Fonts
    wp_enqueue_style(
        'cfl-google-fonts',
        'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Public+Sans:wght@400;500;600;700&display=swap',
        array(),
        null
    );

    // Main stylesheet
    wp_enqueue_style(
        'cfl-style',
        get_stylesheet_uri(),
        array( 'cfl-google-fonts' ),
        wp_get_theme()->get( 'Version' )
    );

    // Main JavaScript (smooth scroll + accordion)
    wp_enqueue_script(
        'cfl-main',
        get_template_directory_uri() . '/assets/js/main.js',
        array(),
        wp_get_theme()->get( 'Version' ),
        true
    );
}
add_action( 'wp_enqueue_scripts', 'cfl_enqueue_assets' );

/* ─── Customizer Settings ─── */
function cfl_customize_register( $wp_customize ) {

    /* ── Brand Section ── */
    $wp_customize->add_section( 'cfl_brand', array(
        'title'    => __( 'Brand & Contact', 'centre-for-lasik' ),
        'priority' => 30,
    ) );

    // Brand Name
    $wp_customize->add_setting( 'cfl_brand_name', array(
        'default'           => 'Centre for Lasik',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'cfl_brand_name', array(
        'label'   => __( 'Brand Name', 'centre-for-lasik' ),
        'section' => 'cfl_brand',
        'type'    => 'text',
    ) );

    // Phone
    $wp_customize->add_setting( 'cfl_phone', array(
        'default'           => '+91-9667770450',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'cfl_phone', array(
        'label'   => __( 'Phone Number', 'centre-for-lasik' ),
        'section' => 'cfl_brand',
        'type'    => 'text',
    ) );

    // Phone Display
    $wp_customize->add_setting( 'cfl_phone_display', array(
        'default'           => '+91-96677 70450',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'cfl_phone_display', array(
        'label'   => __( 'Phone Display Format', 'centre-for-lasik' ),
        'section' => 'cfl_brand',
        'type'    => 'text',
    ) );

    // Email
    $wp_customize->add_setting( 'cfl_email', array(
        'default'           => 'info@laser.fyi',
        'sanitize_callback' => 'sanitize_email',
    ) );
    $wp_customize->add_control( 'cfl_email', array(
        'label'   => __( 'Email Address', 'centre-for-lasik' ),
        'section' => 'cfl_brand',
        'type'    => 'email',
    ) );

    // Address
    $wp_customize->add_setting( 'cfl_address', array(
        'default'           => 'New Delhi, India',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'cfl_address', array(
        'label'   => __( 'Address', 'centre-for-lasik' ),
        'section' => 'cfl_brand',
        'type'    => 'text',
    ) );

    /* ── Hero Section ── */
    $wp_customize->add_section( 'cfl_hero', array(
        'title'    => __( 'Hero Section', 'centre-for-lasik' ),
        'priority' => 31,
    ) );

    // Hero Heading
    $wp_customize->add_setting( 'cfl_hero_heading', array(
        'default'           => 'See the World Without Glasses',
        'sanitize_callback' => 'sanitize_text_field',
    ) );
    $wp_customize->add_control( 'cfl_hero_heading', array(
        'label'   => __( 'Hero Heading', 'centre-for-lasik' ),
        'section' => 'cfl_hero',
        'type'    => 'text',
    ) );

    // Hero Subtext
    $wp_customize->add_setting( 'cfl_hero_text', array(
        'default'           => 'Just 10 minutes to crystal-clear vision. Safe, painless, and trusted by millions worldwide. Starting at just ₹8,999 per eye.',
        'sanitize_callback' => 'sanitize_textarea_field',
    ) );
    $wp_customize->add_control( 'cfl_hero_text', array(
        'label'   => __( 'Hero Text', 'centre-for-lasik' ),
        'section' => 'cfl_hero',
        'type'    => 'textarea',
    ) );

    // Hero Background Image
    $wp_customize->add_setting( 'cfl_hero_bg', array(
        'default'           => '',
        'sanitize_callback' => 'esc_url_raw',
    ) );
    $wp_customize->add_control( new WP_Customize_Image_Control( $wp_customize, 'cfl_hero_bg', array(
        'label'   => __( 'Hero Background Image', 'centre-for-lasik' ),
        'section' => 'cfl_hero',
    ) ) );
}
add_action( 'customize_register', 'cfl_customize_register' );

/* ─── Helper: Get Theme Mod with Default ─── */
function cfl_get( $key, $default = '' ) {
    return get_theme_mod( $key, $default );
}

/* ─── ACF Field Group Check (optional, for ACF users) ─── */
function cfl_acf_field( $field, $default = '' ) {
    if ( function_exists( 'get_field' ) ) {
        $value = get_field( $field );
        return $value ? $value : $default;
    }
    return $default;
}

/* ─── Security Headers ─── */
function cfl_security_headers() {
    if ( is_admin() ) return;
    header( 'X-Content-Type-Options: nosniff' );
    header( 'X-Frame-Options: SAMEORIGIN' );
    header( 'Referrer-Policy: strict-origin-when-cross-origin' );
    header( 'Permissions-Policy: geolocation=(), microphone=(), camera=()' );
    header( 'X-XSS-Protection: 1; mode=block' );
}
add_action( 'send_headers', 'cfl_security_headers' );

/* Remove WP version + clean head */
remove_action( 'wp_head', 'wp_generator' );
add_filter( 'the_generator', '__return_empty_string' );

/* ─── Consultation Form Handler — anti-spam, anti-bot, validated ─── */
function cfl_handle_consultation() {
    // 1. Nonce check (CSRF)
    if ( ! isset( $_POST['cfl_nonce'] ) || ! wp_verify_nonce( $_POST['cfl_nonce'], 'cfl_consultation_nonce' ) ) {
        wp_die( 'Security check failed.', 'Forbidden', array( 'response' => 403 ) );
    }

    // 2. Honeypot — bots fill this hidden field
    if ( ! empty( $_POST['website'] ) ) {
        wp_safe_redirect( wp_get_referer() ?: home_url() );
        exit;
    }

    // 3. Time-trap — humans take >2s
    $ts = isset( $_POST['cfl_ts'] ) ? absint( $_POST['cfl_ts'] ) : 0;
    if ( $ts > 0 && ( time() - $ts ) < 2 ) {
        wp_die( 'Submission rejected.', 'Forbidden', array( 'response' => 403 ) );
    }

    // 4. Captcha (simple math 10 + 7 = 17)
    $captcha = isset( $_POST['captcha'] ) ? trim( wp_unslash( $_POST['captcha'] ) ) : '';
    if ( (int) $captcha !== 17 ) {
        wp_die( 'Security check failed.', 'Forbidden', array( 'response' => 403 ) );
    }

    // 5. Per-IP rate limit (1 submission per 30s)
    $ip   = isset( $_SERVER['REMOTE_ADDR'] ) ? sanitize_text_field( wp_unslash( $_SERVER['REMOTE_ADDR'] ) ) : 'unknown';
    $key  = 'cfl_lead_' . md5( $ip );
    if ( get_transient( $key ) ) {
        wp_die( 'Please wait before submitting again.', 'Too Many Requests', array( 'response' => 429 ) );
    }
    set_transient( $key, 1, 30 );

    // 6. Sanitize + validate
    $name  = sanitize_text_field( wp_unslash( $_POST['name']  ?? '' ) );
    $phone = sanitize_text_field( wp_unslash( $_POST['phone'] ?? '' ) );
    $email = sanitize_email(      wp_unslash( $_POST['email'] ?? '' ) );

    if ( strlen( $name )  < 2 || strlen( $name )  > 80 )  wp_die( 'Invalid name.',  'Bad Request', array( 'response' => 400 ) );
    if ( ! preg_match( '/^[+\d][\d\s().-]{6,19}$/', $phone ) ) wp_die( 'Invalid phone.', 'Bad Request', array( 'response' => 400 ) );
    if ( ! empty( $email ) && ! is_email( $email ) ) wp_die( 'Invalid email.', 'Bad Request', array( 'response' => 400 ) );

    // 7. Spam heuristics — block link-spam in name field
    if ( preg_match( '#https?://|www\.|<a\s|\[url=#i', $name ) ) {
        wp_die( 'Submission blocked.', 'Forbidden', array( 'response' => 403 ) );
    }

    // 8. Send email to admin
    $to      = get_option( 'admin_email' );
    $subject = '[Lead] New LASIK consultation request';
    $body    = "Name: {$name}\nPhone: {$phone}\nEmail: {$email}\nSource: " . esc_url_raw( wp_get_referer() );
    wp_mail( $to, $subject, $body );

    wp_safe_redirect( add_query_arg( 'lead', 'success', wp_get_referer() ?: home_url() ) );
    exit;
}
add_action( 'admin_post_nopriv_cfl_consultation', 'cfl_handle_consultation' );
add_action( 'admin_post_cfl_consultation',        'cfl_handle_consultation' );

/* ─── SVG Icons Helper ─── */
function cfl_icon( $name ) {
    $icons = array(
        'phone'      => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
        'mail'       => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
        'map-pin'    => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>',
        'eye'        => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>',
        'shield'     => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        'award'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="6"/><path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/></svg>',
        'zap'        => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>',
        'heart'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>',
        'users'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        'clock'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
        'star'       => '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        'check'      => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>',
        'chevron'    => '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>',
        'arrow-right'=> '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>',
        'globe'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>',
        'badge'      => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"/><path d="m9 12 2 2 4-4"/></svg>',
        'trending'   => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></svg>',
        'stethoscope'=> '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4.8 2.655A.5.5 0 0 1 5.5 2h1a.5.5 0 0 1 .474.342l1.776 5.332A2 2 0 0 1 7.151 10H4.849a2 2 0 0 1-1.6-2.326ZM14.8 2.655A.5.5 0 0 1 15.5 2h1a.5.5 0 0 1 .474.342l1.776 5.332A2 2 0 0 1 17.151 10h-2.302a2 2 0 0 1-1.6-2.326Z"/><path d="M6 10v2a6 6 0 0 0 12 0v-2"/><path d="M6 10H4"/><path d="M18 10h2"/><circle cx="18" cy="18" r="2"/><path d="M18 14v2"/></svg>',
        'percent'    => '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 5 5 19"/><circle cx="6.5" cy="6.5" r="2.5"/><circle cx="17.5" cy="17.5" r="2.5"/></svg>',
        'shield-check'=> '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
        'menu'       => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>',
        'x'          => '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
    );
    return isset( $icons[ $name ] ) ? $icons[ $name ] : '';
}
