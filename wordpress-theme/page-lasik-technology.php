<?php
/**
 * Template Name: LASIK Technology
 */
get_header();

$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$procedures = $site['procedures'];

function format_price_tech($num) {
    return '₹' . number_format($num);
}

$generations = [
    ['era'=>'1st Generation (1990s)','name'=>'PRK / Surface Ablation','desc'=>'Photorefractive Keratectomy was the first laser vision correction. The epithelium is removed and an excimer laser reshapes the exposed corneal surface. No flap is created. Recovery is slower (5–7 days) but the cornea retains full biomechanical strength.',
     'pros'=>['No flap — strongest cornea post-surgery','Suitable for thin corneas','Lower cost'],
     'cons'=>['Longer, uncomfortable recovery (5–7 days)','Higher risk of corneal haze','Vision fluctuates for weeks'],
     'available'=>'EPI LASIK (Advanced PRK)','slug'=>'epi-lasik'],
    ['era'=>'2nd Generation (2000s)','name'=>'Microkeratome LASIK','desc'=>'Traditional LASIK uses a mechanical microkeratome blade to create a thin corneal flap, then an excimer laser reshapes the underlying stroma. This was a breakthrough — offering near-painless surgery with next-day vision.',
     'pros'=>['Fast visual recovery (24 hours)','Painless procedure','Proven 25+ year track record'],
     'cons'=>['Mechanical blade creates variable flap thickness','Flap-related complications possible','Higher dry eye risk'],
     'available'=>'Standard LASIK','slug'=>'standard-lasik'],
    ['era'=>'3rd Generation (2010s)','name'=>'Femto-LASIK (All-Laser LASIK)','desc'=>'Femtosecond lasers replaced mechanical blades for flap creation — enabling precise, uniform, thinner flaps. Combined with topography-guided excimer ablation (Contoura Vision), this generation delivers customized corneal reshaping based on 22,000+ elevation data points.',
     'pros'=>['Blade-free flap — more precise and consistent','Topography-guided = personalized treatment','Superior night vision outcomes'],
     'cons'=>['Still creates a flap (biomechanical compromise)','Two laser systems required','Higher cost than standard LASIK'],
     'available'=>'HD Contoura Vision / Femto + Contoura','slug'=>'contoura-vision'],
    ['era'=>'4th Generation (2016–Present)','name'=>'SMILE (Small Incision Lenticule Extraction)','desc'=>'SMILE eliminates the flap entirely. A femtosecond laser creates a thin lenticule inside the intact cornea, which is extracted through a 2–4mm micro-incision. SMILE Pro on VisuMax 800 achieves 7-second laser time.',
     'pros'=>['Flapless — preserves corneal strength','Minimal dry eye risk','2mm incision — fastest recovery for active lifestyles'],
     'cons'=>['Cannot treat hyperopia','No topography guidance in current SMILE','Enhancement procedures more complex'],
     'available'=>'SMILE Pro','slug'=>'smile-pro'],
    ['era'=>'5th Generation (2024–Present)','name'=>'Advanced Lenticule Extraction (SiLK)','desc'=>'J&J Vision\'s elita™ platform represents the latest evolution — combining lenticule extraction with an optimized laser pattern for ultra-smooth stromal beds. SiLK achieves sub-2mm incisions with 500 Hz laser speed.',
     'pros'=>['Ultra-smooth stromal bed = best visual quality','Sub-2mm incision — smallest in industry','Lowest dry eye risk of any procedure','500 Hz speed with optimized pattern'],
     'cons'=>['Highest cost (₹75,000/eye)','Limited availability — newest platform','Cannot treat hyperopia yet'],
     'available'=>'SiLK','slug'=>'silk'],
];

$platforms = [
    ['name'=>'Alcon WaveLight EX500','type'=>'Excimer Laser','speed'=>'500 Hz','tracking'=>'1,050 Hz ActiveTrack',
     'usedIn'=>['Standard LASIK','HD Contoura Vision'],'features'=>['PerfectPulse® technology','Gaussian beam profile','Topography-guided Contoura mode','Fastest excimer in market']],
    ['name'=>'Alcon WaveLight EX800 (InnovEyes)','type'=>'Excimer Laser','speed'=>'400 Hz (optimized)','tracking'=>'1,050 Hz ActiveTrack 3D',
     'usedIn'=>['WaveLight Plus InnovEyes'],'features'=>['AI-optimized ablation profiles','Wavefront-optimized + topography-guided','Neuro-tracker eye tracking','SmartSurface corneal compensation']],
    ['name'=>'Alcon WaveLight FS200','type'=>'Femtosecond Laser','speed'=>'200 kHz','tracking'=>'Integrated',
     'usedIn'=>['Femto + Contoura'],'features'=>['Ultra-thin flaps (90μm)','Inverted side-cut for secure flap','Customizable hinge position','6-second flap creation']],
    ['name'=>'Carl Zeiss VisuMax 800','type'=>'Femtosecond Laser','speed'=>'500 Hz','tracking'=>'CentraLign™',
     'usedIn'=>['SMILE Pro'],'features'=>['7-second laser time','2mm micro-incision','Lenticule extraction technology','Curved contact glass for comfort']],
    ['name'=>'J&J Vision elita™','type'=>'Femtosecond Laser','speed'=>'500 Hz','tracking'=>'Integrated 3D',
     'usedIn'=>['SiLK'],'features'=>['Optimized lenticule pattern','Sub-2mm incision','Ultra-smooth stromal bed','Next-gen lenticule extraction']],
];
?>

<!-- Hero -->
<section class="section-padding" style="background:linear-gradient(180deg,var(--bg-surface),var(--bg-main));">
    <div class="container" style="max-width:1140px;">
        <div class="grid-2col" style="align-items:start;">
            <div>
                <span style="display:inline-block;font-size:0.75rem;font-weight:600;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:4px 12px;border-radius:999px;margin-bottom:16px;">Technology Guide</span>
                <h1 class="font-display" style="font-weight:700;font-size:clamp(1.8rem,4vw,3rem);color:var(--text-primary);margin-bottom:16px;">
                    Every LASIK Technology Available in 2026 — Explained
                </h1>
                <p style="color:var(--text-muted);font-size:1.1rem;margin-bottom:24px;">
                    From 1990s PRK to 2024's SiLK — a thorough guide to every laser vision correction technology.
                </p>
                <div style="display:flex;flex-wrap:wrap;gap:12px;">
                    <span style="display:flex;align-items:center;gap:8px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:0.85rem;font-weight:500;color:var(--text-primary);">📚 5 Generations</span>
                    <span style="display:flex;align-items:center;gap:8px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:0.85rem;font-weight:500;color:var(--text-primary);">🔬 5 Laser Platforms</span>
                    <span style="display:flex;align-items:center;gap:8px;background:var(--bg-card);border:1px solid var(--border);border-radius:8px;padding:8px 12px;font-size:0.85rem;font-weight:500;color:var(--text-primary);">👁️ 6 Procedures</span>
                </div>
            </div>
            <div><?php get_template_part('template-parts/consultation-form'); ?></div>
        </div>
    </div>
</section>

<!-- Technology Timeline -->
<section class="section-padding">
    <div class="container" style="max-width:800px;">
        <h2 class="section-heading">The Evolution of LASIK Technology</h2>
        <p class="section-subheading">5 generations of laser vision correction — from PRK to next-gen lenticule extraction</p>
        <?php foreach ($generations as $gen): ?>
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:24px 32px;margin-bottom:24px;">
                <div style="display:flex;flex-wrap:wrap;align-items:center;gap:12px;margin-bottom:12px;">
                    <span style="font-size:0.7rem;font-weight:700;color:var(--accent);background:rgba(var(--accent-rgb),0.1);padding:4px 12px;border-radius:999px;"><?php echo $gen['era']; ?></span>
                    <h3 class="font-display" style="font-weight:700;font-size:1.1rem;color:var(--text-primary);"><?php echo esc_html($gen['name']); ?></h3>
                </div>
                <p style="color:var(--text-muted);font-size:0.85rem;line-height:1.7;margin-bottom:20px;"><?php echo esc_html($gen['desc']); ?></p>
                <div class="grid-2col" style="margin-bottom:20px;">
                    <div>
                        <p style="font-size:0.7rem;font-weight:600;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Advantages</p>
                        <?php foreach ($gen['pros'] as $p): ?>
                            <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:6px;">
                                <span style="color:var(--accent);flex-shrink:0;">✓</span>
                                <span style="font-size:0.85rem;color:var(--text-primary);"><?php echo esc_html($p); ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                    <div>
                        <p style="font-size:0.7rem;font-weight:600;color:var(--text-primary);text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Limitations</p>
                        <?php foreach ($gen['cons'] as $c): ?>
                            <div style="display:flex;align-items:flex-start;gap:8px;margin-bottom:6px;">
                                <span style="color:#ef4444;flex-shrink:0;">✕</span>
                                <span style="font-size:0.85rem;color:var(--text-muted);"><?php echo esc_html($c); ?></span>
                            </div>
                        <?php endforeach; ?>
                    </div>
                </div>
                <div style="display:flex;align-items:center;justify-content:space-between;background:var(--bg-surface);border-radius:12px;padding:16px;">
                    <div>
                        <p style="font-size:0.7rem;color:var(--text-muted);">Available at Centre for Lasik as</p>
                        <p class="font-display" style="font-weight:700;font-size:0.85rem;color:var(--text-primary);"><?php echo esc_html($gen['available']); ?></p>
                    </div>
                    <a href="/procedures/<?php echo esc_attr($gen['slug']); ?>" class="btn btn-primary" style="padding:8px 16px;font-size:0.8rem;">View Details →</a>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Laser Platforms -->
<section class="section-padding" style="background:var(--bg-surface);">
    <div class="container" style="max-width:960px;">
        <h2 class="section-heading">Laser Platforms We Use</h2>
        <p class="section-subheading">The actual hardware behind each procedure — every platform is FDA-approved</p>
        <?php foreach ($platforms as $p): ?>
            <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:24px;margin-bottom:16px;">
                <h3 class="font-display" style="font-weight:700;color:var(--text-primary);margin-bottom:8px;"><?php echo esc_html($p['name']); ?></h3>
                <div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:16px;">
                    <span style="font-size:0.7rem;background:rgba(var(--accent-rgb),0.1);color:var(--accent);padding:4px 8px;border-radius:999px;"><?php echo $p['type']; ?></span>
                    <span style="font-size:0.7rem;background:var(--bg-surface);color:var(--text-muted);padding:4px 8px;border-radius:999px;">Speed: <?php echo $p['speed']; ?></span>
                    <span style="font-size:0.7rem;background:var(--bg-surface);color:var(--text-muted);padding:4px 8px;border-radius:999px;">Tracking: <?php echo $p['tracking']; ?></span>
                </div>
                <p style="font-size:0.8rem;color:var(--text-muted);margin-bottom:12px;">Used in: <?php echo implode(', ', $p['usedIn']); ?></p>
                <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:8px;">
                    <?php foreach ($p['features'] as $f): ?>
                        <div style="display:flex;align-items:flex-start;gap:8px;background:var(--bg-surface);border-radius:8px;padding:8px 10px;">
                            <span style="color:var(--accent);flex-shrink:0;font-size:0.75rem;">⚡</span>
                            <span style="font-size:0.75rem;color:var(--text-primary);"><?php echo esc_html($f); ?></span>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
</section>

<!-- Comparison Table -->
<section class="section-padding">
    <div class="container" style="max-width:1000px;">
        <h2 class="section-heading">Technology Comparison at a Glance</h2>
        <div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;overflow:hidden;">
            <div style="overflow-x:auto;">
                <table class="comparison-table" style="width:100%;font-size:0.75rem;">
                    <thead>
                        <tr style="background:var(--bg-surface);">
                            <th style="padding:12px;text-align:left;font-weight:700;">Feature</th>
                            <?php foreach ($procedures as $p): ?>
                                <th style="padding:12px;text-align:center;font-weight:700;">
                                    <a href="/procedures/<?php echo esc_attr($p['slug']); ?>" style="color:var(--text-primary);text-decoration:none;"><?php echo esc_html($p['name']); ?></a>
                                </th>
                            <?php endforeach; ?>
                        </tr>
                    </thead>
                    <tbody>
                        <?php
                        $rows = [
                            ['label'=>'Price/Eye','key'=>'price','format'=>'price'],
                            ['label'=>'Technique','key'=>'techType','format'=>'type'],
                            ['label'=>'Blade-Free','key'=>'bladeFree','format'=>'bool'],
                            ['label'=>'Flapless','key'=>'flapless','format'=>'bool'],
                            ['label'=>'Topo-Guided','key'=>'topoGuided','format'=>'bool'],
                            ['label'=>'Incision','key'=>'incision','format'=>'text'],
                            ['label'=>'Laser Speed','key'=>'laserSpeed','format'=>'text'],
                            ['label'=>'Dry Eye Risk','key'=>'dryEyeRisk','format'=>'text'],
                            ['label'=>'Thin Cornea Safe','key'=>'thinCorneaSafe','format'=>'bool'],
                            ['label'=>'Recovery','key'=>'recovery','format'=>'text'],
                        ];
                        foreach ($rows as $row): ?>
                            <tr style="border-top:1px solid var(--border);">
                                <td style="padding:10px 12px;font-weight:500;color:var(--text-primary);"><?php echo $row['label']; ?></td>
                                <?php foreach ($procedures as $p):
                                    $val = $p[$row['key']] ?? '';
                                    if ($row['format']==='price') $val = format_price_tech($p['price']);
                                    elseif ($row['format']==='type') $val = $val==='flap' ? 'Flap-based' : 'Lenticule';
                                    elseif ($row['format']==='bool') $val = $val ? '✅' : '❌';
                                ?>
                                    <td style="padding:10px 12px;text-align:center;color:var(--text-muted);"><?php echo $val; ?></td>
                                <?php endforeach; ?>
                            </tr>
                        <?php endforeach; ?>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</section>

<!-- CTA -->
<section class="section-padding" style="background:var(--primary);">
    <div class="container" style="max-width:720px;text-align:center;">
        <h2 class="font-display" style="font-weight:700;font-size:clamp(1.3rem,3vw,1.8rem);color:var(--primary-foreground);margin-bottom:12px;">Not Sure Which Technology Suits You?</h2>
        <p style="color:rgba(255,255,255,0.8);margin-bottom:24px;">Our free 90-minute diagnostic maps your cornea and recommends the best-fit procedure.</p>
        <?php get_template_part('template-parts/consultation-form-compact'); ?>
    </div>
</section>

<?php get_template_part('template-parts/cta-banner'); ?>
<?php get_footer(); ?>
