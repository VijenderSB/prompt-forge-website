<?php
/**
 * Template Name: Which LASIK is Best
 * Slug: which-lasik-is-best
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$procedures = array(
    array( 'name' => 'Standard LASIK',          'price' => '₹8,999',  'type' => 'Flap-Based',    'laser' => 'Excimer',        'tracking' => 'IR Tracker',                'recovery' => '24 hrs',    'dryEye' => 'Moderate',  'power' => '–0.5 to –8D',  'bestFor' => 'Budget-friendly, mild prescriptions' ),
    array( 'name' => 'HD Contoura Vision',       'price' => '₹25,500', 'type' => 'Flap-Based',    'laser' => 'Topo-Guided',    'tracking' => '22,000 Points',             'recovery' => '24 hrs',    'dryEye' => 'Moderate',  'power' => '–0.5 to –10D', 'bestFor' => 'Better-than-6/6, no halos/glare' ),
    array( 'name' => 'WaveLight InnovEyes',      'price' => '₹49,000', 'type' => 'Flap-Based',    'laser' => 'AI-Guided 400Hz','tracking' => '1,050 Pts/Sec',             'recovery' => '24 hrs',    'dryEye' => 'Moderate',  'power' => '–0.5 to –12D', 'bestFor' => 'Premium precision, high power' ),
    array( 'name' => 'EPI LASIK',                'price' => '₹18,000', 'type' => 'Surface (No Flap)', 'laser' => 'Excimer',    'tracking' => 'Standard',                  'recovery' => '5–7 days',  'dryEye' => 'Low',       'power' => '–0.5 to –8D',  'bestFor' => 'Armed forces, thin corneas' ),
    array( 'name' => 'SMILE Pro',                'price' => '₹65,000', 'type' => 'Flapless',      'laser' => 'Femtosecond',    'tracking' => 'CentreFlow',                'recovery' => 'Same day',  'dryEye' => 'Very Low',  'power' => '–1 to –10D',   'bestFor' => 'Active lifestyle, minimal dry eye' ),
    array( 'name' => 'SiLK',                     'price' => '₹75,000', 'type' => 'Flapless',      'laser' => 'Next-Gen Femto', 'tracking' => 'Ultra-Precision',           'recovery' => 'Same day',  'dryEye' => 'Lowest',    'power' => '–0.5 to –10D', 'bestFor' => 'Best night vision, latest tech' ),
);

$recommendations = array(
    array( 'label' => 'Best Value',         'proc' => 'Standard LASIK',     'price' => '₹8,999/eye',  'reason' => 'Most affordable for mild prescriptions' ),
    array( 'label' => 'Most Popular',       'proc' => 'HD Contoura Vision', 'price' => '₹25,500/eye', 'reason' => '22,000-point mapping, better than 6/6 vision' ),
    array( 'label' => 'Best Technology',    'proc' => 'WaveLight InnovEyes','price' => '₹49,000/eye', 'reason' => 'AI-guided, 1,050 eye-tracking points/sec' ),
    array( 'label' => 'Best for Active Life','proc' => 'SMILE Pro',         'price' => '₹65,000/eye', 'reason' => 'Flapless, 2mm incision, minimal dry eye' ),
);
?>

<div style="padding-top:64px;">
  <!-- Hero -->
  <section class="hero-gradient section-padding" style="text-align:center;">
    <div class="container" style="max-width:48rem;">
      <h1 style="color:var(--primary-foreground);margin-bottom:1rem;">Which LASIK is Best for You?</h1>
      <p style="color:hsla(0,0%,100%,0.8);font-size:1.125rem;">Compare all procedures side-by-side to find your ideal match</p>
    </div>
  </section>

  <!-- Comparison Table -->
  <section class="section-padding">
    <div class="container">
      <div style="overflow-x:auto;">
        <table class="comparison-table">
          <thead>
            <tr>
              <th>Feature</th>
              <?php foreach ( $procedures as $p ) : ?>
                <th><?php echo esc_html( $p['name'] ); ?></th>
              <?php endforeach; ?>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Price / Eye</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td style="font-weight:700;color:var(--primary);"><?php echo esc_html( $p['price'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Type</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['type'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Laser</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['laser'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Eye Tracking</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['tracking'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Recovery</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['recovery'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Dry Eye Risk</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['dryEye'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Treatable Power</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['power'] ); ?></td>
              <?php endforeach; ?>
            </tr>
            <tr>
              <td><strong>Best For</strong></td>
              <?php foreach ( $procedures as $p ) : ?>
                <td><?php echo esc_html( $p['bestFor'] ); ?></td>
              <?php endforeach; ?>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>

  <!-- Quick recommendation -->
  <section class="section-padding" style="background:var(--surface);">
    <div class="container" style="max-width:56rem;">
      <div class="section-heading centered">
        <h2>Quick Recommendation</h2>
        <p>Not sure which to choose? Here's a starting point:</p>
      </div>
      <div class="recommendation-grid">
        <?php foreach ( $recommendations as $rec ) : ?>
          <div class="recommendation-card card-elevated">
            <span class="discount-badge"><?php echo esc_html( $rec['label'] ); ?></span>
            <h3><?php echo esc_html( $rec['proc'] ); ?></h3>
            <p class="rec-price"><?php echo esc_html( $rec['price'] ); ?></p>
            <p class="rec-reason"><?php echo esc_html( $rec['reason'] ); ?></p>
          </div>
        <?php endforeach; ?>
      </div>
    </div>
  </section>

  <?php get_template_part( 'template-parts/cta-banner' ); ?>
</div>

<?php get_footer(); ?>
