<?php
/**
 * Template Name: Why Us
 */
get_header();

$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$brand = $site['brand'];
$testimonials = $site['testimonials'];

$hero_bullets = [
    "World's largest digital platform for Laser Vision Correction",
    "VIP volume-discount rates at 50+ premium centres PAN India",
    "Same surgeon, same technology — up to 30% less",
];

$how_it_works = [
    ['step'=>'01','icon'=>'🌐','title'=>'We Aggregate the Best','desc'=>'We partner with top-tier LASIK centres across every major Indian city — vetting their surgeons, technology, and outcomes before they join the platform.'],
    ['step'=>'02','icon'=>'💰','title'=>'Volume = Your Savings','desc'=>'Because we bring thousands of patients every month, centres offer us exclusive institutional pricing — savings we pass directly to you.'],
    ['step'=>'03','icon'=>'👑','title'=>'You Get VIP Access','desc'=>'Same world-class surgeon. Same FDA-approved laser. Same premium centre. You simply pay less — with priority scheduling and dedicated care coordination.'],
];

$value_props = [
    ['icon'=>'⚡','title'=>'6 Laser Technologies','desc'=>'From ₹8,999 Standard LASIK to ₹75,000 SiLK — every FDA-approved platform under one roof.'],
    ['icon'=>'👁️','title'=>'Up to 30% Volume Discount','desc'=>'Our institutional partnerships mean you access the same procedure at significantly lower cost.'],
    ['icon'=>'📍','title'=>'50+ Centres, All Major Cities','desc'=>'Delhi, Mumbai, Bangalore, Hyderabad, Chennai, Pune, Kolkata — premium LASIK centres near you.'],
    ['icon'=>'🛡️','title'=>'100% US-FDA Approved','desc'=>'Every laser platform — WaveLight InnovEyes, SMILE Pro, SiLK, Contoura Vision — carries full US-FDA approval.'],
    ['icon'=>'🏆','title'=>'Surgeons with 20+ Years','desc'=>'We only partner with refractive surgeons who have performed 10,000+ procedures.'],
    ['icon'=>'🩺','title'=>'Free 90-Min Diagnostic','desc'=>'Pentacam, Topography, Aberrometry, Pachymetry — comprehensive pre-op evaluation at zero cost.'],
    ['icon'=>'❤️','title'=>'Painless, 10-Minute Procedure','desc'=>'Walk in with glasses, walk out without. Both eyes same day. Return to work within 24–48 hours.'],
    ['icon'=>'🏢','title'=>'Transparent, Fixed Pricing','desc'=>'No hidden charges, no upselling. The price you see is the price you pay — with EMI options from ₹750/month.'],
];

$comparison_rows = [
    ['feature'=>'Average LASIK Cost','us'=>'Up to 30% lower (volume rates)','others'=>'Full retail / MRP pricing'],
    ['feature'=>'Technology Options','us'=>'6 FDA-approved platforms','others'=>'1–2 platforms typically'],
    ['feature'=>'Surgeon Vetting','us'=>'20+ yrs, 10K+ procedures required','others'=>'Varies widely'],
    ['feature'=>'Pre-Op Diagnostic','us'=>'Free 90-minute comprehensive','others'=>'Often charged ₹500–₹2,000'],
    ['feature'=>'City Coverage','us'=>'50+ centres, PAN India','others'=>'Single location'],
    ['feature'=>'Price Transparency','us'=>'Fixed, published, no hidden fees','others'=>'Often quoted on visit'],
    ['feature'=>'EMI & Financing','us'=>'From ₹750/month, 0% options','others'=>'Limited or unavailable'],
    ['feature'=>'Post-Op Follow-Up','us'=>'Included — coordinated by us','others'=>'Varies by clinic'],
];

$trust_numbers = [
    ['value'=>'10,00,000+','label'=>'Procedures Facilitated'],
    ['value'=>'50+','label'=>'Premium Centres PAN India'],
    ['value'=>'97%','label'=>'Patient Satisfaction'],
    ['value'=>'30%','label'=>'Average Savings vs. MRP'],
];
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:1140px;">
        <div class="grid-2col" style="align-items:center;">
            <div>
                <span style="display:inline-flex;align-items:center;gap:6px;font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:4px 12px;border-radius:999px;margin-bottom:20px;">
                    🌐 India's #1 LASIK Platform
                </span>
                <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:var(--primary-foreground);margin-bottom:20px;line-height:1.1;">
                    The Smartest Way to Get <span style="color:var(--accent);">Laser Vision Correction</span> in India
                </h1>
                <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:24px;line-height:1.7;">
                    Think of us as your VIP pass to premium LASIK surgery. <?php echo esc_html($brand['name']); ?> is the world's largest digital aggregator for laser eye surgery — connecting you with top surgeons at exclusive volume-discounted rates across 50+ centres nationwide.
                </p>
                <ul style="list-style:none;padding:0;margin-bottom:32px;">
                    <?php foreach ($hero_bullets as $b): ?>
                        <li style="display:flex;align-items:flex-start;gap:10px;color:rgba(255,255,255,0.9);margin-bottom:12px;font-weight:500;">
                            <span style="color:var(--accent);flex-shrink:0;">✓</span> <?php echo esc_html($b); ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Trust Numbers -->
<section style="background:var(--bg-card);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
    <div class="container" style="padding:40px 20px;">
        <div class="grid-4col" style="text-align:center;">
            <?php foreach ($trust_numbers as $t): ?>
                <div>
                    <p class="font-display" style="font-weight:900;font-size:clamp(1.5rem,3vw,2.5rem);color:var(--text-primary);"><?php echo $t['value']; ?></p>
                    <p style="font-size:0.85rem;color:var(--text-muted);margin-top:4px;"><?php echo $t['label']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- The Problem We Solve -->
<section class="section-padding">
    <div class="container" style="max-width:800px;text-align:center;">
        <h2 class="section-heading">Planning LASIK? Here's the Problem.</h2>
        <p class="section-subheading">Choosing the right LASIK procedure shouldn't be this hard.</p>
        <div class="grid-3col" style="text-align:left;">
            <?php
            $problems = [
                ['emoji'=>'😵‍💫','title'=>'Confusing Options','desc'=>'6+ procedure types, dozens of clinics, wildly different prices — and no easy way to compare.'],
                ['emoji'=>'💸','title'=>'Inflated Pricing','desc'=>'Individual clinics charge full MRP with no volume incentive. You end up paying retail.'],
                ['emoji'=>'🎯','title'=>'No Accountability','desc'=>'Walk into any clinic and you\'re on your own. No coordinated care, no standardized outcomes.'],
            ];
            foreach ($problems as $item): ?>
                <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                    <span style="font-size:2rem;display:block;margin-bottom:12px;"><?php echo $item['emoji']; ?></span>
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;"><?php echo $item['title']; ?></h3>
                    <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;"><?php echo $item['desc']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- How It Works -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:960px;">
        <h2 class="section-heading">How Centre for Lasik Works</h2>
        <p class="section-subheading">We're not a hospital. We're your strategic advantage.</p>
        <div class="grid-3col">
            <?php foreach ($how_it_works as $i => $step): ?>
                <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:32px;position:relative;">
                    <span class="font-display" style="font-size:3rem;font-weight:900;color:rgba(var(--accent-rgb),0.1);position:absolute;top:16px;right:24px;"><?php echo $step['step']; ?></span>
                    <span style="font-size:2rem;display:block;margin-bottom:20px;"><?php echo $step['icon']; ?></span>
                    <h3 class="font-display" style="font-weight:700;font-size:1.1rem;color:var(--text-primary);margin-bottom:12px;"><?php echo $step['title']; ?></h3>
                    <p style="color:var(--text-muted);line-height:1.7;"><?php echo $step['desc']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>

        <!-- Aggregator Analogy -->
        <div style="margin-top:48px;background:var(--bg-card);border:1px solid rgba(var(--accent-rgb),0.2);border-radius:16px;padding:32px 40px;text-align:center;max-width:720px;margin-left:auto;margin-right:auto;">
            <span style="font-size:2rem;display:block;margin-bottom:16px;">✨</span>
            <h3 class="font-display" style="font-weight:700;font-size:1.2rem;color:var(--text-primary);margin-bottom:12px;">Think MakeMyTrip for LASIK</h3>
            <p style="color:var(--text-muted);line-height:1.7;">
                Just like a travel aggregator gets you better hotel rates through volume, <?php echo esc_html($brand['name']); ?> leverages its scale — <strong style="color:var(--text-primary);">10 lakh+ procedures</strong> — to negotiate institutional pricing from top eye hospitals.
            </p>
        </div>
    </div>
</section>

<!-- Value Props -->
<section class="section-padding">
    <div class="container" style="max-width:1140px;">
        <h2 class="section-heading">The Centre for Lasik Advantage</h2>
        <p class="section-subheading">Every benefit of a premium eye hospital — without the premium price tag.</p>
        <div class="grid-4col">
            <?php foreach ($value_props as $vp): ?>
                <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                    <span style="font-size:1.5rem;display:block;margin-bottom:16px;"><?php echo $vp['icon']; ?></span>
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;font-size:0.85rem;"><?php echo $vp['title']; ?></h3>
                    <p style="font-size:0.75rem;color:var(--text-muted);line-height:1.6;"><?php echo $vp['desc']; ?></p>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Comparison Table -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">Centre for Lasik vs. Going Direct</h2>
        <p class="section-subheading">See exactly what changes when you book through India's largest LASIK network.</p>
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
            <table class="comparison-table" style="width:100%;font-size:0.85rem;">
                <thead>
                    <tr style="border-bottom:1px solid var(--border);">
                        <th style="text-align:left;padding:16px;font-weight:700;color:var(--text-primary);">Feature</th>
                        <th style="text-align:left;padding:16px;font-weight:700;color:var(--accent);">✓ Centre for Lasik</th>
                        <th style="text-align:left;padding:16px;font-weight:700;color:var(--text-muted);">Individual Clinic</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($comparison_rows as $i => $row): ?>
                        <tr style="border-bottom:1px solid rgba(var(--border-rgb),0.5);<?php echo $i % 2 === 0 ? 'background:rgba(var(--muted-rgb),0.3);' : ''; ?>">
                            <td style="padding:16px;font-weight:500;color:var(--text-primary);"><?php echo $row['feature']; ?></td>
                            <td style="padding:16px;color:var(--text-primary);">✓ <?php echo $row['us']; ?></td>
                            <td style="padding:16px;color:var(--text-muted);"><?php echo $row['others']; ?></td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
        </div>
    </div>
</section>

<!-- Testimonials -->
<section class="section-padding">
    <div class="container" style="max-width:960px;">
        <h2 class="section-heading">Real Patients, Real Savings</h2>
        <p class="section-subheading">Hear from patients who chose the smarter way to get LASIK.</p>
        <div class="grid-3col">
            <?php foreach ($testimonials as $t): ?>
                <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                    <div style="font-size:2rem;color:rgba(var(--accent-rgb),0.3);font-family:serif;margin-bottom:8px;">"</div>
                    <p style="color:var(--text-muted);font-size:0.85rem;margin-bottom:16px;line-height:1.6;">"<?php echo esc_html($t['text']); ?>"</p>
                    <div style="display:flex;align-items:center;justify-content:space-between;">
                        <div style="display:flex;align-items:center;gap:12px;">
                            <div class="hero-gradient" style="width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:white;font-weight:700;font-size:0.85rem;">
                                <?php echo mb_substr($t['name'], 0, 1); ?>
                            </div>
                            <div>
                                <p style="font-size:0.85rem;font-weight:600;color:var(--text-primary);"><?php echo esc_html($t['name']); ?></p>
                                <p style="font-size:0.75rem;color:var(--text-muted);"><?php echo esc_html($t['city']); ?> • Age <?php echo $t['age']; ?></p>
                            </div>
                        </div>
                        <div style="color:#facc15;">
                            <?php echo str_repeat('★', $t['rating']); ?>
                        </div>
                    </div>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- CTA -->
<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
