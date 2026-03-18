<?php
/**
 * Template Name: Am I a Candidate?
 * Slug: am-i-a-candidate
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$criteria = array(
    array( 'id' => 'age',        'label' => 'Are you 18 years or older?', 'required' => true ),
    array( 'id' => 'stable',     'label' => 'Has your eye prescription been stable for at least 1 year?', 'required' => true ),
    array( 'id' => 'health',     'label' => 'Are your eyes free from active infections or diseases?', 'required' => true ),
    array( 'id' => 'cornea',     'label' => 'Do you have adequate corneal thickness? (confirmed during screening)', 'required' => false ),
    array( 'id' => 'pregnant',   'label' => 'Are you NOT currently pregnant or nursing?', 'required' => true ),
    array( 'id' => 'autoimmune', 'label' => 'Are you free from uncontrolled autoimmune conditions?', 'required' => true ),
);
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container" style="max-width:48rem;">
      <div class="section-heading centered">
        <h1>Am I a Candidate for LASIK?</h1>
        <p>Answer these quick questions to check your basic eligibility for LASIK eye surgery</p>
      </div>

      <form id="candidate-checker" class="candidate-checklist">
        <?php foreach ( $criteria as $i => $c ) : ?>
          <div class="candidate-item card-elevated" data-id="<?php echo esc_attr( $c['id'] ); ?>" data-required="<?php echo $c['required'] ? '1' : '0'; ?>">
            <p class="candidate-label">
              <?php echo esc_html( $c['label'] ); ?>
              <?php if ( $c['required'] ) : ?><span style="color:var(--destructive);">*</span><?php endif; ?>
            </p>
            <div class="candidate-buttons">
              <button type="button" class="candidate-btn candidate-yes" data-value="yes" aria-label="Yes">
                <?php echo cfl_icon( 'check' ); ?>
              </button>
              <button type="button" class="candidate-btn candidate-no" data-value="no" aria-label="No">
                <?php echo cfl_icon( 'x' ); ?>
              </button>
            </div>
          </div>
        <?php endforeach; ?>

        <div class="text-center" style="margin-top:2rem;">
          <button type="button" id="check-eligibility" class="btn btn-primary btn-lg" disabled>
            Check My Eligibility <?php echo cfl_icon( 'arrow-right' ); ?>
          </button>
        </div>
      </form>

      <!-- Result (hidden by default) -->
      <div id="candidate-result" style="display:none;margin-top:2rem;"></div>

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

<script>
(function(){
  const items = document.querySelectorAll('.candidate-item');
  const btn = document.getElementById('check-eligibility');
  const result = document.getElementById('candidate-result');

  items.forEach(function(item){
    item.querySelectorAll('.candidate-btn').forEach(function(b){
      b.addEventListener('click', function(){
        item.querySelectorAll('.candidate-btn').forEach(function(x){ x.classList.remove('active-yes','active-no'); });
        b.classList.add(b.dataset.value === 'yes' ? 'active-yes' : 'active-no');
        item.dataset.answer = b.dataset.value;
        result.style.display = 'none';
        checkReady();
      });
    });
  });

  function checkReady(){
    var allAnswered = true;
    items.forEach(function(item){
      if(item.dataset.required === '1' && !item.dataset.answer) allAnswered = false;
    });
    btn.disabled = !allAnswered;
  }

  btn.addEventListener('click', function(){
    var allYes = true;
    items.forEach(function(item){
      if(item.dataset.required === '1' && item.dataset.answer !== 'yes') allYes = false;
    });
    result.style.display = 'block';
    if(allYes){
      result.className = 'candidate-result candidate-pass';
      result.innerHTML = '<div class="candidate-result-icon" style="color:var(--accent);">' + '<?php echo cfl_icon("check"); ?>' + '</div>' +
        '<h3>You May Be a Good Candidate!</h3>' +
        '<p>Based on your answers, you appear to meet the basic eligibility criteria. Book a free consultation for a comprehensive assessment with our specialists.</p>' +
        '<a href="#consultation" class="btn btn-primary">Book Free Consultation</a>';
    } else {
      result.className = 'candidate-result candidate-fail';
      result.innerHTML = '<div class="candidate-result-icon" style="color:var(--destructive);">' + '<?php echo cfl_icon("x"); ?>' + '</div>' +
        '<h3>You May Need Further Evaluation</h3>' +
        '<p>Some of your answers suggest you may not be an ideal candidate at this time. We recommend booking a consultation for a thorough evaluation — there may still be options for you.</p>' +
        '<a href="#consultation" class="btn btn-outline">Speak to a Specialist</a>';
    }
  });
})();
</script>

<?php get_footer(); ?>
