<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$year = $section['year'] ?? "";
$small_year = substr($year, 0, 2);
$big_year = substr($year, 2, 2);
$intro = $section['intro'] ?? "";
$content_sections = $section['content_sections'] ?? "";

echo <<<HTML
    <section id="mission" class="our-mission">
        <div class="inner-wrapper">
            <div class="top-section">
                <h2 class="title fadeUp">{$title}</h2>
                <div class="year fadeVert">
                    <div class="small-year">{$small_year}</div>
                    <div class="big-year">{$big_year}</div>
                </div>
            </div>

            <div class="intro fadeUpReverse">
                {$intro}
            </div>

HTML;
foreach ($content_sections as $content_section) {
    get_template_part('template-parts/cards/content_section', null, ['section' => $content_section]);
}
echo <<<HTML
        </div>
    </section>
HTML;
