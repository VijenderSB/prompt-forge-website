<?php
/**
 * Template Name: Front Page (One-Page Scroll)
 *
 * Homepage template — matches the React design exactly.
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();

$hero_heading = esc_html( cfl_get( 'cfl_hero_heading', 'See the World Without Glasses' ) );
$hero_text    = esc_html( cfl_get( 'cfl_hero_text', 'Just 10 minutes to crystal-clear vision. Safe, painless, and trusted by millions worldwide. Starting at just ₹8,999 per eye.' ) );
$hero_bg      = esc_url( cfl_get( 'cfl_hero_bg', get_template_directory_uri() . '/assets/images/hero-lasik.png' ) );
?>

<!-- ═══════════════════════════════════════════════ -->
<!-- HERO SECTION                                    -->
<!-- ═══════════════════════════════════════════════ -->
<section class="hero" id="hero">
  <div class="hero-bg">
    <img src="<?php echo $hero_bg; ?>" alt="Happy patient after LASIK eye surgery" loading="eager">
    <div class="hero-overlay"></div>
  </div>
  <div class="container">
    <div>
      <div class="hero-badge">
        <?php echo cfl_icon( 'eye' ); ?> WaveLight Plus InnovEyes
      </div>
      <h1><?php echo $hero_heading; ?></h1>
      <p class="hero-text"><?php echo $hero_text; ?></p>

      <!-- Social Proof -->
      <div class="hero-social-proof">
        <div class="avatar-stack">
          <span>K</span><span>S</span><span>H</span><span>P</span>
        </div>
        <div class="social-text">
          <strong>Trusted by 10L+ patients</strong><br>
          97% satisfaction rate
        </div>
      </div>
    </div>

    <!-- Consultation Form -->
    <div class="consultation-form-card" id="consultation">
      <h3>Book Free Consultation</h3>
      <p class="form-subtitle">Get a callback within 30 minutes</p>
      <?php
      // If Contact Form 7 or WPForms is active, use shortcode:
      // echo do_shortcode('[contact-form-7 id=\"123\"]');
      // Otherwise, display a static HTML form:
      ?>
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
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- PROCEDURES SECTION                              -->
<!-- ═══════════════════════════════════════════════ -->
<section class="section-padding" id="procedures">
  <div class="container">
    <span class="section-label">Our Procedures</span>
    <div class="section-heading centered">
      <h2>Advanced Vision Correction Technologies</h2>
      <p>5 globally trusted procedures — from topography-guided LASIK to next-gen flapless lenticule surgery. All US-FDA approved.</p>
    </div>

    <div class="procedures-grid">
      <?php
      /*
       * ACF Repeater: If using ACF, create a repeater field called 'procedures'.
       * Otherwise, use this static data (matching your React PROCEDURES array).
       */
      $procedures = array(
          array( 'name' => 'Standard LASIK', 'price' => '₹8,999', 'discount' => '40% OFF', 'tagline' => 'Affordable bladeless laser vision correction — proven & trusted', 'features' => array( 'Most Affordable', 'Proven Technology', 'Quick Procedure', 'EMI from ₹750/mo' ), 'badge' => 'Value', 'class' => '' ),
          array( 'name' => 'WaveLight Plus InnovEyes', 'price' => '₹49,000', 'discount' => '30% OFF', 'tagline' => 'AI-guided 400 Hz — 1,050 eye-tracking points per second', 'features' => array( 'PerfectPulse Technology®', '400 Hz High-Speed', '6D Eye Tracking', 'Personalised Ablation' ), 'badge' => 'Premium', 'class' => 'premium' ),
          array( 'name' => 'HD Contoura Vision', 'price' => '₹25,500', 'discount' => '40% OFF', 'tagline' => 'Topography-guided — 22,000 unique corneal data points', 'features' => array( '6/4 Super Sharp Vision', 'No Halos, No Glare', 'Topography-Guided', 'Visual Axis Treatment' ), 'badge' => 'Most Popular', 'class' => 'highlighted' ),
          array( 'name' => 'EPI LASIK', 'price' => '₹18,000', 'discount' => '40% OFF', 'tagline' => 'Non-detectable laser vision correction — no flap, no cut', 'features' => array( 'No Flap Created', 'Structurally Safest', 'Thin Cornea Friendly', 'Armed Forces Approved' ), 'badge' => '', 'class' => '' ),
          array( 'name' => 'SiLK', 'price' => '₹75,000', 'discount' => '20% OFF', 'tagline' => 'Premium lenticule — ultra-smooth stromal bed, best night vision', 'features' => array( 'Ultra-Smooth Stromal Bed', 'Sub-2mm Incision', 'Least Biomechanical Impact', 'Best Night Vision' ), 'badge' => 'Latest Tech', 'class' => '' ),
          array( 'name' => 'SMILE Pro', 'price' => '₹65,000', 'discount' => '20% OFF', 'tagline' => 'Flapless lenticule — 2mm incision, minimal dry eye', 'features' => array( 'Flapless — No Flap', '2mm Micro-Incision', 'Minimal Dry Eye', 'Thin Cornea Friendly' ), 'badge' => '', 'class' => '' ),
      );

      foreach ( $procedures as $proc ) :
      ?>
        <div class="procedure-card card-elevated <?php echo esc_attr( $proc['class'] ); ?>">
          <?php if ( $proc['badge'] ) : ?>
            <div class="procedure-badge"><?php echo esc_html( $proc['badge'] ); ?></div>
          <?php endif; ?>
          <h3><?php echo esc_html( $proc['name'] ); ?></h3>
          <div class="procedure-price">
            <span class="price"><?php echo esc_html( $proc['price'] ); ?></span>
            <span class="per-eye">/ eye</span>
            <span class="discount-badge"><?php echo esc_html( $proc['discount'] ); ?></span>
          </div>
          <p class="procedure-tagline"><?php echo esc_html( $proc['tagline'] ); ?></p>
          <ul class="procedure-features">
            <?php foreach ( $proc['features'] as $feature ) : ?>
              <li><?php echo esc_html( $feature ); ?></li>
            <?php endforeach; ?>
          </ul>
          <a href="#consultation" class="btn <?php echo $proc['class'] === 'premium' ? 'btn-white' : 'btn-outline'; ?>">
            Get Quote <?php echo cfl_icon( 'arrow-right' ); ?>
          </a>
        </div>
      <?php endforeach; ?>
    </div>

    <!-- Trust badges -->
    <div class="procedures-trust">
      <?php
      $badges = array( 'US-FDA approved platforms', '97% satisfaction rate', 'Free 90-minute evaluation', 'Both eyes treated same day', 'EMI from ₹1,500/mo' );
      foreach ( $badges as $badge ) :
      ?>
        <span><span class="check-icon"><?php echo cfl_icon( 'check' ); ?></span> <?php echo esc_html( $badge ); ?></span>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- STATS BAR                                       -->
<!-- ═══════════════════════════════════════════════ -->
<section class="stats-bar">
  <div class="container">
    <div class="stats-grid">
      <?php
      $stats = array(
          array( 'icon' => 'users', 'value' => '10L+', 'label' => 'Happy Patients' ),
          array( 'icon' => 'award', 'value' => '97%', 'label' => 'Satisfaction Rate' ),
          array( 'icon' => 'clock', 'value' => '10 min', 'label' => 'Procedure Time' ),
          array( 'icon' => 'shield', 'value' => '25+', 'label' => 'Years Experience' ),
      );
      foreach ( $stats as $stat ) :
      ?>
        <div class="stat-item">
          <div class="stat-icon"><?php echo cfl_icon( $stat['icon'] ); ?></div>
          <p class="stat-value"><?php echo esc_html( $stat['value'] ); ?></p>
          <p class="stat-label"><?php echo esc_html( $stat['label'] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- USP FULL SECTION                                -->
<!-- ═══════════════════════════════════════════════ -->
<section class="usp-full section-padding" id="about">
  <div class="container">
    <span class="section-label">India's #1 LASIK Platform</span>
    <div class="section-heading centered">
      <h2>The Smartest Way to Get Laser Vision Correction</h2>
      <p>Think of us as your <strong>VIP pass to premium LASIK surgery</strong>. Centre for Lasik is the world's largest digital aggregator for laser eye surgery — connecting you with top surgeons and FDA-approved technology at <strong>exclusive volume-discounted rates</strong> across 50+ centres nationwide.</p>
    </div>

    <div class="usp-cards">
      <?php
      $usps = array(
          array( 'icon' => 'globe', 'title' => "World's Largest Platform", 'desc' => "India's only digital aggregator for laser vision correction — 50+ premium centres, 6 FDA-approved technologies, PAN India." ),
          array( 'icon' => 'percent', 'title' => 'VIP Volume-Discount Rates', 'desc' => 'Our patient volume unlocks institutional pricing at top centres. Same surgeon, same technology — up to 30% less than walk-in MRP.' ),
          array( 'icon' => 'shield-check', 'title' => 'Zero Compromise on Quality', 'desc' => 'Every centre is vetted. Every surgeon has 20+ years experience. Every platform is US-FDA approved. You just pay less.' ),
      );
      foreach ( $usps as $usp ) :
      ?>
        <div class="usp-card card-elevated">
          <div class="usp-card-icon"><?php echo cfl_icon( $usp['icon'] ); ?></div>
          <h3><?php echo esc_html( $usp['title'] ); ?></h3>
          <p><?php echo esc_html( $usp['desc'] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>

    <div class="text-center">
      <a href="#why-us" style="font-size:0.875rem;font-weight:600;color:var(--primary);">
        Learn how our aggregator model saves you up to 30% <?php echo cfl_icon( 'arrow-right' ); ?>
      </a>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- WHY CHOOSE US                                   -->
<!-- ═══════════════════════════════════════════════ -->
<section class="why-us section-padding" id="why-us">
  <div class="container">
    <span class="section-label">Why Choose Us</span>
    <div class="section-heading centered">
      <h2>Your Vision, Our Expertise</h2>
      <p>20+ years of experience. 10L+ happy patients. Every technology under one roof.</p>
    </div>

    <div class="why-us-grid">
      <?php
      $points = array(
          array( 'icon' => 'zap', 'title' => 'WaveLight Plus InnovEyes', 'desc' => 'AI-guided laser with PerfectPulse Technology® — 400 Hz speed, 1,050 eye-tracking points per second for sub-micron precision.' ),
          array( 'icon' => 'eye', 'title' => 'SMILE Pro & SiLK', 'desc' => 'Flapless lenticule-based surgery — no corneal flap, 2mm incision, minimal dry eye, fastest recovery.' ),
          array( 'icon' => 'shield', 'title' => 'US-FDA Approved Tech', 'desc' => 'All platforms are US-FDA approved. Over 10,00,000 procedures performed since 2004 with 97% satisfaction rate.' ),
          array( 'icon' => 'award', 'title' => 'Expert Surgeons', 'desc' => 'Refractive surgeons with 20+ years of experience across all flap-based and lenticule-based technologies.' ),
          array( 'icon' => 'stethoscope', 'title' => 'Free 90-Min Evaluation', 'desc' => 'Pentacam, Topography, Aberrometry, Pachymetry — full diagnostic before any commitment, at no cost.' ),
          array( 'icon' => 'heart', 'title' => 'Painless & Quick', 'desc' => 'Just 10 minutes per eye with zero pain. Both eyes same day. Walk in with glasses, walk out without.' ),
          array( 'icon' => 'badge', 'title' => 'Armed Forces Approved', 'desc' => 'EPI LASIK is the preferred procedure for armed forces candidates — non-detectable, structurally safest, no flap.' ),
          array( 'icon' => 'trending', 'title' => 'EMI from ₹1,500/mo', 'desc' => 'Affordable EMI options through major banks. No-cost EMI on select cards. No hidden charges — all inclusive pricing.' ),
      );
      foreach ( $points as $point ) :
      ?>
        <div class="why-card card-elevated">
          <div class="why-card-icon"><?php echo cfl_icon( $point['icon'] ); ?></div>
          <h3><?php echo esc_html( $point['title'] ); ?></h3>
          <p><?php echo esc_html( $point['desc'] ); ?></p>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- TESTIMONIALS                                    -->
<!-- ═══════════════════════════════════════════════ -->
<section class="section-padding" id="testimonials">
  <div class="container">
    <span class="section-label">Patient Stories</span>
    <div class="section-heading centered">
      <h2>Life After LASIK</h2>
      <p>Real experiences from patients who chose to see the world differently.</p>
    </div>

    <div class="testimonials-grid">
      <?php
      /*
       * ACF Repeater: If using ACF, create a repeater field called 'testimonials'.
       * Otherwise, static data from your React TESTIMONIALS array:
       */
      $testimonials = array(
          array( 'text' => 'I was scared of surgery but it was completely painless. 10 minutes and done — I can see clearly without glasses for the first time in 15 years!', 'name' => 'Kavita Sharma', 'city' => 'Delhi', 'age' => 28, 'rating' => 5 ),
          array( 'text' => 'Got Contoura Vision done — the night vision improvement is remarkable. No more halos while driving. Best decision of my life.', 'name' => 'Suresh Patel', 'city' => 'Mumbai', 'age' => 34, 'rating' => 5 ),
          array( 'text' => 'As a cricketer, I needed something flapless. SMILE Pro was perfect — back to practice in 3 days with better vision than I ever had with contacts.', 'name' => 'Harsh Vardhan', 'city' => 'Bangalore', 'age' => 25, 'rating' => 5 ),
          array( 'text' => 'The EMI option made it so affordable. Paying ₹1,500/month for something that changed my life completely. Should have done it years ago.', 'name' => 'Priya Menon', 'city' => 'Chennai', 'age' => 31, 'rating' => 5 ),
          array( 'text' => 'I was not eligible for regular LASIK due to thin corneas. They recommended EPI LASIK — it worked perfectly. 6/6 vision now.', 'name' => 'Rohit Gupta', 'city' => 'Noida', 'age' => 29, 'rating' => 5 ),
          array( 'text' => 'The pre-surgery evaluation itself was worth it — they did 12 tests in 90 minutes. Very thorough and professional team.', 'name' => 'Ananya Singh', 'city' => 'Gurgaon', 'age' => 27, 'rating' => 5 ),
      );
      foreach ( $testimonials as $t ) :
      ?>
        <div class="testimonial-card card-elevated">
          <div class="testimonial-quote">"</div>
          <p class="testimonial-text">"<?php echo esc_html( $t['text'] ); ?>"</p>
          <div class="testimonial-footer">
            <div class="testimonial-author">
              <div class="testimonial-avatar"><?php echo esc_html( mb_substr( $t['name'], 0, 1 ) ); ?></div>
              <div>
                <p class="testimonial-name"><?php echo esc_html( $t['name'] ); ?></p>
                <p class="testimonial-meta"><?php echo esc_html( $t['city'] ); ?> · Age <?php echo esc_html( $t['age'] ); ?></p>
              </div>
            </div>
            <div class="testimonial-stars">
              <?php for ( $i = 0; $i < $t['rating']; $i++ ) echo cfl_icon( 'star' ); ?>
            </div>
          </div>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- CTA WITH FORM                                   -->
<!-- ═══════════════════════════════════════════════ -->
<section class="cta-form-section section-padding">
  <div class="container">
    <div class="cta-form-grid">
      <div class="cta-form-text">
        <span class="section-label">Get Started Today</span>
        <h2>Ready to Ditch Your Glasses?</h2>
        <p>Fill in your details and our LASIK specialist will call you within 30 minutes to answer all your questions and help you choose the right procedure.</p>
        <ul class="cta-checklist">
          <li>100% Free consultation</li>
          <li>No-obligation evaluation</li>
          <li>EMI options available</li>
        </ul>
      </div>
      <div class="consultation-form-card">
        <h3>Get Your Free LASIK Evaluation</h3>
        <p class="form-subtitle">Our specialist will call you within 30 minutes</p>
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

<!-- ═══════════════════════════════════════════════ -->
<!-- EXPERT INSIGHTS                                 -->
<!-- ═══════════════════════════════════════════════ -->
<section class="expert-insights section-padding" id="expert-insights">
  <div class="container">
    <span class="section-label">Expert Insights</span>
    <div class="section-heading centered">
      <h2>Best LASIK Eye Surgery in India</h2>
    </div>

    <div class="expert-grid">
      <div>
        <p><strong>Centre For Lasik</strong> has performed over <strong>10,00,000 LASIK procedures since 2004</strong>, maintaining a 97% patient satisfaction rate across both flap-based and lenticule-based technologies. Our facilities in Delhi, Noida, and Gurgaon offer every clinically validated vision correction platform available in India — from HD Contoura Vision at ₹25,500/eye to premium SiLK lenticule surgery at ₹75,000/eye.</p>
        <p>India is one of the world's fastest-growing LASIK markets, with over 5 lakh procedures performed annually across 3,700+ cities. As costs decrease and technology improves, more patients are choosing laser vision correction over a lifetime of glasses and contact lenses.</p>
        <h3>LASIK Technologies Available in India (2026)</h3>
        <p>The five primary technologies offered at our centres are <strong>WaveLight Plus InnovEyes</strong> (AI-guided, 400 Hz PerfectPulse), <strong>HD Contoura Vision</strong> (22,000-point topography-guided), <strong>EPI LASIK</strong> (non-detectable surface ablation for armed forces), <strong>SiLK</strong> (ultra-smooth lenticule by J&amp;J), and <strong>SMILE Pro</strong> (flapless by Carl Zeiss).</p>
      </div>
      <div>
        <h3>Which Technology Is Right for You?</h3>
        <ul class="expert-list">
          <li><span class="dot"></span><span><strong>Active lifestyle / sports / thin corneas:</strong> SMILE Pro or SiLK — flapless, no dry eye risk, fastest recovery.</span></li>
          <li><span class="dot"></span><span><strong>Corneal irregularities / astigmatism:</strong> HD Contoura Vision — 22,000 elevation points for personalized correction.</span></li>
          <li><span class="dot"></span><span><strong>Best AI-guided flap-based precision:</strong> WaveLight Plus InnovEyes — PerfectPulse® tracks 1,050x/sec.</span></li>
          <li><span class="dot"></span><span><strong>Armed forces / contact sports:</strong> EPI LASIK — non-detectable, no flap, structurally safest.</span></li>
          <li><span class="dot"></span><span><strong>Best night vision &amp; latest technology:</strong> SiLK by Johnson &amp; Johnson — ultra-smooth stromal bed, sub-2mm incision.</span></li>
        </ul>
        <h3>LASIK Cost in India — City-Wise Guide</h3>
        <p>LASIK pricing varies across cities: Delhi NCR (₹18,000–₹75,000/eye), Mumbai (₹20,000–₹80,000/eye), Bangalore (₹22,000–₹85,000/eye). At Centre For Lasik, our prices are fixed and transparent — no hidden charges. All packages include pre-surgery diagnostics, the procedure, medications, and follow-up visits. EMI from ₹1,500/month.</p>
        <p><a href="#consultation">Book your free 90-minute evaluation today</a> — our diagnostic tests alone are worth ₹4,000+.</p>
      </div>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- FAQ SECTION                                     -->
<!-- ═══════════════════════════════════════════════ -->
<section class="section-padding" id="faq">
  <div class="container">
    <span class="section-label">Got Questions?</span>
    <div class="section-heading centered">
      <h2>Frequently Asked Questions</h2>
      <p>Everything you need to know about LASIK eye surgery — technologies, eligibility, cost, and recovery.</p>
    </div>

    <div class="faq-grid">
      <?php
      $faqs = array(
          array( 'q' => 'What is WaveLight Plus InnovEyes LASIK?', 'a' => 'WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser platform. Its PerfectPulse Technology® tracks your eye position 1,050 times per second at 400 Hz speed.' ),
          array( 'q' => 'What is HD Contoura Vision?', 'a' => 'HD Contoura Vision uses 22,000-point topographic mapping to create a fully personalized ablation profile. It treats on the visual axis for potentially better-than-6/6 vision.' ),
          array( 'q' => 'What is EPI LASIK?', 'a' => 'EPI LASIK is a non-detectable surface ablation procedure — no flap is created. The corneal structure remains intact, making it safest for thin corneas and armed forces candidates.' ),
          array( 'q' => 'Am I eligible for LASIK?', 'a' => 'Most adults aged 18+ with a stable prescription are eligible. LASIK corrects myopia -0.5D to -12D, hyperopia +0.5D to +6D, and astigmatism up to 6D. Our free 90-minute evaluation confirms eligibility.' ),
          array( 'q' => 'Is LASIK painful?', 'a' => 'No. Anaesthetic eye drops are applied before the procedure. You feel zero pain — most patients describe a mild pressure sensation lasting only a few seconds.' ),
          array( 'q' => 'How much does LASIK cost in India?', 'a' => 'LASIK costs: Standard LASIK ₹8,999/eye, EPI LASIK ₹18,000/eye, HD Contoura Vision ₹25,500/eye, WaveLight InnovEyes ₹49,000/eye, SiLK ₹75,000/eye. All inclusive.' ),
          array( 'q' => 'What is the recovery time after LASIK?', 'a' => 'Day 1: Vision 80–90% clear. Day 2–3: Return to desk work. Day 7: Drive, light activity. Month 1: Vision fully stabilising. Month 3–6: Final stable vision.' ),
          array( 'q' => 'Do you offer EMI for LASIK surgery?', 'a' => 'Yes, EMI options available from ₹1,500/month through major banks. No-cost EMI available on select bank cards.' ),
          array( 'q' => 'Can both eyes be treated on the same day?', 'a' => 'Yes. Both eyes are treated in the same session. The entire procedure typically takes 15–20 minutes for both eyes.' ),
          array( 'q' => 'Will I need glasses after LASIK?', 'a' => 'Over 99% of patients achieve 6/6 (20/20) vision or better. Reading glasses may be needed after age 40–45 due to presbyopia — a natural ageing process unrelated to LASIK.' ),
      );

      $half = ceil( count( $faqs ) / 2 );
      $columns = array( array_slice( $faqs, 0, $half ), array_slice( $faqs, $half ) );

      foreach ( $columns as $col_idx => $column ) :
      ?>
        <div>
          <?php foreach ( $column as $i => $faq ) : ?>
            <div class="faq-item" data-faq>
              <button class="faq-question" aria-expanded="false">
                <?php echo esc_html( $faq['q'] ); ?>
                <span class="chevron"><?php echo cfl_icon( 'chevron' ); ?></span>
              </button>
              <div class="faq-answer">
                <?php echo esc_html( $faq['a'] ); ?>
              </div>
            </div>
          <?php endforeach; ?>
        </div>
      <?php endforeach; ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- BLOG PREVIEW                                    -->
<!-- ═══════════════════════════════════════════════ -->
<section class="section-padding" id="blog">
  <div class="container">
    <span class="section-label">Resources</span>
    <div class="section-heading centered">
      <h2>Latest from Our Blog</h2>
      <p>Expert articles on LASIK technology, costs, recovery, and eligibility.</p>
    </div>

    <div class="blog-grid">
      <?php
      // Pull latest 3 posts from WordPress
      $blog_query = new WP_Query( array(
          'posts_per_page' => 3,
          'post_status'    => 'publish',
      ) );

      if ( $blog_query->have_posts() ) :
          while ( $blog_query->have_posts() ) : $blog_query->the_post();
      ?>
        <a href="<?php the_permalink(); ?>" class="blog-card card-elevated">
          <div class="blog-card-body">
            <div class="blog-card-meta">
              <?php
              $categories = get_the_category();
              if ( ! empty( $categories ) ) :
              ?>
                <span class="blog-category"><?php echo esc_html( $categories[0]->name ); ?></span>
              <?php endif; ?>
              <span class="blog-date"><?php echo get_the_date( 'Y-m-d' ); ?></span>
            </div>
            <h3><?php the_title(); ?></h3>
            <p><?php echo wp_trim_words( get_the_excerpt(), 20, '...' ); ?></p>
            <span class="blog-read-more">Read article <?php echo cfl_icon( 'arrow-right' ); ?></span>
          </div>
        </a>
      <?php
          endwhile;
          wp_reset_postdata();
      else :
          // Fallback static content if no posts exist yet
          $static_posts = array(
              array( 'title' => 'Contoura Vision Explained: How 22,000-Point Mapping Transforms Your Vision', 'excerpt' => 'Understanding the advanced topographic technology behind India\'s most popular LASIK procedure.', 'cat' => 'LASIK Technology', 'date' => '2026-03-10' ),
              array( 'title' => 'LASIK Risks & Complications: What the Data Actually Shows', 'excerpt' => 'A transparent look at LASIK safety statistics, side effects, and how modern technology minimizes risk.', 'cat' => 'Safety & Risk', 'date' => '2026-03-08' ),
              array( 'title' => 'How Much Does LASIK Cost in India in 2026?', 'excerpt' => 'Complete pricing breakdown for all LASIK procedures, EMI options, and insurance coverage.', 'cat' => 'LASIK Cost', 'date' => '2026-03-05' ),
          );
          foreach ( $static_posts as $post ) :
      ?>
        <div class="blog-card card-elevated">
          <div class="blog-card-body">
            <div class="blog-card-meta">
              <span class="blog-category"><?php echo esc_html( $post['cat'] ); ?></span>
              <span class="blog-date"><?php echo esc_html( $post['date'] ); ?></span>
            </div>
            <h3><?php echo esc_html( $post['title'] ); ?></h3>
            <p><?php echo esc_html( $post['excerpt'] ); ?></p>
            <span class="blog-read-more">Read article <?php echo cfl_icon( 'arrow-right' ); ?></span>
          </div>
        </div>
      <?php
          endforeach;
      endif;
      ?>
    </div>
  </div>
</section>

<!-- ═══════════════════════════════════════════════ -->
<!-- BOTTOM CTA BANNER                               -->
<!-- ═══════════════════════════════════════════════ -->
<section class="cta-banner section-padding">
  <div class="container" style="max-width:48rem;">
    <h2>Ready to Ditch Your Glasses?</h2>
    <p>Fill in your details and our LASIK specialist will call you within 30 minutes to answer all your questions and help you choose the right procedure.</p>
    <div class="cta-actions">
      <a href="#consultation" class="btn btn-white btn-lg">Book Free Consultation</a>
      <a href="tel:<?php echo esc_attr( cfl_get( 'cfl_phone', '+91-9667770450' ) ); ?>" class="cta-phone">
        <?php echo cfl_icon( 'phone' ); ?>
        <?php echo esc_html( cfl_get( 'cfl_phone_display', '+91-96677 70450' ) ); ?>
      </a>
    </div>
  </div>
</section>

<?php get_footer(); ?>
