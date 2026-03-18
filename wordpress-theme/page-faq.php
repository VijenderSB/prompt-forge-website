<?php
/**
 * Template Name: FAQ
 */
get_header();

$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$faqs = $site['faqs'];

$categories = [
    ['key'=>'general','label'=>'General LASIK Questions'],
    ['key'=>'technology','label'=>'LASIK Technology & Procedures'],
    ['key'=>'eligibility','label'=>'Eligibility & Candidacy'],
    ['key'=>'cost','label'=>'Cost, Pricing & EMI'],
    ['key'=>'recovery','label'=>'Recovery & Aftercare'],
    ['key'=>'armed-forces','label'=>'Armed Forces & Pilots'],
];
?>

<!-- Hero -->
<section class="hero-gradient section-padding">
    <div class="container" style="max-width:720px;text-align:center;">
        <span style="font-size:0.7rem;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:rgba(255,255,255,0.7);display:block;margin-bottom:12px;">Patient Guide — 50 Expert Answers</span>
        <h1 class="font-display" style="font-size:clamp(1.8rem,4vw,3rem);font-weight:900;color:var(--primary-foreground);margin-bottom:16px;">
            Must-Know Information Before LASIK Surgery
        </h1>
        <p style="color:rgba(255,255,255,0.8);font-size:1rem;line-height:1.7;max-width:640px;margin:0 auto;">
            Thinking about LASIK can feel exciting — and a little overwhelming. Here's everything you need to know, answered by India's top refractive surgeons.
        </p>
    </div>
</section>

<!-- Narrative Intro -->
<section class="section-padding" style="background:var(--bg-surface);border-bottom:1px solid var(--border);">
    <div class="container" style="max-width:800px;">
        <p style="font-size:1rem;line-height:1.8;color:var(--text-muted);margin-bottom:16px;">
            Before you go ahead with laser vision correction, it helps to understand what the procedure involves, which technology suits your eyes, what the costs look like, and how recovery works. We've compiled <strong style="color:var(--text-primary);">50 of the most frequently asked questions</strong> from patients across India — answered in plain language by ophthalmologists with 20+ years of experience.
        </p>
        <p style="font-size:1rem;line-height:1.8;color:var(--text-muted);">
            Whether you're comparing SMILE Pro vs Contoura Vision, wondering about armed forces eligibility, or simply asking <em>"Is LASIK painful?"</em> — you'll find clear, honest answers below.
        </p>
    </div>
</section>

<!-- FAQ Sections -->
<section class="section-padding">
    <div class="container" style="max-width:1140px;">
        <?php foreach ($categories as $cat):
            $cat_faqs = array_filter($faqs, function($f) use ($cat) { return $f['category'] === $cat['key']; });
            $cat_faqs = array_values($cat_faqs);
            if (empty($cat_faqs)) continue;
            $mid = ceil(count($cat_faqs) / 2);
            $col1 = array_slice($cat_faqs, 0, $mid);
            $col2 = array_slice($cat_faqs, $mid);
        ?>
            <div style="margin-bottom:56px;">
                <h2 class="font-display" style="font-weight:700;font-size:clamp(1.1rem,2vw,1.5rem);color:var(--text-primary);margin-bottom:24px;display:flex;align-items:center;gap:12px;">
                    <span style="width:4px;height:24px;border-radius:999px;background:var(--accent);display:inline-block;"></span>
                    <?php echo esc_html($cat['label']); ?>
                    <span style="font-size:0.7rem;font-weight:500;color:var(--text-muted);background:var(--bg-surface);padding:2px 8px;border-radius:999px;"><?php echo count($cat_faqs); ?> questions</span>
                </h2>
                <div class="grid-2col" style="gap:24px;">
                    <!-- Column 1 -->
                    <div>
                        <?php foreach ($col1 as $i => $faq): ?>
                            <details style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:0 20px;margin-bottom:12px;">
                                <summary class="font-display" style="font-weight:600;color:var(--text-primary);padding:16px 0;cursor:pointer;font-size:0.85rem;list-style:none;display:flex;justify-content:space-between;align-items:center;">
                                    <?php echo esc_html($faq['q']); ?>
                                    <span style="flex-shrink:0;margin-left:8px;">▸</span>
                                </summary>
                                <div style="color:var(--text-muted);font-size:0.85rem;line-height:1.7;padding-bottom:16px;">
                                    <?php echo esc_html($faq['a']); ?>
                                </div>
                            </details>
                        <?php endforeach; ?>
                    </div>
                    <!-- Column 2 -->
                    <div>
                        <?php foreach ($col2 as $i => $faq): ?>
                            <details style="background:var(--bg-card);border:1px solid var(--border);border-radius:12px;padding:0 20px;margin-bottom:12px;">
                                <summary class="font-display" style="font-weight:600;color:var(--text-primary);padding:16px 0;cursor:pointer;font-size:0.85rem;list-style:none;display:flex;justify-content:space-between;align-items:center;">
                                    <?php echo esc_html($faq['q']); ?>
                                    <span style="flex-shrink:0;margin-left:8px;">▸</span>
                                </summary>
                                <div style="color:var(--text-muted);font-size:0.85rem;line-height:1.7;padding-bottom:16px;">
                                    <?php echo esc_html($faq['a']); ?>
                                </div>
                            </details>
                        <?php endforeach; ?>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Still Have Questions -->
<section class="section-padding" style="background:var(--bg-surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
    <div class="container" style="max-width:480px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:clamp(1.1rem,2vw,1.5rem);color:var(--text-primary);margin-bottom:8px;">Still Have Questions?</h2>
        <p style="font-size:0.85rem;color:var(--text-muted);margin-bottom:24px;">Book a free consultation — our LASIK specialist will answer every doubt personally.</p>
        <?php get_template_part('template-parts/consultation-form'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
