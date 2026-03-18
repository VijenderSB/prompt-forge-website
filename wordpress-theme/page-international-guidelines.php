<?php
/**
 * Template Name: International Guidelines
 */
get_header();

$guidelines = [
    ['org' => 'US FDA (Food & Drug Administration)', 'country' => 'United States', 'icon' => '🛡️',
     'summary' => 'The US FDA approved LASIK in 1999 and classifies excimer lasers as Class III medical devices. FDA mandates pre-market approval (PMA), rigorous clinical trials, adverse event reporting, and informed consent.',
     'points' => ['All laser devices require PMA with extensive clinical trial data','Minimum age: 18 years; stable prescription for 12 months','Mandatory adverse event reporting through MedWatch system','Post-market surveillance studies required for all approved devices','FDA-approved platforms: WaveLight EX500, VisuMax 800, elita™, MEL 90']],
    ['org' => 'WHO (World Health Organization)', 'country' => 'Global', 'icon' => '🌍',
     'summary' => 'The WHO recognizes refractive error as a leading cause of visual impairment affecting 2.7 billion people globally. WHO\'s Vision 2020 initiative includes refractive correction through refractive surgery as a key intervention.',
     'points' => ['Refractive error is the #1 cause of correctable visual impairment worldwide','Refractive surgery included in Vision 2020: The Right to Sight initiative','Recommends surgery only by qualified ophthalmologists in accredited facilities','Emphasizes informed consent and patient counseling','Supports accessibility of refractive correction in developing nations']],
    ['org' => 'AAO (American Academy of Ophthalmology)', 'country' => 'United States', 'icon' => '📋',
     'summary' => 'The AAO publishes Preferred Practice Patterns for refractive surgery. AAO recommends comprehensive pre-operative evaluation including corneal topography, pachymetry, wavefront analysis, and dry eye assessment.',
     'points' => ['Preferred Practice Patterns updated every 3–5 years with latest evidence','Minimum residual stromal bed: 250μm after ablation','Contraindicated in keratoconus, autoimmune disorders, uncontrolled diabetes','Pre-op must include topography, pachymetry, wavefront, and dry eye evaluation','Surgeon must have fellowship-level training in refractive surgery']],
    ['org' => 'ESCRS (European Society of Cataract and Refractive Surgeons)', 'country' => 'Europe', 'icon' => '🏆',
     'summary' => 'ESCRS provides evidence-based clinical guidelines and conducts the largest annual refractive surgery survey in Europe. Endorses topography-guided treatments and validates lenticule extraction.',
     'points' => ['Endorses topography-guided ablation for best visual quality outcomes','Validates SMILE/lenticule extraction as equivalent to LASIK for myopia','Recommends femtosecond laser flap creation over mechanical microkeratome','Annual survey tracks outcomes from 500,000+ procedures across Europe','Guidelines for surgeon certification and facility accreditation']],
    ['org' => 'AIOS (All India Ophthalmological Society)', 'country' => 'India', 'icon' => '🇮🇳',
     'summary' => 'AIOS, with 20,000+ members, sets national standards for refractive surgery in India. Guidelines address Indian-specific considerations like higher astigmatism prevalence and thinner corneas.',
     'points' => ['Guidelines address Indian-specific corneal parameters (thinner average corneas)','Recommends topography-guided treatments for higher astigmatism prevalence','Post-op protocols account for tropical climate and dust exposure','Mandatory NABH accreditation for refractive surgery centres','Annual National Refractive Surgery Survey for outcome benchmarking']],
    ['org' => 'NICE (National Institute for Health and Care Excellence)', 'country' => 'United Kingdom', 'icon' => '📋',
     'summary' => 'NICE evaluates refractive surgery technologies for the UK\'s NHS. Confirms LASIK is safe and efficacious, and classifies SMILE as a safe alternative.',
     'points' => ['IPG164: LASIK is safe and efficacious — normal arrangements for consent apply','IPG616: SMILE is safe for myopia — no special safety concerns','Recommends audit of patient outcomes by all refractive surgery providers','Informed consent must cover alternatives, risks, and realistic expectations','Supports shared decision-making between surgeon and patient']],
];

$safety_stats = [
    ['stat' => '99.5%', 'label' => 'Patient Satisfaction Rate (FDA PROWL Study)'],
    ['stat' => '40M+', 'label' => 'LASIK Procedures Performed Globally'],
    ['stat' => '25+ Years', 'label' => 'Track Record Since FDA Approval (1999)'],
    ['stat' => '<0.1%', 'label' => 'Serious Complication Rate'],
];

$compliance = [
    ['title' => 'FDA-Approved Platforms Only', 'desc' => 'We use only FDA-approved laser systems: WaveLight EX500/EX800, Carl Zeiss VisuMax 800, and J&J elita™.'],
    ['title' => 'AAO Pre-Op Protocol', 'desc' => 'Our free 90-minute diagnostic follows AAO Preferred Practice Patterns: Pentacam, topography, pachymetry, wavefront, dry eye assessment.'],
    ['title' => 'ESCRS Outcome Tracking', 'desc' => "Every patient's outcomes are tracked and benchmarked against ESCRS annual survey data."],
    ['title' => 'AIOS-Compliant Facility', 'desc' => 'All centres meet AIOS and NABH accreditation standards with climate-controlled surgical suites.'],
    ['title' => 'WHO-Aligned Access', 'desc' => 'Starting at ₹8,999/eye with EMI from ₹750/month — making vision correction accessible per WHO Vision 2020 goals.'],
    ['title' => 'NICE Informed Consent', 'desc' => 'We follow NICE shared decision-making guidelines with comprehensive written consent and realistic expectations.'],
];
?>

<!-- Hero -->
<section class="section-padding" style="background:linear-gradient(180deg,var(--bg-surface),var(--bg-main));">
    <div class="container" style="max-width:1140px;">
        <div style="display:grid;grid-template-columns:3fr 2fr;gap:40px;align-items:start;" class="grid-2col-lg">
            <div>
                <span style="display:inline-block;font-size:0.75rem;font-weight:600;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:4px 12px;border-radius:999px;margin-bottom:16px;">International Standards</span>
                <h1 class="font-display" style="font-weight:700;font-size:clamp(1.8rem,4vw,3rem);color:var(--text-primary);margin-bottom:16px;">
                    LASIK Safety: Global Guidelines & Regulatory Standards
                </h1>
                <p style="color:var(--text-muted);font-size:1.1rem;margin-bottom:24px;">
                    Every LASIK procedure at Centre for Lasik follows guidelines set by the world's top regulatory bodies — FDA, WHO, AAO, ESCRS, AIOS, and NICE.
                </p>
                <div class="grid-4col">
                    <?php foreach ($safety_stats as $s): ?>
                        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;">
                            <p class="font-display" style="font-weight:700;font-size:1.5rem;color:var(--accent);"><?php echo $s['stat']; ?></p>
                            <p style="font-size:0.7rem;color:var(--text-muted);margin-top:4px;"><?php echo $s['label']; ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Guidelines -->
<section class="section-padding">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">What Global Authorities Say About LASIK</h2>
        <p class="section-subheading">Evidence-based guidelines from six leading regulatory and medical organizations worldwide</p>
        <?php foreach ($guidelines as $g): ?>
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:24px 32px;margin-bottom:32px;">
                <div style="display:flex;align-items:flex-start;gap:16px;margin-bottom:16px;">
                    <span style="font-size:2rem;"><?php echo $g['icon']; ?></span>
                    <div>
                        <h3 class="font-display" style="font-weight:700;font-size:1.1rem;color:var(--text-primary);"><?php echo esc_html($g['org']); ?></h3>
                        <span style="font-size:0.75rem;color:var(--text-muted);"><?php echo esc_html($g['country']); ?></span>
                    </div>
                </div>
                <p style="color:var(--text-muted);font-size:0.85rem;line-height:1.7;margin-bottom:16px;"><?php echo esc_html($g['summary']); ?></p>
                <?php foreach ($g['points'] as $pt): ?>
                    <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;">
                        <span style="color:var(--accent);flex-shrink:0;">✓</span>
                        <span style="font-size:0.85rem;color:var(--text-primary);"><?php echo esc_html($pt); ?></span>
                    </div>
                <?php endforeach; ?>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Compliance -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">How Centre for Lasik Meets Global Standards</h2>
        <p class="section-subheading">Our commitment to exceeding international safety benchmarks</p>
        <div class="grid-2col">
            <?php foreach ($compliance as $item): ?>
                <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px;">
                    <h4 class="font-display" style="font-weight:700;font-size:0.85rem;color:var(--text-primary);margin-bottom:8px;"><?php echo esc_html($item['title']); ?></h4>
                    <p style="font-size:0.85rem;color:var(--text-muted);"><?php echo esc_html($item['desc']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="section-padding" style="background:var(--primary);">
    <div class="container" style="max-width:720px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:clamp(1.3rem,3vw,1.8rem);color:var(--primary-foreground);margin-bottom:12px;">Your Eyes Deserve Global-Standard Care</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Book a free consultation and experience LASIK that meets FDA, WHO, and AAO guidelines.</p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
