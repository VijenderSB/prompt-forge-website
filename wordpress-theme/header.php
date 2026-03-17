<?php
/**
 * Theme Header
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;

$brand_name    = esc_html( cfl_get( 'cfl_brand_name', 'Centre for Lasik' ) );
$phone         = esc_attr( cfl_get( 'cfl_phone', '+91-9667770450' ) );
$phone_display = esc_html( cfl_get( 'cfl_phone_display', '+91-96677 70450' ) );
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
  <meta charset="<?php bloginfo( 'charset' ); ?>">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="<?php bloginfo( 'description' ); ?>">
  <?php wp_head(); ?>
</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>

<!-- ─── Fixed Navbar ─── -->
<header class="site-header" id="site-header">
  <div class="container">
    <!-- Logo -->
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="site-logo">
      <div class="site-logo-icon">CL</div>
      <div>
        <span class="site-logo-text"><?php echo $brand_name; ?></span>
        <span class="site-logo-sub">laser.fyi</span>
      </div>
    </a>

    <!-- Desktop Nav -->
    <nav class="main-nav" role="navigation" aria-label="Primary Navigation">
      <?php
      wp_nav_menu( array(
          'theme_location' => 'primary',
          'container'      => false,
          'items_wrap'     => '%3$s',
          'fallback_cb'    => 'cfl_fallback_menu',
          'depth'          => 2,
      ) );
      ?>
    </nav>

    <!-- Nav Actions -->
    <div class="nav-actions">
      <a href="tel:<?php echo $phone; ?>" class="nav-phone">
        <?php echo cfl_icon( 'phone' ); ?>
        <?php echo $phone_display; ?>
      </a>
      <a href="#consultation" class="btn btn-primary" style="height:36px;font-size:0.875rem;">Book Free Consultation</a>
      <button class="mobile-toggle" id="mobile-toggle" aria-label="Toggle menu">
        <?php echo cfl_icon( 'menu' ); ?>
      </button>
    </div>
  </div>

  <!-- Mobile Menu -->
  <div class="mobile-menu" id="mobile-menu">
    <?php
    wp_nav_menu( array(
        'theme_location' => 'primary',
        'container'      => false,
        'depth'          => 1,
    ) );
    ?>
    <div style="padding-top:0.75rem;border-top:1px solid var(--border);">
      <a href="tel:<?php echo $phone; ?>" style="display:flex;align-items:center;gap:0.5rem;padding:0.5rem 0.75rem;font-size:0.875rem;color:var(--primary);font-weight:500;">
        <?php echo cfl_icon( 'phone' ); ?> <?php echo $phone_display; ?>
      </a>
    </div>
  </div>
</header>

<!-- ─── USP Strip ─── -->
<div class="usp-strip" style="margin-top:64px;">
  <div class="container">
    <span class="usp-label">India's #1 LASIK Platform</span>
    <span class="usp-item"><?php echo cfl_icon( 'globe' ); ?> 50+ centres PAN India</span>
    <span class="usp-item"><?php echo cfl_icon( 'percent' ); ?> VIP volume-discount rates — up to 30% off</span>
    <a href="#why-us">Why us <?php echo cfl_icon( 'arrow-right' ); ?></a>
  </div>
</div>

<?php
/**
 * Fallback menu if no WordPress menu is set
 */
function cfl_fallback_menu() {
    echo '<a href="#procedures">Procedures</a>';
    echo '<a href="#why-us">Why Us</a>';
    echo '<a href="#testimonials">Testimonials</a>';
    echo '<a href="#expert-insights">Insights</a>';
    echo '<a href="#faq">FAQ</a>';
    echo '<a href="#consultation">Contact</a>';
}
