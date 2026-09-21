<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$anchor = $section['anchor'];
$template = get_bloginfo('template_url');

echo <<<HTML
<div id="{$anchor}">
<section class="page-title intro">
    <div class="inner-wrapper">
        <div class="background"><img src="{$template}/images/i-dot.svg" alt="background icon" /></div>
        <div class="intro-block">
            <h1 class="splitLines owners">{$title}</h1>
        </div>
    </div>
</section>

HTML;
