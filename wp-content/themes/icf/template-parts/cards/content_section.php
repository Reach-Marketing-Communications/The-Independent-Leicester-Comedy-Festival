<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$content = $section['content'] ?? "";
$logo_link = $section['logo_link'] ?? "";
$logo_link_url = $section['logo_link_url'] ?? "";
$icon = $section['icon'];


echo <<<HTML
    <div class="content-section fadeUp">
        <h3 class="title">{$title}</h3>
        <div class="content">
            <div class="icon">
                <img src="{$icon['url']}" alt="Icon representing {$title}" />
            </diV>
            {$content}
HTML;

if ($logo_link) {
    echo <<<HTML
        <a class="primary" href="{$logo_link_url}" target="_blank">
            <img src="{$logo_link['url']}" alt="image representing {$title}" target="_blank" />
        </a>
    HTML;
}

echo <<<HTML
        </div>
    </div>
HTML;
