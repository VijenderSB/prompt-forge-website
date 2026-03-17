<?php
/**
 * Theme Footer
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;

$brand_name    = esc_html( cfl_get( 'cfl_brand_name', 'Centre for Lasik' ) );
$phone         = esc_attr( cfl_get( 'cfl_phone', '+91-9667770450' ) );
$phone_display = esc_html( cfl_get( 'cfl_phone_display', '+91-96677 70450' ) );
$email         = esc_html( cfl_get( 'cfl_email', 'info@laser.fyi' ) );
$address       = esc_html( cfl_get( 'cfl_address', 'New Delhi, India' ) );
?>

<!-- ─── Footer ─── -->
<footer class="site-footer">
  <div class="container section-padding">

    <!-- Footer Grid -->
    <div class="footer-grid">
      <!-- Brand -->
      <div class="footer-brand">
        <h3 style="font-size:1.125rem;margin-bottom:0.75rem;"><?php echo $brand_name; ?></h3>
        <p>India's #1 LASIK platform — the world's largest digital aggregator for laser vision correction. VIP volume-discount rates at 50+ premium centres PAN India.</p>
        <div class="footer-contact">
          <a href="tel:<?php echo $phone; ?>"><?php echo cfl_icon( 'phone' ); ?> <?php echo $phone_display; ?></a>
          <a href="mailto:<?php echo $email; ?>"><?php echo cfl_icon( 'mail' ); ?> <?php echo $email; ?></a>
          <div><?php echo cfl_icon( 'map-pin' ); ?> <?php echo $address; ?></div>
        </div>
      </div>

      <!-- LASIK Candidate -->
      <div class="footer-column">
        <h4>LASIK Candidate</h4>
        <ul>
          <li><a href="#">Am I a Candidate?</a></li>
          <li><a href="#">About Eye Anatomy</a></li>
          <li><a href="#">Common Vision Problems</a></li>
          <li><a href="#">What Is LASIK & Why</a></li>
          <li><a href="#">LASIK Myths vs Facts</a></li>
          <li><a href="#">If I Am Unfit for LASIK</a></li>
          <li><a href="#">Which LASIK is Best?</a></li>
        </ul>
      </div>

      <!-- LASIK Packages -->
      <div class="footer-column">
        <h4>LASIK Packages</h4>
        <ul>
          <li><a href="#">Standard LASIK — ₹8,999/eye</a></li>
          <li><a href="#">HD Contoura Vision — ₹25,500/eye</a></li>
          <li><a href="#">Femto + Contoura — ₹45,000/eye</a></li>
          <li><a href="#">WaveLight InnovEyes — ₹49,000/eye</a></li>
          <li><a href="#">SMILE Pro — ₹65,000/eye</a></li>
          <li><a href="#">SiLK — ₹75,000/eye</a></li>
          <li><a href="#">Compare All Procedures</a></li>
          <li><a href="#">LASIK Cost in India</a></li>
        </ul>
      </div>

      <!-- Planning + Quick Links -->
      <div>
        <div class="footer-column" style="margin-bottom:2rem;">
          <h4>Planning for LASIK</h4>
          <ul>
            <li><a href="#">Risk & Recovery</a></li>
            <li><a href="#">International Guidelines</a></li>
            <li><a href="#">LASIK Technologies</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Our Centres</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a></li>
            <li><a href="#why-us">Why Choose Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Top Cities -->
    <div class="footer-cities">
      <h4>Top Cities</h4>
      <div class="cities-grid">
        <?php
        $cities = array(
            'LASIK in Delhi', 'LASIK in Noida', 'LASIK in Gurgaon', 'LASIK in Faridabad',
            'LASIK in Ghaziabad', 'LASIK in Mumbai', 'LASIK in Pune', 'LASIK in Bangalore',
            'LASIK in Hyderabad', 'LASIK in Chennai', 'LASIK in Kolkata', 'LASIK in Ahmedabad',
            'LASIK in Jaipur', 'LASIK in Lucknow', 'LASIK in Chandigarh', 'LASIK in Indore',
            'LASIK in Kochi', 'LASIK in Bhopal', 'LASIK in Nagpur', 'LASIK in Coimbatore',
        );
        foreach ( $cities as $city ) :
        ?>
          <a href="#"><?php echo esc_html( $city ); ?></a>
        <?php endforeach; ?>
      </div>
      <a href="#" style="display:inline-block;margin-top:1rem;font-size:0.875rem;font-weight:500;color:hsla(0,0%,100%,0.8);">View All Locations →</a>
    </div>

    <!-- Copyright -->
    <div class="footer-bottom">
      <p>© <?php echo date( 'Y' ); ?> <?php echo $brand_name; ?>. All rights reserved.</p>
      <p>laser.fyi — India's #1 LASIK Eye Surgery Platform</p>
    </div>

  </div>
</footer>

<!-- ─── Sticky Mobile CTA ─── -->
<div class="sticky-mobile-cta">
  <a href="tel:<?php echo $phone; ?>" class="btn btn-outline">📞 Call Now</a>
  <a href="#consultation" class="btn btn-primary">Book Free Consultation</a>
</div>

<?php wp_footer(); ?>
</body>
</html>
