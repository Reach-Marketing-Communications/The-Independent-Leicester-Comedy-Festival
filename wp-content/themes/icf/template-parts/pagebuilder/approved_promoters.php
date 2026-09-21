<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$intro = $section['intro'] ?? "";
$promoters = $section['promotors'] ?? "";

echo <<<HTML
    <section class="approved-promoters">
        <div class="inner-wrapper">            
            <div class="promoters fadeUp">
                <div class="promoters-list">
                    <h2 class="owners fadeUp">{$title}</h2>
                    <div class="intro splitLines">
                        {$intro}
                    </div>
HTML;

foreach ($promoters as $promoter) {
    echo <<<HTML
        <div class="promoter-item owners fadeVert">
            {$promoter['name']}
        </div>
    HTML;
}

echo <<<HTML
                </div>
            </div>
        </div>
    </section>
HTML;
