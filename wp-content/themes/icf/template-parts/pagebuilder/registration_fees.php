<?php

$section = $args['section'] ?? "";
$top_title = $section['top_title'] ?? "";
$title = $section['title'] ?? "";
$content = $section['content'] ?? "";

$fees = $section['fees'] ?? "";

echo <<<HTML
<section class="fees">
    <div class="inner-wrapper">
        <div class="content-section fadeUp">
            <h3 class="title">{$top_title}</h3>
            <div class="content">
                <h4>{$title}</h4>
                <div class="fees-wrapper">
HTML;
foreach ($fees as $fee) {
    echo <<<HTML
        <div class="fee">
            <p class="owners capacity">{$fee['capacity_text']} <strong class="owners">{$fee['capacity']}</strong></p>
            <div class="price owners">{$fee['cost']}</div>
        </div>
    HTML;
}
echo <<<HTML
                </div>
                <div class="splitLines">
                    {$content}
                </div>
            </div>
        </div>
    </div>
</section>
HTML;
