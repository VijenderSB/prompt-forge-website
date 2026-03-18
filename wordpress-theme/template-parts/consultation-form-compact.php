<?php
/**
 * Compact Consultation Form — inline CTA variant
 */
$json = file_get_contents(get_template_directory() . '/database/siteData.json');
$site = json_decode($json, true);
$brand = $site['brand'];
?>
<form action="#" method="post" style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;max-width:480px;margin:0 auto;">
    <input type="text" name="name" placeholder="Your Name" required
        style="flex:1;min-width:140px;padding:10px 14px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;font-size:0.85rem;background:rgba(255,255,255,0.1);color:white;">
    <input type="tel" name="phone" placeholder="Phone Number" required
        style="flex:1;min-width:140px;padding:10px 14px;border:1px solid rgba(255,255,255,0.2);border-radius:8px;font-size:0.85rem;background:rgba(255,255,255,0.1);color:white;">
    <button type="submit" class="btn btn-secondary" style="padding:10px 24px;font-size:0.85rem;font-weight:600;white-space:nowrap;">
        Book Free Consultation
    </button>
</form>
<p style="font-size:0.65rem;color:rgba(255,255,255,0.6);text-align:center;margin-top:8px;">
    Or call <a href="tel:<?php echo esc_attr($brand['phone']); ?>" style="color:white;font-weight:600;"><?php echo esc_html($brand['phoneDisplay']); ?></a>
</p>
