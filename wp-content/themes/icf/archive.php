<?php

/**
 * The template for displaying the news archive
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Reach
 */

get_header();
?>

<main id="primary" class="site-main">
    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <?php
        get_template_part('template-parts/content', 'page');
    ?>
    </article><!-- #post-<?php the_ID(); ?> -->
</main><!-- #main -->

<?php
get_sidebar();
get_footer();
