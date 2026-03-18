<?php
/**
 * Template Name: Unfit for LASIK
 * Slug: unfit-for-lasik
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$contraindications = array(
    array( 'icon' => 'shield', 'title' => 'Keratoconus or Corneal Ectasia', 'severity' => 'Absolute',
        'desc' => 'Keratoconus causes progressive corneal thinning and bulging. LASIK would weaken the cornea further and is strictly contraindicated.',
        'alt' => 'Corneal Cross-Linking (C3R) stabilises the condition. After stabilisation, ICL (Implantable Collamer Lens) may be an option for vision correction.' ),
    array( 'icon' => 'eye', 'title' => 'Thin Corneas (< 480μm)', 'severity' => 'Relative',
        'desc' => 'Standard LASIK requires adequate corneal thickness for safe flap creation and ablation. Very thin corneas may not leave enough residual stromal bed.',
        'alt' => 'EPI LASIK (no flap — preserves full stroma), SMILE Pro, SiLK (flapless lenticule), or ICL for very thin corneas with high power.' ),
    array( 'icon' => 'trending', 'title' => 'Unstable Prescription', 'severity' => 'Temporary',
        'desc' => 'Your prescription must be stable (unchanged) for at least 12 months before LASIK. An unstable prescription means the eye is still changing shape.',
        'alt' => 'Wait until your prescription stabilises. Use glasses or contacts in the interim. Re-evaluate annually. Most prescriptions stabilise by age 21–24.' ),
    array( 'icon' => 'heart', 'title' => 'Uncontrolled Autoimmune Conditions', 'severity' => 'Relative',
        'desc' => 'Conditions like lupus, rheumatoid arthritis, Sjögren\'s syndrome, or uncontrolled diabetes can impair healing and increase infection risk.',
        'alt' => 'Once the condition is well-controlled with medication, LASIK may become an option. A clearance letter from your physician is required. PRK/EPI LASIK may be safer.' ),
    array( 'icon' => 'users', 'title' => 'Pregnancy or Nursing', 'severity' => 'Temporary',
        'desc' => 'Hormonal changes during pregnancy and nursing can temporarily alter corneal shape and prescription. Results may be unpredictable.',
        'alt' => 'Wait 3–6 months after stopping nursing for hormones to stabilise. Your prescription will be re-checked before proceeding.' ),
    array( 'icon' => 'eye', 'title' => 'Severe Dry Eye Disease', 'severity' => 'Relative',
        'desc' => 'Severe, chronic dry eye can worsen after LASIK due to corneal nerve disruption. Mild dry eye can usually be managed.',
        'alt' => 'Pre-treat dry eye aggressively (punctal plugs, cyclosporine drops). Consider SMILE Pro or SiLK which have the lowest dry eye risk. ICL is another option.' ),
    array( 'icon' => 'clock', 'title' => 'Under 18 Years of Age', 'severity' => 'Absolute',
        'desc' => 'Eyes are still developing before age 18 and the prescription is likely unstable. LASIK is not performed on minors.',
        'alt' => 'Glasses or contact lenses until age 18+. After 18, wait for prescription stability (12 months unchanged) before evaluation.' ),
    array( 'icon' => 'shield', 'title' => 'Active Eye Infections or Injuries', 'severity' => 'Temporary',
        'desc' => 'Active conjunctivitis, keratitis, herpes simplex keratitis, or recent eye trauma must be fully resolved before LASIK.',
        'alt' => 'Complete treatment and recovery first. Re-evaluate after 3–6 months of being infection-free.' ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:64rem;">
      <div class="section-heading centered">
        <h1>If I Am Unfit for LASIK</h1>
        <p>Not everyone is a candidate for LASIK — but there are almost always alternatives. Here's what disqualifies you and what your options are.</p>
      </div>

      <div class="unfit-list">
        <?php foreach ( $contraindications as $c ) : ?>
          <div class="unfit-card card-elevated">
            <div class="unfit-card-inner">
              <div class="unfit-icon"><?php echo cfl_icon( $c['icon'] ); ?></div>
              <div class="unfit-content">
                <div class="unfit-header">
                  <h3><?php echo esc_html( $c['title'] ); ?></h3>
                  <span class="severity-badge severity-<?php echo strtolower( $c['severity'] ); ?>"><?php echo esc_html( $c['severity'] ); ?></span>
                </div>
                <p class="unfit-desc"><?php echo esc_html( $c['desc'] ); ?></p>
                <div class="unfit-alt">
                  <span class="unfit-alt-label">Your Alternative</span>
                  <p><?php echo esc_html( $c['alt'] ); ?></p>
                </div>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Severity legend -->
      <div class="severity-legend">
        <h4>Understanding Severity Levels</h4>
        <div class="severity-legend-grid">
          <div class="severity-legend-item">
            <span class="severity-badge severity-absolute">Absolute</span>
            <p>LASIK is not possible. Alternative procedures are recommended.</p>
          </div>
          <div class="severity-legend-item">
            <span class="severity-badge severity-relative">Relative</span>
            <p>LASIK may still be possible with a different technique or after treatment.</p>
          </div>
          <div class="severity-legend-item">
            <span class="severity-badge severity-temporary">Temporary</span>
            <p>You may become eligible after the condition resolves.</p>
          </div>
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
