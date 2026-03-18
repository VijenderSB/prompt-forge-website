<?php
/**
 * Template Name: LASIK Cost
 */
get_header();

$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$procedures = $site['procedures'];

function format_price_cost($num) {
    if ($num >= 100000) return '₹' . number_format($num / 100000, 1) . ' Lakh';
    return '₹' . number_format($num);
}
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:720px;text-align:center;">
        <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,2.5rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;">
            LASIK Eye Surgery Cost in India 2026
        </h1>
        <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;">Transparent pricing. No hidden charges. EMI from ₹1,500/month.</p>
    </div>
</section>

<!-- Price Table -->
<section class="section-padding">
    <div class="container" style="max-width:1000px;">
        <div style="background:var(--bg-card);border-radius:12px;border:1px solid var(--border);overflow:hidden;margin-bottom:64px;">
            <div style="overflow-x:auto;">
                <table class="comparison-table" style="width:100%;font-size:0.85rem;">
                    <thead>
                        <tr style="background:var(--bg-surface);">
                            <th style="text-align:left;padding:16px;">Procedure</th>
                            <th style="padding:16px;text-align:center;">Original Price</th>
                            <th style="padding:16px;text-align:center;">Discounted Price</th>
                            <th style="padding:16px;text-align:center;">Both Eyes</th>
                            <th style="padding:16px;text-align:center;">Type</th>
                            <th style="padding:16px;text-align:center;">Recovery</th>
                        </tr>
                    </thead>
                    <tbody>
                        <?php foreach ($procedures as $p): ?>
                        <tr style="border-top:1px solid var(--border);">
                            <td style="padding:16px;">
                                <a href="/procedures/<?php echo esc_attr($p['slug']); ?>" style="font-weight:500;color:var(--accent);text-decoration:none;">
                                    <?php echo esc_html($p['name']); ?>
                                </a>
                                <?php if (!empty($p['badge'])): ?>
                                    <span style="margin-left:8px;font-size:0.65rem;background:var(--accent);color:white;padding:2px 6px;border-radius:999px;font-weight:700;"><?php echo esc_html($p['badge']); ?></span>
                                <?php endif; ?>
                                <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;"><?php echo esc_html($p['tagline']); ?></p>
                            </td>
                            <td style="padding:16px;text-align:center;color:var(--text-muted);text-decoration:line-through;"><?php echo format_price_cost($p['originalPrice']); ?></td>
                            <td style="padding:16px;text-align:center;font-weight:700;color:var(--accent);"><?php echo format_price_cost($p['price']); ?>/eye</td>
                            <td style="padding:16px;text-align:center;font-weight:700;color:var(--text-primary);"><?php echo format_price_cost($p['price'] * 2); ?></td>
                            <td style="padding:16px;text-align:center;">
                                <span style="font-size:0.75rem;font-weight:500;padding:4px 8px;border-radius:999px;<?php echo $p['flapless'] ? 'background:rgba(var(--accent-rgb),0.1);color:var(--accent);' : 'background:var(--bg-surface);color:var(--text-muted);'; ?>">
                                    <?php echo $p['flapless'] ? 'Flapless' : 'Flap-based'; ?>
                                </span>
                            </td>
                            <td style="padding:16px;text-align:center;color:var(--text-muted);"><?php echo esc_html($p['recovery']); ?></td>
                        </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>

        <!-- EMI Section -->
        <div style="max-width:720px;margin:0 auto 64px;">
            <h2 class="section-heading">EMI Options Available</h2>
            <p class="section-subheading">Make LASIK affordable with easy monthly instalments</p>
            <div class="grid-3col">
                <?php
                $contoura_both = 25500 * 2;
                $emi_options = [6, 12, 24];
                foreach ($emi_options as $months): ?>
                    <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;text-align:center;">
                        <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;"><?php echo $months; ?> Month EMI</h3>
                        <p class="font-display" style="font-size:1.5rem;font-weight:700;color:var(--accent);">
                            <?php echo format_price_cost(round($contoura_both / $months)); ?>/mo
                        </p>
                        <p style="font-size:0.75rem;color:var(--text-muted);margin-top:4px;">Starting from (HD Contoura Vision, both eyes)</p>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>

        <!-- Cost vs Glasses -->
        <div style="max-width:720px;margin:0 auto;">
            <h2 class="section-heading">LASIK vs Glasses & Contact Lenses</h2>
            <p class="section-subheading">Long-term cost comparison over 10 years</p>
            <div class="grid-3col">
                <div style="border-radius:12px;padding:24px;text-align:center;background:var(--bg-card);border:1px solid var(--border);">
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;">Glasses</h3>
                    <p class="font-display" style="font-size:1.5rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">₹1,50,000+</p>
                    <p style="font-size:0.85rem;color:var(--text-muted);">New frames + lenses every 1–2 years, cleaning supplies, repairs</p>
                </div>
                <div style="border-radius:12px;padding:24px;text-align:center;background:var(--bg-card);border:1px solid var(--border);">
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;">Contact Lenses</h3>
                    <p class="font-display" style="font-size:1.5rem;font-weight:700;color:var(--text-primary);margin-bottom:8px;">₹2,40,000+</p>
                    <p style="font-size:0.85rem;color:var(--text-muted);">Monthly lenses, solutions, annual check-ups, replacements</p>
                </div>
                <div class="hero-gradient" style="border-radius:12px;padding:24px;text-align:center;">
                    <h3 class="font-display" style="font-weight:700;color:var(--primary-foreground);margin-bottom:8px;">LASIK (One-time)</h3>
                    <p class="font-display" style="font-size:1.5rem;font-weight:700;color:var(--primary-foreground);margin-bottom:8px;">₹17,998</p>
                    <p style="font-size:0.85rem;color:rgba(255,255,255,0.8);">Standard LASIK both eyes. Freedom for life.</p>
                </div>
            </div>
        </div>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
