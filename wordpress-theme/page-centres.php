<?php
/**
 * Template Name: Our Centres
 */
get_header();

$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$centres = $site['centres'];
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:960px;">
        <div class="grid-2col" style="align-items:center;">
            <div>
                <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,2.5rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;">LASIK Eye Surgery Centres Across India</h1>
                <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:16px;">State-of-the-art facilities with same world-class quality at every location.</p>
                <ul style="list-style:none;padding:0;color:rgba(255,255,255,0.7);font-size:0.9rem;">
                    <li style="margin-bottom:8px;">✓ Multiple centres across Delhi NCR</li>
                    <li style="margin-bottom:8px;">✓ Free 90-minute diagnostic at every location</li>
                    <li style="margin-bottom:8px;">✓ All procedures from ₹8,999/eye to ₹75,000/eye</li>
                    <li>✓ Mon–Sat, 9 AM – 7 PM</li>
                </ul>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Centres Grid -->
<section class="section-padding">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">Our Centres</h2>
        <p class="section-subheading">Visit any of our centres for a free LASIK consultation</p>
        <div class="grid-2col">
            <?php foreach ($centres as $c): ?>
                <a href="/centres/<?php echo esc_attr($c['slug']); ?>" style="text-decoration:none;display:block;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:4px;"><?php echo esc_html($c['name']); ?></h3>
                    <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:12px;">Partner: <?php echo esc_html($c['hospital']); ?></p>
                    <div style="font-size:0.85rem;color:var(--text-muted);">
                        <p style="display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;">📍 <?php echo esc_html($c['address']); ?></p>
                        <p style="display:flex;align-items:center;gap:8px;margin-bottom:8px;">📞 <?php echo esc_html($c['phone']); ?></p>
                        <p style="display:flex;align-items:center;gap:8px;">🕐 Mon–Sat, 9:00 AM – 7:00 PM</p>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="section-padding hero-gradient">
    <div class="container" style="max-width:640px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:1.5rem;color:var(--primary-foreground);margin-bottom:12px;">Book Your Free LASIK Consultation</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Walk in or call — our specialist will evaluate your eyes and recommend the best procedure.</p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
