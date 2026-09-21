<?php

$section = $args['section'] ?? "";

$title = $section['title'] ?? "";
$intro = $section['intro'] ?? "";
$promoters = $section['promoters'] ?? "";

echo <<<HTML
<section class="applications">
    <div class="inner-wrapper">
        <div class="content-section fadeUp">
            <h3 class="title">{$title}</h3>
            <div class="content">
                {$intro}
            </div>
        </div>
        <div class="promoters-wrapper">
HTML;

if ($promoters) {
    foreach ($promoters as $promoter) {
        get_template_part('template-parts/cards/promoter', null, ['widget' => $promoter]);
    }
}

echo <<<HTML
        </div>
    </div>
</section>
HTML;
