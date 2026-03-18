<?php
/**
 * Template Name: Risk & Recovery
 */
get_header();
$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$brand = $site['brand'];

$timeline = [
    ['day' => 'Day 1', 'title' => 'Surgery Day', 'desc' => 'Procedure takes 15–30 minutes. You may experience mild discomfort, tearing, and light sensitivity. Rest with eyes closed for 4–6 hours.'],
    ['day' => 'Day 2–3', 'title' => 'Early Recovery', 'desc' => 'Vision begins to clear. Avoid rubbing eyes, screens, and strenuous activity. Use prescribed eye drops regularly.'],
    ['day' => 'Day 4–7', 'title' => 'Significant Improvement', 'desc' => 'Most patients achieve functional vision. Return to work is possible for most. Continue wearing protective eyewear at night.'],
    ['day' => 'Week 2–4', 'title' => 'Stabilization', 'desc' => 'Vision continues to sharpen. Minor fluctuations are normal. Avoid swimming, dusty environments, and eye makeup.'],
    ['day' => 'Month 1–3', 'title' => 'Full Recovery', 'desc' => 'Vision fully stabilizes. Final check-up confirms results. Dry eye symptoms typically resolve by this stage.'],
];

$risks = [
    ['title' => 'Dry Eyes', 'severity' => 'Common', 'desc' => 'Temporary dryness lasting 1–3 months. Managed effectively with lubricating eye drops.', 'pct' => '20–40%'],
    ['title' => 'Glare & Halos', 'severity' => 'Common', 'desc' => 'Seeing halos around lights at night. Usually resolves within 3–6 months.', 'pct' => '15–25%'],
    ['title' => 'Under/Over-correction', 'severity' => 'Uncommon', 'desc' => 'Minor residual prescription may need enhancement procedure.', 'pct' => '5–10%'],
    ['title' => 'Flap Complications', 'severity' => 'Rare', 'desc' => 'Only applies to flap-based procedures. Avoided entirely with SMILE/EPI.', 'pct' => '<1%'],
    ['title' => 'Infection', 'severity' => 'Very Rare', 'desc' => 'Prevented by strict sterile protocols and post-op antibiotics.', 'pct' => '<0.1%'],
];
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:960px;">
        <div class="grid-2col" style="align-items:center;">
            <div>
                <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,2.5rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;">
                    LASIK Risks, Recovery & Side Effects
                </h1>
                <p style="color:rgba(255,255,255,0.8);font-size:1.1rem;margin-bottom:16px;">A complete, honest guide to what you can expect before, during, and after LASIK eye surgery.</p>
                <ul style="list-style:none;padding:0;color:rgba(255,255,255,0.7);font-size:0.9rem;">
                    <li style="margin-bottom:8px;">✓ 99.5% safety record across all procedures</li>
                    <li style="margin-bottom:8px;">✓ Day-by-day recovery timeline</li>
                    <li style="margin-bottom:8px;">✓ Transparent risk data with percentages</li>
                    <li>✓ Post-operative care instructions</li>
                </ul>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Recovery Timeline -->
<section class="section-padding">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">Day-by-Day Recovery Timeline</h2>
        <?php foreach ($timeline as $item): ?>
            <div style="display:flex;gap:16px;margin-bottom:24px;">
                <div style="width:80px;flex-shrink:0;">
                    <span class="font-display" style="font-size:0.85rem;font-weight:700;color:var(--accent);"><?php echo $item['day']; ?></span>
                </div>
                <div style="flex:1;background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px;">
                    <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:4px;"><?php echo $item['title']; ?></h3>
                    <p style="font-size:0.85rem;color:var(--text-muted);"><?php echo $item['desc']; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Risks -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">Risks & Side Effects</h2>
        <p class="section-subheading">LASIK is one of the safest elective procedures. Here's what the data shows:</p>
        <?php foreach ($risks as $risk): ?>
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:20px;display:flex;align-items:flex-start;gap:16px;margin-bottom:16px;">
                <span style="font-size:1.2rem;flex-shrink:0;">⚠️</span>
                <div style="flex:1;">
                    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
                        <h3 class="font-display" style="font-weight:700;color:var(--text-primary);"><?php echo $risk['title']; ?></h3>
                        <span style="font-size:0.7rem;font-weight:500;color:var(--text-muted);background:var(--bg-surface);padding:2px 8px;border-radius:999px;">
                            <?php echo $risk['severity']; ?> (<?php echo $risk['pct']; ?>)
                        </span>
                    </div>
                    <p style="font-size:0.85rem;color:var(--text-muted);"><?php echo $risk['desc']; ?></p>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Post-op Care -->
<section class="section-padding">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">Post-Procedure Care Instructions</h2>
        <div class="grid-2col">
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:16px;">✅ Do</h3>
                <ul style="list-style:none;padding:0;">
                    <?php foreach (['Use prescribed eye drops on schedule','Wear protective eyewear while sleeping','Attend all follow-up appointments','Stay hydrated and rest well'] as $item): ?>
                        <li style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;display:flex;align-items:flex-start;gap:8px;">
                            <span style="width:6px;height:6px;border-radius:50%;background:var(--accent);flex-shrink:0;margin-top:6px;"></span><?php echo $item; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:24px;">
                <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:16px;">❌ Don't</h3>
                <ul style="list-style:none;padding:0;">
                    <?php foreach (["Rub or touch your eyes","Swim or use hot tubs for 2 weeks","Apply eye makeup for 1 week","Engage in contact sports for 1 month"] as $item): ?>
                        <li style="font-size:0.85rem;color:var(--text-muted);margin-bottom:8px;display:flex;align-items:flex-start;gap:8px;">
                            <span style="width:6px;height:6px;border-radius:50%;background:#ef4444;flex-shrink:0;margin-top:6px;"></span><?php echo $item; ?>
                        </li>
                    <?php endforeach; ?>
                </ul>
            </div>
        </div>
    </div>
</section>

<!-- Bottom CTA -->
<section class="section-padding hero-gradient">
    <div class="container" style="max-width:640px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:1.5rem;color:var(--primary-foreground);margin-bottom:12px;">Still Have Questions About LASIK Safety?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Speak to our LASIK specialist for a personalized risk assessment — completely free.</p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
