<?php
function scripts() {
wp_enqueue_script('jquery'); 
wp_enqueue_style ( 'main', get_stylesheet_directory_uri() . '/assets/css/site.css', false);
wp_enqueue_script( 'site', get_stylesheet_directory_uri() . '/assets/js/min/site-min.js');
}
add_action('wp_enqueue_scripts', 'scripts', 100);
