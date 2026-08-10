<?php

if (! defined('_S_VERSION')) {
    // Replace the version number of the theme on each release.
    define('_S_VERSION', '1.0.0');
}

function reach_setup()
{
    add_theme_support('post-thumbnails');

    // This theme uses wp_nav_menu() in one location.
    register_nav_menus(
        [
            'menu-1' => esc_html__('Primary', 'reach'),
            'menu-2' => esc_html__('Footer', 'reach'),
        ]
    );

    add_theme_support(
        'custom-logo',
        [
            'height'      => 250,
            'width'       => 250,
            'flex-width'  => true,
            'flex-height' => true,
        ]
    );
}
add_action('after_setup_theme', 'reach_setup');

function reach_scripts()
{
    if (is_singular() && comments_open() && get_option('thread_comments')) {
        wp_enqueue_script('comment-reply');
    }
}
add_action('wp_enqueue_scripts', 'reach_scripts');

function vc_remove_wp_ver_css_js($src)
{
    if (strpos($src, 'ver=')) {
        $src = remove_query_arg('ver', $src);
    }
    return $src;
}
add_filter('style_loader_src', 'vc_remove_wp_ver_css_js', 9999);
add_filter('script_loader_src', 'vc_remove_wp_ver_css_js', 9999);

function reach_assets()
{
    //$version = filemtime(get_template_directory_uri() . '/style.css');
    $version = time();
    wp_enqueue_style("reach-style", get_template_directory_uri() . '/style.css?v=' . $version, [], $version);
    wp_enqueue_script('jquery');
    wp_enqueue_script('reach-scripts', get_template_directory_uri() . '/js/scripts.js?v=' . $version, array(), $version);
    wp_enqueue_script('gsap-js', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js?v=' . $version, array(), false, true);
    wp_enqueue_script('gsap-js2', 'https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js?v=' . $version, array('gsap-js'), false, true);
    wp_enqueue_script('gsap-js3', 'https://cdn.jsdelivr.net/npm/gsap@3.15/dist/SplitText.min.js?v=' . $version, array('gsap-js'), false, true);
    wp_enqueue_script('gsap-js5', 'https://cdn.jsdelivr.net/npm/gsap@3.15/dist/ScrollToPlugin.min.js?v=' . $version, array('gsap-js'), false, true);
    wp_enqueue_script('gsap-js6', get_template_directory_uri() . '/js/gsap.js?v=' . $version, array('gsap-js'), false, true);
}
add_action("wp_enqueue_scripts", "reach_assets");

// remove internal emojis from WP
remove_action('wp_head', 'print_emoji_detection_script', 7);
remove_action('admin_print_scripts', 'print_emoji_detection_script');
remove_action('wp_print_styles', 'print_emoji_styles');
remove_action('admin_print_styles', 'print_emoji_styles');

// remove Gutenberg block library CSS from front end
//remove gutenberg block library from front end
function wpassist_remove_block_library_css()
{
    wp_dequeue_style('wp-block-library');
    wp_dequeue_style('wp-block-library-theme');
    wp_dequeue_style('global-styles');
    wp_dequeue_style('content-control');
    wp_dequeue_style('classic-theme-styles-inline');
}
add_action('wp_enqueue_scripts', 'wpassist_remove_block_library_css');

function reach_register_custom_image_sizes()
{
    if (! current_theme_supports('post-thumbnails')) {
        add_theme_support('post-thumbnails');
    }

    /*add_image_size('full-width', 2500, 0, true);
    add_image_size('2xl', 2000, 0, true);
    add_image_size('xl', 1440, 0, true);
    add_image_size('lg', 1280, 0, true);
    add_image_size('md', 1024, 0, true);
    add_image_size('sm', 768, 500, true);
    add_image_size('xs', 500, 400, true);*/
}
add_action('after_setup_theme', 'reach_register_custom_image_sizes');

add_filter('wpseo_metabox_prio', function () {
    return 'low';
});

// add chevrons to submit buttons through CF7
remove_action('wpcf7_init', 'wpcf7_add_form_tag_submit');
add_action('wpcf7_init', 'my_add_form_tag_submit', 10, 0);

function my_add_form_tag_submit() {
    wpcf7_add_form_tag('submit', 'my_submit_form_tag_handler');
}

function my_submit_form_tag_handler($tag) {
    return '<div class="wpcf7-form-control-wrap"><button type="submit" class="primary">Submit Enquiry</button></div>';
}
