<?php
/**
 * Template Name: LASIK Myths vs Facts
 * Slug: lasik-myths-vs-facts
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$myths = array(
    array( 'myth' => 'LASIK is painful', 'fact' => 'LASIK is completely painless. Anaesthetic eye drops numb the eye before the procedure. Most patients feel only mild pressure for a few seconds. The laser itself produces zero sensation.' ),
    array( 'myth' => 'LASIK results are temporary — vision will come back', 'fact' => 'LASIK permanently reshapes the cornea. The correction is lifelong. Over 95% of patients maintain stable vision for decades. Age-related presbyopia (after 40) is a separate lens condition, not a LASIK regression.' ),
    array( 'myth' => 'LASIK can make you blind', 'fact' => 'There is no documented case of blindness from LASIK in peer-reviewed literature. The excimer laser is computer-controlled with multiple safety systems. The complication rate is less than 1%, and serious complications are extremely rare.' ),
    array( 'myth' => 'You can\'t blink or move during LASIK', 'fact' => 'A gentle eyelid holder keeps your eye open — you cannot blink during the procedure. Modern lasers have 6D eye-tracking systems (like PerfectPulse Technology® at 1,050 readings/sec) that compensate for any eye movement in real-time.' ),
    array( 'myth' => 'LASIK is not safe for high power (–6 to –10)', 'fact' => 'Modern procedures like HD Contoura Vision and WaveLight InnovEyes safely treat prescriptions up to –12D. Over 30% of high-power patients achieve better-than-6/6 (super vision) with topography-guided treatment.' ),
    array( 'myth' => 'LASIK causes permanent dry eyes', 'fact' => 'Temporary dry eye is common for 2–4 weeks and managed with lubricating drops. Flapless procedures (SMILE Pro, SiLK) preserve 80% more corneal nerves and have the lowest dry eye risk. Permanent dry eye is extremely rare (<1%).' ),
    array( 'myth' => 'LASIK is only for young people', 'fact' => 'LASIK is suitable for adults aged 18–55+ with a stable prescription. There is no upper age limit as long as the cornea is healthy and thick enough. Many patients in their 40s and 50s successfully undergo LASIK.' ),
    array( 'myth' => 'All LASIK procedures are the same', 'fact' => 'There are 6 distinct LASIK technologies — from Standard LASIK (₹8,999/eye) to SiLK (₹75,000/eye). Each uses different laser platforms, flap vs flapless approaches, and tracking systems. The right procedure depends on your corneal thickness, prescription, and lifestyle.' ),
    array( 'myth' => 'LASIK is too expensive', 'fact' => 'LASIK starts at just ₹8,999/eye with EMI from ₹750/month. Over 5 years, LASIK costs less than glasses and contact lenses combined. It\'s a one-time investment that pays for itself within 2–3 years.' ),
    array( 'myth' => 'Recovery takes weeks — you\'ll miss a lot of work', 'fact' => 'Most LASIK patients return to work within 1–2 days. Vision improves within hours. SMILE Pro and SiLK have same-day functional recovery. Only EPI LASIK has a longer 5–7 day recovery period.' ),
    array( 'myth' => 'Glasses are safer than LASIK', 'fact' => 'Glasses carry risks too — broken lenses can cause eye injuries, fogging reduces visibility while driving, and contact lens infections affect thousands annually. LASIK has a 96% satisfaction rate — higher than any other elective procedure.' ),
    array( 'myth' => 'LASIK weakens the cornea permanently', 'fact' => 'While LASIK does remove some corneal tissue, modern procedures are designed to preserve maximum biomechanical strength. Flapless procedures (SMILE Pro, SiLK) maintain 80% more corneal integrity than flap-based LASIK.' ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:56rem;">
      <div class="section-heading centered">
        <h1>LASIK Myths vs Facts</h1>
        <p>Separating fact from fiction — 12 common myths about LASIK debunked with clinical evidence</p>
      </div>

      <div class="myths-list">
        <?php foreach ( $myths as $item ) : ?>
          <div class="myth-card card-elevated">
            <div class="myth-section">
              <div class="myth-icon-wrap myth-icon-bad"><?php echo cfl_icon( 'x' ); ?></div>
              <div>
                <span class="myth-label myth-label-bad">Myth</span>
                <p class="myth-text"><?php echo esc_html( $item['myth'] ); ?></p>
              </div>
            </div>
            <div class="fact-section">
              <div class="myth-icon-wrap myth-icon-good"><?php echo cfl_icon( 'check' ); ?></div>
              <div>
                <span class="myth-label myth-label-good">Fact</span>
                <p class="fact-text"><?php echo esc_html( $item['fact'] ); ?></p>
              </div>
            </div>
          </div>
        <?php endforeach; ?>
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
