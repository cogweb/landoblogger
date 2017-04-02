<?php

// Child theme setup
function lando_enqueue_styles() {

    $parent_style = 'blankslate-style';
    wp_enqueue_style( $parent_style, get_template_directory_uri() . '/style.css' );

    wp_enqueue_style( 'child-style',
        get_stylesheet_directory_uri() . '/style.css',
        array( $parent_style ),
        wp_get_theme()->get('Version')
    );
}
add_action( 'wp_enqueue_scripts', 'lando_enqueue_styles' );

// Hide the pesky admin bar
show_admin_bar(false);

?>
