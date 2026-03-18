<?php
/**
 * CTA Banner — reusable template part
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
?>
<section class="cta-banner-section">
  <div class="container" style="text-align:center;max-width:48rem;">
    <h2 style="color:var(--primary-foreground);margin-bottom:0.75rem;">Ready to See Clearly?</h2>
    <p style="color:hsla(0,0%,100%,0.8);margin-bottom:1.5rem;">Book your free consultation today. Our LASIK specialist will call you within 30 minutes.</p>
    <div style="display:flex;gap:1rem;justify-content:center;flex-wrap:wrap;">
      <a href="<?php echo esc_url( home_url( '/am-i-a-candidate' ) ); ?>" class="btn btn-white">Book Free Consultation</a>
      <a href="tel:<?php echo esc_attr( cfl_get( 'cfl_phone', '+91-9667770450' ) ); ?>" class="btn btn-outline" style="border-color:hsla(0,0%,100%,0.3);color:var(--primary-foreground);">
        <?php echo cfl_icon( 'phone' ); ?> Call Now
      </a>
    </div>
  </div>
</section>
