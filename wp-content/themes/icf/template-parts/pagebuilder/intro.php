<?php

$section = $args['section'] ?? "";
$top_title = $section['top_title'] ? '<span class="top-title owners">' . $section['top_title'] . '</span>' : "";
$title = $section['title'] ? $top_title  . $section['title'] : "";
$intro = $section['intro'] ?? "";
$widgets = $section['widgets'] ?? "";
$flyout = $section['flyout_text'] ?? "";
$promotor = $section['promotor_text'] ?? "";
$template = get_bloginfo('template_url');

echo <<<HTML
    <section class="intro">
        <div class="inner-wrapper">
            <div class="background"><img src="{$template}/images/i-dot.svg" alt="background icon" /></div>
            <div class="intro-block">
                <h1 class="splitWords">{$title}</h1>
                <div class="intro-text fadeUp">{$intro}</div>
                <div class="widgets-wrapper">
HTML;

if ($widgets) {
    foreach ($widgets as $widget) {
        get_template_part('template-parts/cards/widget', null, ['widget' => $widget]);
    }
}

echo <<<HTML
                </div>
            </div>
            <div class="promotor-block">
                <div class="flyout fadeUpReverse">{$flyout}</div>
                <div class="promotor fadeUp">{$promotor}</div>
            </div>
        </div>
</section>
HTML;
