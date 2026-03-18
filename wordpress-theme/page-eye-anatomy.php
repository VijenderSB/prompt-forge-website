<?php
/**
 * Template Name: Eye Anatomy
 * Slug: eye-anatomy
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$parts = array(
    array( 'icon' => 'eye',    'name' => 'Cornea',            'description' => 'The transparent, dome-shaped front surface of the eye. It provides about 70% of the eye\'s focusing power. LASIK reshapes the cornea to correct refractive errors.', 'relevance' => 'LASIK works by precisely reshaping the cornea using an excimer laser. Corneal thickness (measured via Pachymetry) determines which procedure is safe for you.' ),
    array( 'icon' => 'eye',    'name' => 'Iris & Pupil',      'description' => 'The iris is the coloured part of the eye that controls the size of the pupil — the opening through which light enters. Pupil size affects night vision quality after LASIK.', 'relevance' => 'Large pupils (>7mm) may experience halos/glare after some procedures. Topography-guided options like Contoura Vision minimise this risk.' ),
    array( 'icon' => 'eye',    'name' => 'Crystalline Lens',  'description' => 'A transparent biconvex structure behind the iris that fine-tunes focus for near and far objects. It accounts for about 30% of the eye\'s total focusing power.', 'relevance' => 'LASIK corrects at the corneal level and does not affect the lens. Presbyopia (age-related lens stiffening after 40) is a separate condition not treated by LASIK.' ),
    array( 'icon' => 'eye',    'name' => 'Retina',            'description' => 'The light-sensitive layer at the back of the eye containing photoreceptor cells (rods and cones). It converts light into electrical signals sent to the brain via the optic nerve.', 'relevance' => 'A healthy retina is essential for good LASIK outcomes. Pre-op dilated retinal examination checks for tears, detachments, or lattice degeneration.' ),
    array( 'icon' => 'eye',    'name' => 'Macula & Fovea',    'description' => 'The macula is the central area of the retina responsible for sharp, detailed vision. The fovea (centre of the macula) provides the highest visual acuity.', 'relevance' => 'The goal of LASIK is to focus light precisely on the fovea. Procedures like Contoura Vision treat on the visual axis for optimal foveal focusing.' ),
    array( 'icon' => 'eye',    'name' => 'Tear Film',         'description' => 'A three-layer film (lipid, aqueous, mucin) that keeps the cornea moist, smooth, and optically clear. Healthy tear film is critical for clear vision.', 'relevance' => 'Dry eye is the most common side effect of LASIK. Schirmer\'s test and tear break-up time are assessed pre-operatively. Flapless procedures (SMILE Pro, SiLK) have the lowest dry eye risk.' ),
);

$layers = array(
    array( 'name' => 'Epithelium',          'thickness' => '50μm',        'description' => 'Outermost protective layer. Regenerates in 3–5 days. EPI LASIK works on this layer only.' ),
    array( 'name' => 'Bowman\'s Layer',     'thickness' => '8–14μm',      'description' => 'Tough, acellular layer. Does not regenerate once disrupted. Surface procedures preserve it.' ),
    array( 'name' => 'Stroma',              'thickness' => '500μm (90%)', 'description' => 'The thickest layer — composed of collagen fibrils. LASIK reshapes this layer. Thickness determines eligibility.' ),
    array( 'name' => 'Descemet\'s Membrane','thickness' => '5–10μm',      'description' => 'Thin basement membrane. LASIK does not reach this layer.' ),
    array( 'name' => 'Endothelium',         'thickness' => '5μm',         'description' => 'Single-cell layer that pumps fluid to keep the cornea clear. Not affected by LASIK.' ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:64rem;">
      <div class="section-heading centered">
        <h1>About Eye Anatomy</h1>
        <p>Understanding how your eye works helps you make an informed decision about LASIK. Here's a comprehensive look at each part and its role in laser vision correction.</p>
      </div>

      <!-- Eye parts grid -->
      <div class="anatomy-grid">
        <?php foreach ( $parts as $part ) : ?>
          <div class="anatomy-card card-elevated">
            <div class="anatomy-card-header">
              <div class="anatomy-icon"><?php echo cfl_icon( $part['icon'] ); ?></div>
              <h3><?php echo esc_html( $part['name'] ); ?></h3>
            </div>
            <p class="anatomy-desc"><?php echo esc_html( $part['description'] ); ?></p>
            <div class="anatomy-relevance">
              <span class="anatomy-relevance-label">LASIK Relevance</span>
              <p><?php echo esc_html( $part['relevance'] ); ?></p>
            </div>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- Corneal layers -->
      <div class="section-heading centered" style="margin-top:4rem;">
        <h2>5 Layers of the Cornea</h2>
        <p>The cornea has 5 distinct layers. Understanding them explains why different LASIK procedures work differently.</p>
      </div>

      <div class="cornea-layers">
        <?php foreach ( $layers as $i => $layer ) : ?>
          <div class="cornea-layer-item card-elevated">
            <div class="cornea-layer-meta">
              <span class="cornea-layer-num"><?php echo $i + 1; ?></span>
              <div>
                <h4><?php echo esc_html( $layer['name'] ); ?></h4>
                <span class="cornea-layer-thickness"><?php echo esc_html( $layer['thickness'] ); ?></span>
              </div>
            </div>
            <p><?php echo esc_html( $layer['description'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>

      <!-- How LASIK uses anatomy -->
      <div class="anatomy-summary" style="margin-top:3rem;">
        <h3>How LASIK Uses Your Eye's Anatomy</h3>
        <div class="anatomy-summary-grid">
          <div>
            <h4>Flap-Based (LASIK, Contoura, InnovEyes)</h4>
            <p>A thin flap is created in the epithelium and Bowman's layer. The excimer laser reshapes the stroma beneath, then the flap is repositioned. The cornea's curvature changes to focus light on the fovea.</p>
          </div>
          <div>
            <h4>Flapless (SMILE Pro, SiLK, EPI LASIK)</h4>
            <p>No flap is created. SMILE/SiLK extract a lenticule from within the stroma through a tiny incision. EPI LASIK works on the surface. All approaches preserve more corneal nerves and biomechanical strength.</p>
          </div>
        </div>
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
