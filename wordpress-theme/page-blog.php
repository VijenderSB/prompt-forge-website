<?php
/**
 * Template Name: Blog
 */
get_header();

$blog_posts = [
    ['slug'=>'contoura-vision-explained','title'=>'Contoura Vision Explained: How 22,000-Point Mapping Transforms Your Vision','excerpt'=>'Understanding the advanced topographic technology behind India\'s most popular LASIK procedure.','category'=>'LASIK Technology','date'=>'2026-03-10','featured'=>true],
    ['slug'=>'lasik-risks-complications','title'=>'LASIK Risks & Complications: What the Data Actually Shows','excerpt'=>'A transparent look at LASIK safety statistics, side effects, and how modern technology minimizes risk.','category'=>'Safety & Risk','date'=>'2026-03-08','featured'=>true],
    ['slug'=>'how-much-lasik-costs','title'=>'How Much Does LASIK Cost in India in 2026?','excerpt'=>'Complete pricing breakdown for all LASIK procedures, EMI options, and insurance coverage.','category'=>'LASIK Cost','date'=>'2026-03-05','featured'=>true],
    ['slug'=>'lasik-recovery-day-by-day','title'=>'LASIK Recovery: A Day-by-Day Guide to Your Healing Journey','excerpt'=>'What to expect from Day 1 to Month 3 after LASIK surgery, including dos and don\'ts.','category'=>'Recovery','date'=>'2026-03-03'],
    ['slug'=>'am-i-candidate-lasik','title'=>'Am I a Candidate for LASIK? Complete Eligibility Guide','excerpt'=>'Age, prescription, corneal thickness, and other factors that determine your LASIK eligibility.','category'=>'Eligibility','date'=>'2026-02-28'],
    ['slug'=>'contoura-vs-smile','title'=>'Contoura Vision vs SMILE: Which LASIK is Better?','excerpt'=>'A detailed comparison of two of the most popular LASIK procedures in India.','category'=>'Comparisons','date'=>'2026-02-25'],
    ['slug'=>'visumax-800-smile-pro','title'=>'VisuMax 800 & SMILE Pro: The Future of Keyhole LASIK','excerpt'=>'How the VisuMax 800 platform achieves 7-second laser treatment with robotic precision.','category'=>'LASIK Technology','date'=>'2026-02-20'],
    ['slug'=>'lasik-eligibility-army','title'=>'LASIK for Indian Armed Forces: Eligibility & Rules','excerpt'=>'Everything you need to know about LASIK eligibility for Army, Navy, Air Force, and paramilitary forces.','category'=>'Eligibility','date'=>'2026-02-15'],
    ['slug'=>'lasik-emi-options','title'=>'LASIK EMI Options: Make Vision Correction Affordable','excerpt'=>'Break down your LASIK cost into easy monthly installments starting from ₹2,500/month.','category'=>'LASIK Cost','date'=>'2026-02-10'],
];

$featured = array_filter($blog_posts, function($p) { return !empty($p['featured']); });
$categories = array_unique(array_column($blog_posts, 'category'));
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:960px;">
        <div class="grid-2col" style="align-items:center;">
            <div>
                <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,2.5rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;">LASIK Eye Surgery Blog</h1>
                <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:16px;">Expert insights on LASIK technology, costs, recovery, and eligibility.</p>
                <ul style="list-style:none;padding:0;color:rgba(255,255,255,0.7);font-size:0.9rem;">
                    <li style="margin-bottom:8px;">✓ Latest LASIK technology updates</li>
                    <li style="margin-bottom:8px;">✓ Honest cost breakdowns & EMI options</li>
                    <li style="margin-bottom:8px;">✓ Recovery guides & patient stories</li>
                    <li>✓ Eligibility criteria for all procedures</li>
                </ul>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Featured -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:960px;">
        <h2 class="section-heading">Featured Articles</h2>
        <div class="grid-3col">
            <?php foreach ($featured as $post): ?>
                <a href="/blog/<?php echo esc_attr($post['slug']); ?>" style="text-decoration:none;display:block;background:var(--bg-card);border:1px solid rgba(var(--accent-rgb),0.2);border-radius:12px;padding:24px;height:100%;">
                    <span style="font-size:0.7rem;font-weight:500;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:2px 8px;border-radius:999px;"><?php echo esc_html($post['category']); ?></span>
                    <h3 class="font-display" style="font-weight:700;font-size:1.1rem;color:var(--text-primary);margin:12px 0 8px;line-height:1.4;"><?php echo esc_html($post['title']); ?></h3>
                    <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:16px;"><?php echo esc_html($post['excerpt']); ?></p>
                    <span style="font-size:0.85rem;color:var(--accent);font-weight:500;">Read article →</span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- All Articles -->
<section class="section-padding">
    <div class="container" style="max-width:960px;">
        <h2 class="section-heading">All Articles</h2>
        <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:32px;">
            <span style="padding:6px 12px;border-radius:999px;font-size:0.75rem;font-weight:500;background:var(--accent);color:white;cursor:pointer;">All</span>
            <?php foreach ($categories as $cat): ?>
                <span style="padding:6px 12px;border-radius:999px;font-size:0.75rem;font-weight:500;background:var(--bg-surface);color:var(--text-muted);cursor:pointer;"><?php echo esc_html($cat); ?></span>
            <?php endforeach; ?>
        </div>
        <div class="grid-2col">
            <?php foreach ($blog_posts as $post): ?>
                <a href="/blog/<?php echo esc_attr($post['slug']); ?>" style="text-decoration:none;display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                    <div style="display:flex;align-items:center;gap:12px;margin-bottom:12px;">
                        <span style="font-size:0.7rem;font-weight:500;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:2px 8px;border-radius:999px;"><?php echo esc_html($post['category']); ?></span>
                        <span style="font-size:0.7rem;color:var(--text-muted);">📅 <?php echo esc_html($post['date']); ?></span>
                    </div>
                    <h3 class="font-display" style="font-weight:700;font-size:1rem;color:var(--text-primary);margin-bottom:8px;"><?php echo esc_html($post['title']); ?></h3>
                    <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:12px;"><?php echo esc_html($post['excerpt']); ?></p>
                    <span style="font-size:0.85rem;color:var(--accent);font-weight:500;">Read more →</span>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="section-padding hero-gradient">
    <div class="container" style="max-width:640px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:1.5rem;color:var(--primary-foreground);margin-bottom:12px;">Ready to Start Your LASIK Journey?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Book a free consultation — our specialist will recommend the best procedure for your eyes.</p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
