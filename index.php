<?php get_header(); ?>

    <section id="content" role="main">
      <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
        <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
          <header>
            <h2 class="entry-title"><a href="<?php the_permalink(); ?>" title="<?php the_title_attribute(); ?>" rel="bookmark"><?php the_title(); ?></a></h2>
            <?php edit_post_link(); ?><?php if ( !is_search() ) get_template_part( 'entry', 'meta' ); ?>
          </header>
          <?php the_excerpt(); ?>
          <?php comments_template(); ?>
        </article>
      <?php endwhile; endif; ?>
      <?php get_template_part( 'nav', 'below' ); ?>
    </section>

    <?php get_sidebar(); ?>

<?php get_footer(); ?>
