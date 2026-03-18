<?php
/**
 * Consultation Form — reusable lead capture widget
 */
$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$brand = $site['brand'];
?>
<div style="background:var(--bg-card);border:1px solid var(--border);border-radius:16px;padding:24px;box-shadow:0 4px 12px rgba(0,0,0,0.06);">
    <h3 class="font-display" style="font-weight:700;font-size:1rem;color:var(--text-primary);margin-bottom:4px;text-align:center;">Book Free Consultation</h3>
    <p style="font-size:0.75rem;color:var(--text-muted);text-align:center;margin-bottom:16px;">No obligation • 90-minute diagnostic included</p>
    <form action="#" method="post" style="display:flex;flex-direction:column;gap:12px;">
        <input type="text" name="name" placeholder="Full Name" required
            style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;background:var(--bg-main);color:var(--text-primary);">
        <input type="tel" name="phone" placeholder="Phone Number" required
            style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;background:var(--bg-main);color:var(--text-primary);">
        <input type="email" name="email" placeholder="Email (optional)"
            style="width:100%;padding:10px 14px;border:1px solid var(--border);border-radius:8px;font-size:0.85rem;background:var(--bg-main);color:var(--text-primary);">
        <button type="submit" class="btn btn-primary" style="width:100%;padding:12px;font-size:0.9rem;font-weight:600;">
            Get Free Consultation →
        </button>
        <p style="font-size:0.65rem;color:var(--text-muted);text-align:center;">
            Or call <a href="tel:<?php echo esc_attr($brand['phone']); ?>" style="color:var(--accent);font-weight:600;"><?php echo esc_html($brand['phoneDisplay']); ?></a>
        </p>
    </form>
</div>
