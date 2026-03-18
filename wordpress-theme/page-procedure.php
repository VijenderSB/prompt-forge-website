<?php
/**
 * Template Name: Procedure Detail
 * Description: Dynamic procedure page — set procedure slug via custom field 'procedure_slug'
 */
get_header();

// Load site data
$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$procedures = $site['procedures'];
$brand = $site['brand'];

// Get procedure slug from custom field or page slug
$slug = get_post_meta(get_the_ID(), 'procedure_slug', true);
if (!$slug) {
    $slug = $post->post_name;
    // Map page slugs to procedure slugs
    $slug_map = [
        'standard-lasik' => 'standard-lasik',
        'contoura-vision' => 'contoura-vision',
        'femto-contoura' => 'femto-contoura',
        'innoveyes' => 'innovEyes',
        'smile-pro' => 'smile-pro',
        'silk' => 'silk',
        'epi-lasik' => 'epi-lasik',
    ];
    $slug = isset($slug_map[$slug]) ? $slug_map[$slug] : $slug;
}

$procedure = null;
$other_procedures = [];
foreach ($procedures as $p) {
    if ($p['slug'] === $slug) {
        $procedure = $p;
    } else {
        $other_procedures[] = $p;
    }
}

if (!$procedure) {
    echo '<div class="container section-padding"><h1>Procedure not found</h1></div>';
    get_footer();
    return;
}

$discount_percent = round((1 - $procedure['price'] / $procedure['originalPrice']) * 100);
$both_eyes = $procedure['price'] * 2;
$emi_monthly = round($both_eyes / 12);

// Format price helper
function format_price_proc($num) {
    if ($num >= 100000) return '₹' . number_format($num / 100000, 1) . ' Lakh';
    return '₹' . number_format($num);
}
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:1140px;">
        <div class="grid-2col" style="align-items:center;">
            <div>
                <?php if (!empty($procedure['badge'])): ?>
                    <span class="discount-badge" style="margin-bottom:16px;display:inline-block;"><?php echo esc_html($procedure['badge']); ?></span>
                <?php endif; ?>
                <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;line-height:1.1;">
                    <?php echo esc_html($procedure['name']); ?> Eye Surgery in India
                </h1>
                <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:24px;max-width:540px;">
                    <?php echo esc_html($procedure['tagline']); ?>
                </p>
                <div style="display:flex;align-items:center;gap:24px;margin-bottom:24px;">
                    <div style="color:var(--primary-foreground);">
                        <span style="text-decoration:line-through;opacity:0.5;font-size:0.9rem;">
                            <?php echo format_price_proc($procedure['originalPrice']); ?>/eye
                        </span>
                        <span class="font-display" style="display:block;font-size:2rem;font-weight:900;">
                            <?php echo format_price_proc($procedure['price']); ?>/eye
                        </span>
                    </div>
                    <span class="discount-badge"><?php echo $discount_percent; ?>% OFF</span>
                </div>
                <div style="display:flex;flex-wrap:wrap;gap:12px;">
                    <a href="/am-i-a-candidate" class="btn btn-secondary" style="padding:12px 32px;font-size:1rem;">Book Free Consultation</a>
                    <a href="tel:<?php echo esc_attr($brand['phone']); ?>" style="display:flex;align-items:center;gap:8px;color:var(--primary-foreground);font-weight:500;height:48px;padding:0 24px;border-radius:8px;border:1px solid rgba(255,255,255,0.2);text-decoration:none;">
                        📞 <?php echo esc_html($brand['phoneDisplay']); ?>
                    </a>
                </div>
            </div>
            <div>
                <?php get_template_part('template-parts/consultation-form'); ?>
            </div>
        </div>
    </div>
</section>

<!-- Key Specs -->
<section class="section-padding">
    <div class="container" style="max-width:1140px;">
        <h2 class="section-heading">What is <?php echo esc_html($procedure['name']); ?>?</h2>
        <p style="color:var(--text-muted);line-height:1.8;margin-bottom:32px;">
            <?php echo esc_html($procedure['description']); ?>
        </p>
        <div class="grid-4col" style="margin-bottom:32px;">
            <?php
            $specs = [
                ['icon' => '⚡', 'label' => 'Technology', 'value' => $procedure['technology']],
                ['icon' => '⏱️', 'label' => 'Duration', 'value' => $procedure['duration']],
                ['icon' => '🛡️', 'label' => 'Recovery', 'value' => $procedure['recovery']],
                ['icon' => '👁️', 'label' => 'Dry Eye Risk', 'value' => $procedure['dryEyeRisk']],
            ];
            foreach ($specs as $spec): ?>
                <div style="background:var(--bg-surface);border:1px solid var(--border);border-radius:12px;padding:16px;text-align:center;">
                    <span style="font-size:1.3rem;display:block;margin-bottom:8px;"><?php echo $spec['icon']; ?></span>
                    <p style="font-size:0.75rem;color:var(--text-muted);margin-bottom:4px;"><?php echo $spec['label']; ?></p>
                    <p style="font-size:0.85rem;font-weight:500;color:var(--text-primary);line-height:1.3;"><?php echo esc_html($spec['value']); ?></p>
                </div>
            <?php endforeach; ?>
        </div>
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
            <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:16px;">Key Benefits</h3>
            <div class="grid-2col">
                <?php foreach ($procedure['features'] as $feature): ?>
                    <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;color:var(--text-primary);">
                        <span style="color:var(--accent);">✓</span> <?php echo esc_html($feature); ?>
                    </div>
                <?php endforeach; ?>
                <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;color:var(--text-primary);">
                    <span style="color:var(--accent);">✓</span> Starting at <?php echo format_price_proc($procedure['price']); ?>/eye
                </div>
                <div style="display:flex;align-items:center;gap:8px;font-size:0.9rem;color:var(--text-primary);">
                    <span style="color:var(--accent);">✓</span> US-FDA approved platform
                </div>
            </div>
        </div>
    </div>
</section>

<!-- Technical Details -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:1140px;">
        <h2 class="section-heading"><?php echo esc_html($procedure['name']); ?> — Technical Specifications</h2>
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;overflow:hidden;">
            <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(180px,1fr));gap:1px;background:var(--border);">
                <?php
                $tech_specs = [
                    'Technique' => $procedure['techType'] === 'flap' ? 'Flap-based' : 'Lenticule',
                    'Blade Free' => $procedure['bladeFree'] ? 'Yes ✅' : 'No ❌',
                    'Flapless' => $procedure['flapless'] ? 'Yes ✅' : 'No ❌',
                    'Topo-Guided' => $procedure['topoGuided'] ? 'Yes ✅' : 'No ❌',
                    'Incision' => $procedure['incision'],
                    'Laser Speed' => $procedure['laserSpeed'],
                    'Dry Eye Risk' => $procedure['dryEyeRisk'],
                    'Thin Cornea Safe' => $procedure['thinCorneaSafe'] ? 'Yes ✅' : 'No ❌',
                    'Recovery' => $procedure['recovery'],
                ];
                foreach ($tech_specs as $label => $value): ?>
                    <div style="background:var(--bg-card);padding:16px;">
                        <p style="font-size:0.7rem;color:var(--text-muted);margin-bottom:4px;"><?php echo $label; ?></p>
                        <p style="font-size:0.85rem;font-weight:600;color:var(--text-primary);"><?php echo $value; ?></p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </div>
</section>

<!-- Cost + CTA -->
<section class="section-padding">
    <div class="container" style="max-width:1140px;">
        <h2 class="section-heading"><?php echo esc_html($procedure['name']); ?> Cost in India</h2>
        <div class="grid-2col" style="align-items:start;">
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:32px;">
                <p style="color:var(--text-muted);text-decoration:line-through;"><?php echo format_price_proc($procedure['originalPrice']); ?>/eye</p>
                <p class="font-display" style="font-size:2.5rem;font-weight:900;color:var(--accent);margin:8px 0;"><?php echo format_price_proc($procedure['price']); ?>/eye</p>
                <p style="font-size:0.9rem;color:var(--text-muted);margin-bottom:4px;">Both eyes: <?php echo format_price_proc($both_eyes); ?></p>
                <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:24px;">EMI from <?php echo format_price_proc($emi_monthly); ?>/month • No hidden charges</p>

                <h4 class="font-display" style="font-weight:600;color:var(--text-primary);font-size:0.9rem;margin-bottom:12px;">Price Includes:</h4>
                <?php
                $includes = [
                    'Comprehensive 90-min pre-op diagnostic',
                    'Surgery by senior refractive surgeon',
                    'Post-operative medications & drops',
                    'All follow-up visits (1 day, 1 week, 1 month, 3 months)',
                    'Enhancement guarantee (if needed)',
                ];
                foreach ($includes as $item): ?>
                    <div style="display:flex;align-items:center;gap:8px;font-size:0.85rem;color:var(--text-primary);margin-bottom:8px;">
                        <span style="color:var(--accent);">✓</span> <?php echo $item; ?>
                    </div>
                <?php endforeach; ?>

                <div style="background:rgba(var(--primary-rgb,37,99,235),0.05);border:1px solid rgba(var(--primary-rgb,37,99,235),0.15);border-radius:8px;padding:16px;margin:24px 0;">
                    <p style="font-size:0.7rem;font-weight:700;color:var(--accent);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:4px;">Why is this price lower?</p>
                    <p style="font-size:0.85rem;color:var(--text-muted);line-height:1.6;">
                        Centre for Lasik is India's largest LASIK aggregator. Our patient volume unlocks <strong style="color:var(--text-primary);">exclusive institutional pricing</strong> — same surgeon, same technology, up to 30% less than walk-in MRP.
                        <a href="/why-us" style="color:var(--accent);font-weight:600;">Learn more →</a>
                    </p>
                </div>

                <a href="/am-i-a-candidate" class="btn btn-primary" style="width:100%;text-align:center;padding:14px;">
                    Book Free Consultation — Lock This Price
                </a>
            </div>
            <div>
                <?php get_template_part('template-parts/consultation-form'); ?>
            </div>
        </div>
    </div>
</section>

<!-- Compare Other Procedures -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:1140px;">
        <h2 class="section-heading">Compare Other LASIK Procedures</h2>
        <p class="section-subheading">Not sure if <?php echo esc_html($procedure['name']); ?> is right for you? Explore alternatives:</p>
        <div class="grid-3col">
            <?php foreach (array_slice($other_procedures, 0, 3) as $op): ?>
                <a href="/procedures/<?php echo esc_attr($op['slug']); ?>" class="procedure-card" style="text-decoration:none;">
                    <?php if (!empty($op['badge'])): ?>
                        <span class="procedure-badge"><?php echo esc_html($op['badge']); ?></span>
                    <?php endif; ?>
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:4px;font-size:1rem;"><?php echo esc_html($op['name']); ?></h3>
                    <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;"><?php echo esc_html($op['tagline']); ?></p>
                    <div style="display:flex;align-items:center;gap:8px;">
                        <span style="text-decoration:line-through;font-size:0.8rem;color:var(--text-muted);"><?php echo format_price_proc($op['originalPrice']); ?></span>
                        <span class="font-display" style="font-weight:900;color:var(--accent);font-size:1.1rem;"><?php echo format_price_proc($op['price']); ?>/eye</span>
                    </div>
                </a>
            <?php endforeach; ?>
        </div>
        <div style="text-align:center;margin-top:32px;">
            <a href="/which-lasik-is-best" class="btn btn-outline">Compare All Procedures →</a>
        </div>
    </div>
</section>

<!-- Final CTA -->
<section class="section-padding" style="background:var(--primary);border-radius:16px;margin:0 auto;max-width:1140px;">
    <div class="container" style="max-width:640px;text-align:center;">
        <h2 class="font-display" style="font-weight:900;font-size:clamp(1.3rem,3vw,1.8rem);color:var(--primary-foreground);margin-bottom:12px;">
            Ready for <?php echo esc_html($procedure['name']); ?>?
        </h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">
            Book a free consultation and lock in your discounted price today.
        </p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
