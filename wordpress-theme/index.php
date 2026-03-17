<?php
/**
 * Main Index Template
 *
 * Falls back to front-page.php for the homepage.
 * For blog listings, this displays posts in a grid.
 *
 * @package Centre_For_Lasik
 */
if ( ! defined( 'ABSPATH' ) ) exit;
get_header();
?>

<div style="padding-top:64px;">
  <section class="section-padding">
    <div class="container">
      <div class="section-heading centered">
        <h2><?php echo is_home() ? 'Blog' : 'Posts'; ?></h2>
        <p>Expert articles on LASIK technology, costs, recovery, and eligibility.</p>
      </div>

      <?php if ( have_posts() ) : ?>
        <div class="blog-grid">
          <?php while ( have_posts() ) : the_post(); ?>
            <a href="<?php the_permalink(); ?>" class="blog-card card-elevated">
              <div class="blog-card-body">
                <div class="blog-card-meta">
                  <?php
                  $categories = get_the_category();
                  if ( ! empty( $categories ) ) :
                  ?>
                    <span class="blog-category"><?php echo esc_html( $categories[0]->name ); ?></span>
                  <?php endif; ?>
                  <span class="blog-date"><?php echo get_the_date( 'Y-m-d' ); ?></span>
                </div>
                <h3><?php the_title(); ?></h3>
                <p><?php echo wp_trim_words( get_the_excerpt(), 20, '...' ); ?></p>
                <span class="blog-read-more">Read article →</span>
              </div>
            </a>
          <?php endwhile; ?>
        </div>

        <!-- Pagination -->
        <div class="text-center" style="margin-top:2rem;">
          <?php
          the_posts_pagination( array(
              'mid_size'  => 2,
              'prev_text' => '← Previous',
              'next_text' => 'Next →',
          ) );
          ?>
        </div>
      <?php else : ?>
        <p class="text-center" style="color:var(--muted-foreground);">No posts found.</p>
      <?php endif; ?>
    </div>
  </section>
</div>

<?php get_footer(); ?>
