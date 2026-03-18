<?php
/**
 * Template Name: Common Vision Problems
 * Slug: common-vision-problems
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$conditions = array(
    array(
        'icon' => '−', 'name' => 'Myopia (Short-Sightedness)', 'power' => '–0.5D to –12D',
        'description' => 'The eyeball is too long or the cornea too curved, causing distant objects to appear blurry while near vision stays clear. The most common refractive error globally.',
        'prevalence' => 'Affects ~30% of the Indian population. Rising rapidly due to increased screen time.',
        'lasikFix' => 'LASIK flattens the central cornea to shift the focal point back onto the retina. All 6 procedures at Centre for Lasik correct myopia.',
        'procedures' => array( 'Standard LASIK', 'HD Contoura Vision', 'WaveLight InnovEyes', 'SMILE Pro', 'SiLK' ),
    ),
    array(
        'icon' => '+', 'name' => 'Hyperopia (Far-Sightedness)', 'power' => '+0.5D to +6D',
        'description' => 'The eyeball is too short or the cornea too flat, causing near objects to appear blurry. Patients often experience eye strain and headaches during close work.',
        'prevalence' => 'Affects ~10% of the population. More common with age.',
        'lasikFix' => 'LASIK steepens the central cornea to increase its focusing power, bringing the focal point forward onto the retina.',
        'procedures' => array( 'Standard LASIK', 'HD Contoura Vision', 'WaveLight InnovEyes' ),
    ),
    array(
        'icon' => '◎', 'name' => 'Astigmatism (Cylindrical Power)', 'power' => 'Up to 6D',
        'description' => 'The cornea is shaped more like a rugby ball than a football, causing blurred or distorted vision at all distances. Often occurs alongside myopia or hyperopia.',
        'prevalence' => 'Present in ~40% of people with refractive errors. Often undiagnosed.',
        'lasikFix' => 'LASIK reshapes the cornea into a more spherical shape. Topography-guided procedures (Contoura Vision, InnovEyes) are especially effective for high/irregular astigmatism.',
        'procedures' => array( 'HD Contoura Vision', 'WaveLight InnovEyes', 'SMILE Pro' ),
    ),
    array(
        'icon' => '⏱', 'name' => 'Presbyopia (Age-Related Near Vision Loss)', 'power' => 'Begins after age 40',
        'description' => 'The crystalline lens inside the eye loses flexibility with age, making it difficult to focus on near objects. This is why reading glasses become necessary after 40.',
        'prevalence' => 'Universal — affects everyone by age 45–50.',
        'lasikFix' => 'Standard LASIK does not treat presbyopia (it\'s a lens issue, not corneal). Monovision LASIK is an option where one eye is corrected for distance and the other for near.',
        'procedures' => array( 'Monovision LASIK (specialised)' ),
    ),
    array(
        'icon' => '⚠', 'name' => 'Keratoconus', 'power' => 'Progressive corneal thinning',
        'description' => 'A condition where the cornea progressively thins and bulges into a cone shape, causing significant visual distortion. It is a contraindication for standard LASIK.',
        'prevalence' => 'Affects ~1 in 2,000 people. More common in South Asia.',
        'lasikFix' => 'LASIK is NOT suitable for keratoconus — it can worsen the condition. Corneal cross-linking (C3R) is the recommended stabilisation treatment. Our pre-op Pentacam scan screens for early keratoconus.',
        'procedures' => array( 'Not eligible — C3R recommended' ),
    ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:64rem;">
      <div class="section-heading centered">
        <h1>Common Vision Problems</h1>
        <p>Learn about the most common refractive errors, how they affect your vision, and which LASIK procedure is best suited to correct each condition.</p>
      </div>

      <div class="vision-problems-list">
        <?php foreach ( $conditions as $c ) : ?>
          <div class="vision-card card-elevated">
            <div class="vision-card-header">
              <div class="vision-icon"><?php echo esc_html( $c['icon'] ); ?></div>
              <div>
                <h3><?php echo esc_html( $c['name'] ); ?></h3>
                <span class="vision-power"><?php echo esc_html( $c['power'] ); ?></span>
              </div>
            </div>
            <p class="vision-desc"><?php echo esc_html( $c['description'] ); ?></p>
            <div class="vision-details">
              <div class="vision-detail-box">
                <span class="vision-detail-label">Prevalence</span>
                <p><?php echo esc_html( $c['prevalence'] ); ?></p>
              </div>
              <div class="vision-detail-box">
                <span class="vision-detail-label" style="color:var(--primary);">How LASIK Fixes It</span>
                <p><?php echo esc_html( $c['lasikFix'] ); ?></p>
              </div>
            </div>
            <div class="vision-procedures">
              <span class="vision-proc-label">Best Procedures:</span>
              <?php foreach ( $c['procedures'] as $p ) : ?>
                <span class="vision-proc-tag"><?php echo esc_html( $p ); ?></span>
              <?php endforeach; ?>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Consultation Form -->
      <div style="margin-top:4rem;max-width:32rem;margin-left:auto;margin-right:auto;">
        <div class="consultation-form-card">
          <h3>Book Free Consultation</h3>
          <p class="form-subtitle">Get a callback within 30 minutes</p>
          <form action="<?php echo esc_url( admin_url( 'admin-post.php' ) ); ?>" method="POST">
            <input type="hidden" name="action" value="cfl_consultation">
            <?php wp_nonce_field( 'cfl_consultation_nonce', 'cfl_nonce' ); ?>
            <input type="text" name="name" placeholder="Your Name" required>
            <input type="tel" name="phone" placeholder="Phone Number" required>
            <input type="email" name="email" placeholder="Email (optional)">
            <div class="captcha-row">
              <span>Security: 10 + 7 =</span>
              <input type="text" name="captcha" placeholder="?" required>
            </div>
            <button type="submit" class="btn btn-primary">Get Free Consultation →</button>
          </form>
        </div>
      </div>
    </div>
  </section>

  <?php get_template_part( 'template-parts/cta-banner' ); ?>
</div>

<?php get_footer(); ?>
