<?php
/**
 * Template Name: What Is LASIK
 * Slug: what-is-lasik
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$benefits = array(
    array( 'icon' => 'eye',    'title' => 'Freedom from Glasses',      'desc' => 'Over 95% of LASIK patients achieve 6/6 vision or better, eliminating the need for glasses or contact lenses.' ),
    array( 'icon' => 'zap',    'title' => 'Quick & Painless',          'desc' => 'The laser treatment takes only 7–60 seconds per eye. Total procedure time is under 15 minutes. Zero pain with numbing drops.' ),
    array( 'icon' => 'clock',  'title' => 'Rapid Recovery',            'desc' => 'Most patients return to work within 1–2 days. Vision improves within hours of the procedure.' ),
    array( 'icon' => 'trending','title' => 'Permanent Results',        'desc' => 'LASIK permanently reshapes the cornea. The correction is lifelong — over 95% of patients maintain stable vision for decades.' ),
    array( 'icon' => 'shield', 'title' => 'Proven Safety Record',      'desc' => 'Over 40 million LASIK procedures performed worldwide since 1999. US-FDA approved with a 96% patient satisfaction rate.' ),
    array( 'icon' => 'check',  'title' => 'Cost-Effective Long Term',  'desc' => 'Eliminates recurring costs of glasses, lenses, and solutions. LASIK pays for itself within 2–3 years.' ),
);

$steps = array(
    array( 'step' => 1, 'title' => 'Free Consultation & Diagnostics', 'desc' => 'A comprehensive 90-minute evaluation including Pentacam corneal scan, wavefront aberrometry, Schirmer dry eye test, and dilated retinal exam. Your surgeon reviews all data to recommend the best procedure.', 'duration' => '90 minutes' ),
    array( 'step' => 2, 'title' => 'Pre-Op Preparation',              'desc' => 'Stop contact lenses 3–7 days before surgery. On surgery day, numbing drops are applied. The entire preparation takes about 10 minutes.', 'duration' => '10 minutes' ),
    array( 'step' => 3, 'title' => 'The LASIK Procedure',             'desc' => 'For flap-based: a thin flap is created, the excimer laser reshapes the stroma, and the flap is repositioned. For flapless (SMILE/SiLK): a lenticule is extracted through a tiny incision. The laser itself takes 7–60 seconds.', 'duration' => '7–60 sec laser' ),
    array( 'step' => 4, 'title' => 'Immediate Post-Op',               'desc' => 'Rest for 30 minutes in the recovery area. Your surgeon checks the eye. You go home with protective eye shields and medicated drops. Vision begins improving within hours.', 'duration' => '30 minutes' ),
    array( 'step' => 5, 'title' => 'Recovery & Follow-Up',            'desc' => 'Day 1 check-up, then 1 week, 1 month, 3 months, and 6 months. Most patients achieve full vision stability by month 3. Free follow-ups included in all packages.', 'duration' => '3–6 months' ),
);

$stats = array(
    array( 'value' => '40M+',      'label' => 'Procedures Worldwide' ),
    array( 'value' => '96%',       'label' => 'Patient Satisfaction' ),
    array( 'value' => '25+ Years', 'label' => 'Proven Track Record' ),
    array( 'value' => '< 1%',     'label' => 'Complication Rate' ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:64rem;">
      <div class="section-heading centered">
        <h1>What Is LASIK & Why Get It?</h1>
        <p>LASIK (Laser-Assisted In Situ Keratomileusis) is the world's most popular vision correction surgery. Here's everything you need to know.</p>
      </div>

      <!-- What is LASIK -->
      <div class="info-box card-elevated" style="margin-bottom:3rem;">
        <h3>What Happens During LASIK?</h3>
        <p>LASIK uses a precise excimer laser to permanently reshape the cornea — the clear front surface of your eye — so that light focuses correctly on the retina. This eliminates the need for glasses or contact lenses to see clearly.</p>
        <p style="margin-top:1rem;">The procedure corrects <strong>myopia</strong> (short-sightedness), <strong>hyperopia</strong> (far-sightedness), and <strong>astigmatism</strong> (cylindrical power). Modern LASIK technologies can treat prescriptions from –0.5D to –12D and astigmatism up to 6D.</p>
      </div>

      <!-- Benefits -->
      <div class="section-heading centered">
        <h2>Why Get LASIK?</h2>
        <p>6 reasons why over 40 million people worldwide have chosen LASIK</p>
      </div>
      <div class="benefits-grid">
        <?php foreach ( $benefits as $b ) : ?>
          <div class="benefit-card card-elevated">
            <div class="benefit-icon"><?php echo cfl_icon( $b['icon'] ); ?></div>
            <h4><?php echo esc_html( $b['title'] ); ?></h4>
            <p><?php echo esc_html( $b['desc'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Step by step -->
      <div class="section-heading centered" style="margin-top:4rem;">
        <h2>The LASIK Journey — Step by Step</h2>
        <p>From your first consultation to perfect vision in 5 simple steps</p>
      </div>
      <div class="steps-list">
        <?php foreach ( $steps as $s ) : ?>
          <div class="step-item card-elevated">
            <div class="step-num-wrap">
              <span class="step-num"><?php echo $s['step']; ?></span>
            </div>
            <div class="step-content">
              <div class="step-header">
                <h4><?php echo esc_html( $s['title'] ); ?></h4>
                <span class="step-duration"><?php echo esc_html( $s['duration'] ); ?></span>
              </div>
              <p><?php echo esc_html( $s['desc'] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Global stats -->
      <div class="anatomy-summary" style="margin-top:3rem;">
        <h3 style="text-align:center;">LASIK by the Numbers</h3>
        <div class="stats-inline">
          <?php foreach ( $stats as $stat ) : ?>
            <div class="stat-inline-item">
              <div class="stat-inline-value"><?php echo esc_html( $stat['value'] ); ?></div>
              <div class="stat-inline-label"><?php echo esc_html( $stat['label'] ); ?></div>
            </div>
          <?php endforeach; ?>
        </div>
      </div>

      <!-- Consultation Form -->
      <div style="margin-top:3rem;max-width:32rem;margin-left:auto;margin-right:auto;">
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
