-- ============================================================
-- Centre for Lasik — MySQL Database Schema & Seed Data
-- Version: 1.0.0
-- Compatible with: MySQL 5.7+ / MariaDB 10.3+
-- ============================================================

SET NAMES utf8mb4;
SET CHARACTER SET utf8mb4;

-- ────────────────────────────────────────────────────────────
-- TABLE: brand_settings
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `brand_settings`;
CREATE TABLE `brand_settings` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `setting_key` VARCHAR(100) NOT NULL,
  `setting_value` TEXT NOT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_setting_key` (`setting_key`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `brand_settings` (`setting_key`, `setting_value`) VALUES
('brand_name', 'Centre for Lasik'),
('domain', 'https://laser.fyi'),
('phone', '+91-9667770450'),
('phone_display', '+91-96677 70450'),
('discount', '30%'),
('tagline', 'See the World Without Glasses'),
('email', 'info@laser.fyi'),
('address', 'New Delhi, India');

-- ────────────────────────────────────────────────────────────
-- TABLE: procedures
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `procedure_features`;
DROP TABLE IF EXISTS `procedures`;
CREATE TABLE `procedures` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `price` DECIMAL(10,2) NOT NULL,
  `original_price` DECIMAL(10,2) NOT NULL,
  `discount_percent` TINYINT UNSIGNED NOT NULL DEFAULT 0,
  `tagline` VARCHAR(500) NOT NULL,
  `usp` VARCHAR(500) NOT NULL,
  `technology` VARCHAR(500) NOT NULL,
  `duration` VARCHAR(100) NOT NULL,
  `recovery` VARCHAR(100) NOT NULL,
  `description` TEXT NOT NULL,
  `badge` VARCHAR(50) DEFAULT NULL,
  `tech_type` ENUM('flap', 'lenticule') NOT NULL,
  `blade_free` TINYINT(1) NOT NULL DEFAULT 0,
  `flapless` TINYINT(1) NOT NULL DEFAULT 0,
  `topo_guided` TINYINT(1) NOT NULL DEFAULT 0,
  `incision` VARCHAR(100) NOT NULL,
  `laser_speed` VARCHAR(50) NOT NULL,
  `dry_eye_risk` ENUM('Lowest', 'Low', 'Moderate', 'High') NOT NULL DEFAULT 'Moderate',
  `thin_cornea_safe` TINYINT(1) NOT NULL DEFAULT 0,
  `sort_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_active_sort` (`is_active`, `sort_order`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `procedures` (`id`, `name`, `slug`, `price`, `original_price`, `discount_percent`, `tagline`, `usp`, `technology`, `duration`, `recovery`, `description`, `badge`, `tech_type`, `blade_free`, `flapless`, `topo_guided`, `incision`, `laser_speed`, `dry_eye_risk`, `thin_cornea_safe`, `sort_order`) VALUES
(1, 'Standard LASIK', 'standard-lasik', 8999.00, 15000.00, 40, 'Affordable bladeless laser vision correction — proven & trusted', 'Budget-friendly LASIK with proven excimer laser technology for clear vision', 'Excimer Laser Platform', '10–15 minutes per eye', '2–3 days', 'Standard LASIK is the most affordable entry point to laser vision correction. Using a proven excimer laser platform, it corrects myopia, hyperopia, and astigmatism with a quick, painless procedure. Ideal for patients seeking freedom from glasses at the most accessible price point.', 'Value', 'flap', 0, 0, 0, '100μ flap', '250 Hz', 'Moderate', 0, 1),
(2, 'WaveLight Plus InnovEyes', 'innovEyes', 49000.00, 70000.00, 30, 'AI-guided 400 Hz — 1,050 eye-tracking points per second', 'PerfectPulse Technology® tracks eye 1,050 times/sec for sub-micron precision', 'WaveLight Refractive Suite with InnovEyes + PerfectPulse Technology®', '10–15 minutes per eye', '1 day', 'WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser system. Its proprietary PerfectPulse Technology® tracks eye position 1,050 times per second, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz speed.', 'Premium', 'flap', 1, 0, 1, '80μ flap', '400 Hz', 'Low', 1, 2),
(3, 'HD Contoura Vision', 'contoura-vision', 25500.00, 42500.00, 40, 'Topography-guided — 22,000 unique corneal data points', '22,000-point corneal mapping for personalized treatment', 'Wavelight EX500 Excimer Laser + Topolyzer Vario', '10–15 minutes per eye', '1–2 days', 'Contoura Vision uses advanced topographic mapping to create a personalized treatment plan based on 22,000 unique elevation points on your cornea. This allows for corrections beyond just your spectacle prescription, addressing microscopic irregularities for potentially sharper-than-6/6 vision.', 'Most Popular', 'flap', 0, 0, 1, '100μ flap', '400 Hz', 'Low', 1, 3),
(4, 'EPI LASIK', 'epi-lasik', 18000.00, 30000.00, 40, 'Non-detectable laser vision correction — no flap, no cut', 'Surface ablation technique — cornea remains untouched structurally, ideal for thin corneas', 'Advanced Excimer Laser with Epi-separator', '15–20 minutes per eye', '5–7 days', 'EPI LASIK is a non-detectable, flapless surface ablation procedure. Unlike traditional LASIK, it does not cut into the corneal stroma — making it structurally the safest option. The epithelial sheet is gently separated and repositioned after laser reshaping. Ideal for thin corneas, contact sports athletes, and armed forces candidates.', NULL, 'flap', 1, 1, 0, 'No incision', '400 Hz', 'Moderate', 1, 4),
(5, 'SiLK', 'silk', 75000.00, 95000.00, 20, 'Premium lenticule — ultra-smooth stromal bed, best night vision', 'Next-gen lenticule tech with sub-2mm incision and ultra-smooth stromal bed', 'Johnson & Johnson elita Platform with SiLK Technology', '8–12 minutes per eye', '1 day', 'SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution in flapless lenticule surgery, featuring a sub-2mm incision and an ultra-smooth stromal bed. Clinical evidence indicates superior night vision and more predictable outcomes.', 'Latest Tech', 'lenticule', 1, 1, 0, '<2mm incision', '500 Hz', 'Lowest', 1, 5),
(6, 'SMILE Pro', 'smile-pro', 65000.00, 85000.00, 20, 'Flapless lenticule — 2mm incision, minimal dry eye', 'No flap, no blade — 2mm micro-incision only, fastest recovery', 'Carl Zeiss VisuMax 800', '7 seconds laser time per eye', '1 day', 'SMILE Pro is a flapless lenticule-based surgery. Instead of creating a corneal flap, the femtosecond laser cuts a disc of corneal tissue which is removed through a tiny 2mm incision. Preserves more corneal strength with significantly less dry eye.', NULL, 'lenticule', 1, 1, 0, '2mm incision', '500 Hz', 'Lowest', 1, 6);

-- ────────────────────────────────────────────────────────────
-- TABLE: procedure_features
-- ────────────────────────────────────────────────────────────
CREATE TABLE `procedure_features` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `procedure_id` INT UNSIGNED NOT NULL,
  `feature` VARCHAR(255) NOT NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  KEY `fk_pf_procedure` (`procedure_id`),
  CONSTRAINT `fk_pf_procedure` FOREIGN KEY (`procedure_id`) REFERENCES `procedures` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `procedure_features` (`procedure_id`, `feature`, `sort_order`) VALUES
(1, 'Most Affordable', 1), (1, 'Proven Technology', 2), (1, 'Quick Procedure', 3), (1, 'EMI from ₹750/mo', 4),
(2, 'PerfectPulse Technology®', 1), (2, '400 Hz High-Speed', 2), (2, '6D Eye Tracking', 3), (2, 'Personalised Ablation', 4),
(3, '6/4 Super Sharp Vision', 1), (3, 'No Halos, No Glare', 2), (3, 'Topography-Guided', 3), (3, 'Visual Axis Treatment', 4),
(4, 'No Flap Created', 1), (4, 'Structurally Safest', 2), (4, 'Thin Cornea Friendly', 3), (4, 'Armed Forces Approved', 4),
(5, 'Ultra-Smooth Stromal Bed', 1), (5, 'Sub-2mm Incision', 2), (5, 'Least Biomechanical Impact', 3), (5, 'Best Night Vision', 4),
(6, 'Flapless — No Flap', 1), (6, '2mm Micro-Incision', 2), (6, 'Minimal Dry Eye', 3), (6, 'Thin Cornea Friendly', 4);

-- ────────────────────────────────────────────────────────────
-- TABLE: centres
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `centres`;
CREATE TABLE `centres` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `slug` VARCHAR(255) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `hospital` VARCHAR(255) NOT NULL,
  `address` TEXT NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `lat` DECIMAL(10,6) NOT NULL,
  `lng` DECIMAL(10,6) NOT NULL,
  `operating_hours` VARCHAR(100) DEFAULT 'Mon–Sat, 9:00 AM – 7:00 PM',
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`),
  KEY `idx_city` (`city`),
  KEY `idx_state` (`state`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `centres` (`name`, `slug`, `city`, `state`, `hospital`, `address`, `phone`, `lat`, `lng`) VALUES
('Centre for Lasik - Lajpat Nagar', 'lajpat-nagar', 'Delhi', 'Delhi NCR', 'Centre for Sight', 'E-33, Lajpat Nagar Part 2, New Delhi 110024', '+91-9667770450', 28.570000, 77.240000),
('Centre for Lasik - Rajouri Garden', 'rajouri-garden', 'Delhi', 'Delhi NCR', 'Centre for Sight', 'A-29, Rajouri Garden, New Delhi 110027', '+91-9667770450', 28.649200, 77.122500),
('Centre for Lasik - Dwarka', 'dwarka', 'Delhi', 'Delhi NCR', 'Centre for Sight', 'Sector 6, Dwarka, New Delhi 110075', '+91-9667770450', 28.582300, 77.050000),
('Centre for Lasik - Noida', 'noida', 'Noida', 'Delhi NCR', 'Centre for Sight', 'H-33, Sector 18, Noida 201301', '+91-9667770450', 28.570600, 77.321900),
('Centre for Lasik - Gurgaon', 'gurgaon', 'Gurgaon', 'Haryana', 'Centre for Sight', 'SCO 834, Sector 22, Gurgaon 122002', '+91-9667770450', 28.459500, 77.026600);

-- ────────────────────────────────────────────────────────────
-- TABLE: top_cities
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `top_cities`;
CREATE TABLE `top_cities` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `state` VARCHAR(100) NOT NULL,
  `slug` VARCHAR(100) NOT NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_slug` (`slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `top_cities` (`name`, `state`, `slug`, `sort_order`) VALUES
('Delhi', 'Delhi NCR', 'delhi', 1),
('Noida', 'Delhi NCR', 'noida', 2),
('Gurgaon', 'Haryana', 'gurgaon', 3),
('Mumbai', 'Maharashtra', 'mumbai', 4),
('Pune', 'Maharashtra', 'pune', 5),
('Bangalore', 'Karnataka', 'bangalore', 6),
('Hyderabad', 'Telangana', 'hyderabad', 7),
('Chennai', 'Tamil Nadu', 'chennai', 8),
('Kolkata', 'West Bengal', 'kolkata', 9),
('Jaipur', 'Rajasthan', 'jaipur', 10);

-- ────────────────────────────────────────────────────────────
-- TABLE: testimonials
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `testimonials`;
CREATE TABLE `testimonials` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `city` VARCHAR(100) NOT NULL,
  `age` TINYINT UNSIGNED NOT NULL,
  `rating` TINYINT UNSIGNED NOT NULL DEFAULT 5,
  `text` TEXT NOT NULL,
  `procedure_slug` VARCHAR(255) DEFAULT NULL,
  `is_featured` TINYINT(1) NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_featured` (`is_featured`, `is_active`),
  KEY `idx_procedure` (`procedure_slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- General testimonials
INSERT INTO `testimonials` (`name`, `city`, `age`, `rating`, `text`, `is_featured`) VALUES
('Keshav S.', 'Delhi', 36, 5, 'More than fully satisfied with the excellent service and special discount on LASIK surgery. Thanks to the whole team for amazing support.', 1),
('Sania G.', 'Delhi', 23, 5, 'Had budget constraints and high eye power. The team made thin flap SBK LASIK possible within my budget with great support throughout.', 1),
('Habib M.', 'Noida', 29, 5, 'Just wonderful to see clear and sharp without glasses. The whole journey was so smooth with the right information and best possible discount.', 1),
('Pooja M.', 'Gurgaon', 36, 5, 'Used contact lenses for more than 8 years. The right guidance about latest technology helped me finally get rid of glasses at discounted rates.', 1),
('Raj K.', 'Delhi', 31, 5, 'Was nervous about surgery but the team explained everything clearly. Contoura Vision gave me better than 6/6 vision. Life-changing experience!', 1),
('Priya S.', 'Mumbai', 28, 5, 'Got SMILE Pro done and the laser was over in 7 seconds! I was back at work in 2 days. The team at Centre for Lasik is incredibly professional.', 1);

-- Procedure-specific testimonials
INSERT INTO `testimonials` (`name`, `city`, `age`, `rating`, `text`, `procedure_slug`) VALUES
('Amit R.', 'Delhi', 24, 5, 'Got Standard LASIK at ₹8,999/eye — best value for money! I had -3.5 power and now I can see perfectly without glasses.', 'standard-lasik'),
('Neha T.', 'Noida', 27, 5, 'I was on a tight budget and Standard LASIK was perfect. Clear vision from day 2 and EMI option made it super affordable.', 'standard-lasik'),
('Rohit V.', 'Gurgaon', 30, 5, 'Wearing glasses for 12 years was frustrating. Standard LASIK gave me freedom at an unbeatable price.', 'standard-lasik'),
('Ankita M.', 'Delhi', 32, 5, 'The PerfectPulse Technology tracking 1,050 times/sec gave me so much confidence. My vision is sharper than 6/6 now.', 'innovEyes'),
('Vikram S.', 'Mumbai', 35, 5, 'Had high astigmatism and WaveLight InnovEyes was the best option. The 400 Hz laser was incredibly fast.', 'innovEyes'),
('Deepa K.', 'Bangalore', 29, 5, 'The AI-guided 6D eye tracking made me feel completely safe. My -7 power was corrected flawlessly.', 'innovEyes'),
('Meera J.', 'Delhi', 26, 5, '22,000-point mapping showed irregularities my regular prescription missed. I achieved 6/4 super vision!', 'contoura-vision'),
('Arjun P.', 'Hyderabad', 33, 5, 'Had -5 with -2 cylinder. Contoura Vision at ₹25,500/eye was the best decision. Zero glare at night.', 'contoura-vision'),
('Kavita R.', 'Chennai', 28, 5, 'The topography-guided precision is incredible. Every micro-irregularity was corrected.', 'contoura-vision'),
('Capt. Ravi M.', 'Delhi', 25, 5, 'Needed EPI LASIK for armed forces medical. No flap means no detection — passed with flying colors!', 'epi-lasik'),
('Sneha D.', 'Pune', 30, 5, 'Had thin corneas so regular LASIK wasn''t possible. EPI LASIK was perfect — no cutting, structurally safe.', 'epi-lasik'),
('Aakash G.', 'Jaipur', 22, 5, 'As a boxer, I needed a flapless procedure. EPI LASIK at ₹18,000/eye was affordable and safe for contact sports.', 'epi-lasik'),
('Nisha A.', 'Delhi', 31, 5, 'SiLK''s ultra-smooth stromal bed technology gave me the best night vision I''ve ever had. Zero starbursts.', 'silk'),
('Dr. Sameer K.', 'Mumbai', 38, 5, 'As a surgeon, I researched extensively. SiLK by J&J has the most predictable outcomes.', 'silk'),
('Tanya B.', 'Gurgaon', 27, 5, 'Chose SiLK for the latest lenticule technology. Painless and back to work next day.', 'silk'),
('Rahul T.', 'Delhi', 29, 5, '7 seconds laser time — I blinked and it was done! SMILE Pro''s 2mm incision healed so fast.', 'smile-pro'),
('Ishita N.', 'Noida', 25, 5, 'Had dry eye concerns and SMILE Pro preserves more corneal nerves. Zero dry eye issues post-surgery.', 'smile-pro'),
('Manish C.', 'Kolkata', 34, 5, 'The flapless approach of SMILE Pro gave me peace of mind. Carl Zeiss VisuMax 800 is cutting-edge.', 'smile-pro');

-- ────────────────────────────────────────────────────────────
-- TABLE: faqs
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `faqs`;
CREATE TABLE `faqs` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `category` VARCHAR(50) NOT NULL,
  `question` TEXT NOT NULL,
  `answer` TEXT NOT NULL,
  `procedure_slug` VARCHAR(255) DEFAULT NULL,
  `page_slug` VARCHAR(100) DEFAULT NULL,
  `sort_order` INT NOT NULL DEFAULT 0,
  `is_active` TINYINT(1) NOT NULL DEFAULT 1,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_category` (`category`),
  KEY `idx_procedure` (`procedure_slug`),
  KEY `idx_page` (`page_slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- General FAQs
INSERT INTO `faqs` (`category`, `question`, `answer`, `sort_order`) VALUES
('technology', 'What is WaveLight Plus InnovEyes LASIK?', 'WaveLight Plus InnovEyes by Alcon is the most advanced flap-based refractive laser platform. Its PerfectPulse Technology® tracks your eye position 1,050 times per second, ensuring every laser pulse lands with sub-micron accuracy at 400 Hz speed.', 1),
('technology', 'What is SMILE Pro eye surgery?', 'SMILE Pro (Small Incision Lenticule Extraction) is a flapless lenticule-based procedure — the laser creates a disc of corneal tissue inside the eye, which is removed through a 2mm incision. No corneal flap, no blade. Cost: ₹65,000/eye.', 2),
('technology', 'What is SiLK eye surgery?', 'SiLK (Smooth Incision Lenticule Keratomileusis) is the latest evolution of flapless lenticule surgery. It uses an optimised laser pattern to create an ultra-smooth stromal bed through a sub-2mm incision. Cost: ₹75,000/eye.', 3),
('technology', 'What is EPI LASIK?', 'EPI LASIK is a non-detectable surface ablation procedure where the epithelial layer is gently separated instead of cutting a flap. The corneal structure remains intact, making it the safest option for thin corneas and armed forces candidates.', 4),
('technology', 'What is HD Contoura Vision?', 'HD Contoura Vision uses 22,000-point topographic mapping to create a fully personalized ablation profile. Clinical data shows it can deliver better-than-6/6 vision in over 30% of patients.', 5),
('general', 'What is the difference between LASIK and SMILE Pro / SiLK?', 'LASIK creates a corneal flap and reshapes tissue with an excimer laser. SMILE Pro and SiLK are flapless — a lenticule of corneal tissue is extracted through a tiny incision. Flapless procedures have lower dry eye risk and better corneal biomechanical stability.', 6),
('general', 'Is LASIK painful?', 'No. Anaesthetic (numbing) eye drops are applied before the procedure. You feel zero pain — most patients describe a mild pressure sensation lasting only a few seconds.', 7),
('general', 'How long does LASIK last?', 'LASIK permanently reshapes the cornea, so the correction is lifelong. In over 95% of patients, vision remains stable for decades. Presbyopia after 40-45 is unrelated to the procedure.', 8),
('general', 'Is LASIK FDA-approved?', 'Yes. All six technologies offered — Standard LASIK, WaveLight InnovEyes, HD Contoura Vision, EPI LASIK, SMILE Pro, and SiLK — are approved by the US FDA and Indian regulatory authorities.', 9),
('general', 'Can both eyes be treated on the same day?', 'Yes. Both eyes are treated in the same session, one after the other. The entire procedure typically takes 15–20 minutes for both eyes.', 10),
('eligibility', 'Am I eligible for LASIK?', 'Most adults aged 18+ with a stable prescription (unchanged for 12 months) are eligible. LASIK corrects myopia -0.5D to -12D, hyperopia +0.5D to +6D, and astigmatism up to 6D. Minimum corneal thickness ~480μ required.', 11),
('eligibility', 'Can I get LASIK if I have dry eyes?', 'Mild dry eye can often be managed before surgery. SMILE Pro and SiLK are preferred for patients with borderline dry eye as they preserve more corneal nerves. Severe dry eye may be a contraindication.', 12),
('eligibility', 'Is LASIK safe for high cylindrical power?', 'Yes. HD Contoura Vision and WaveLight Plus InnovEyes are specifically designed for high astigmatism correction up to 6D using 22,000-point topographic mapping.', 13),
('cost', 'How much does LASIK cost in India?', 'Standard LASIK ₹8,999/eye, EPI LASIK ₹18,000/eye, Contoura Vision ₹25,500/eye, InnovEyes ₹49,000/eye, SMILE Pro ₹65,000/eye, SiLK ₹75,000/eye. All inclusive. EMI from ₹1,500/month.', 14),
('cost', 'Do you offer EMI for LASIK surgery?', 'Yes, EMI options available from ₹1,500/month through major banks. No-cost EMI on select bank cards.', 15),
('cost', 'Are there any hidden charges?', 'Absolutely none. The price quoted is the final price — includes diagnostics, surgery, medications, and follow-ups.', 16),
('recovery', 'What is the recovery time after LASIK?', 'Day 1: Vision 80-90% clear. Day 2-3: Return to desk work. Day 7: Drive, light activity. Month 1-3: Full stabilization.', 17),
('recovery', 'What precautions should I take after LASIK?', 'No rubbing eyes for 4 weeks. Protective glasses while sleeping for 1 week. Use prescribed drops. No swimming for 2 weeks. Limit screens 2-3 days.', 18),
('armed-forces', 'Is LASIK eligible for armed forces?', 'Yes, LASIK is accepted by the Indian Armed Forces. EPI LASIK is preferred as it leaves no detectable flap. Must be done 6-12 months before medical examination.', 19),
('armed-forces', 'Which LASIK is best for NDA/CDS/SSB medical?', 'EPI LASIK is the gold standard — no corneal flap created, undetectable during medical examination. Fully meets vision standards for NDA, CDS, and SSB.', 20);

-- ────────────────────────────────────────────────────────────
-- TABLE: clinical_studies
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `clinical_studies`;
CREATE TABLE `clinical_studies` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `procedure_slug` VARCHAR(255) NOT NULL,
  `study_title` VARCHAR(500) NOT NULL,
  `study_type` VARCHAR(255) NOT NULL,
  `sample_size` VARCHAR(100) NOT NULL,
  `key_outcomes` TEXT NOT NULL,
  `link` VARCHAR(500) NOT NULL,
  `link_label` VARCHAR(100) DEFAULT 'View Study',
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_procedure` (`procedure_slug`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `clinical_studies` (`procedure_slug`, `study_title`, `study_type`, `sample_size`, `key_outcomes`, `link`, `link_label`) VALUES
('innovEyes', 'FDA PMA Approval (WaveLight EX500 + InnovEyes Sightmap)', 'Multi-center prospective trial', '168 patients (336 eyes)', '100% ≥20/40 UCDVA, 92% within ±0.5D MRSE, 98.4% within ±1.0D', 'https://www.accessdata.fda.gov/cdrh_docs/pdf2/P020050S043B.pdf', 'FDA Report'),
('innovEyes', 'InnovEyes vs. Topography-guided LASIK (2024)', 'Prospective comparative study', '60 eyes', 'UDVA better in InnovEyes group, 48% ≥20/12.5 vision', 'https://pubmed.ncbi.nlm.nih.gov/39656251/', 'PubMed'),
('innovEyes', 'Real-World Outcomes (India)', 'Retrospective case series', '400 eyes', '100% ≥20/20, 89% ≥20/16, 51% ≥20/12, 8% ≥20/10', 'https://pubmed.ncbi.nlm.nih.gov/37595291/', 'PubMed');

-- ────────────────────────────────────────────────────────────
-- TABLE: states
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `states`;
CREATE TABLE `states` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `uk_name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

INSERT INTO `states` (`name`) VALUES
('Andhra Pradesh'), ('Assam'), ('Bihar'), ('Chhattisgarh'), ('Delhi NCR'), ('Goa'),
('Gujarat'), ('Haryana'), ('Himachal Pradesh'), ('Jharkhand'), ('Karnataka'), ('Kerala'),
('Madhya Pradesh'), ('Maharashtra'), ('Manipur'), ('Meghalaya'), ('Mizoram'), ('Nagaland'),
('Odisha'), ('Punjab'), ('Rajasthan'), ('Sikkim'), ('Tamil Nadu'), ('Telangana'),
('Tripura'), ('Uttar Pradesh'), ('Uttarakhand'), ('West Bengal');

-- ────────────────────────────────────────────────────────────
-- TABLE: consultation_leads (for form submissions)
-- ────────────────────────────────────────────────────────────
DROP TABLE IF EXISTS `consultation_leads`;
CREATE TABLE `consultation_leads` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NOT NULL,
  `phone` VARCHAR(20) NOT NULL,
  `city` VARCHAR(100) DEFAULT NULL,
  `procedure_interest` VARCHAR(255) DEFAULT NULL,
  `source_page` VARCHAR(255) DEFAULT NULL,
  `utm_source` VARCHAR(100) DEFAULT NULL,
  `utm_medium` VARCHAR(100) DEFAULT NULL,
  `utm_campaign` VARCHAR(255) DEFAULT NULL,
  `status` ENUM('new', 'contacted', 'scheduled', 'completed', 'lost') NOT NULL DEFAULT 'new',
  `notes` TEXT DEFAULT NULL,
  `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  `updated_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `idx_status` (`status`),
  KEY `idx_created` (`created_at`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- ============================================================
-- END OF DATABASE SCHEMA & SEED DATA
-- ============================================================
