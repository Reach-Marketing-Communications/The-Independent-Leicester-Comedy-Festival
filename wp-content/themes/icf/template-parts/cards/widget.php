<?php

$widget = $args['widget'] ?? "";
$title = $widget['title'] ?? "";
$text = $widget['text'] ?? "";
$link = $widget['link'] ?? "";
$link_title = str_replace('&lt;', '<', str_replace('&gt;', '>', $link['title']));
$label = str_replace("<span>", "", str_replace("</span>", "", $link_title));

echo <<<HTML
    <div class="widget">
        <div class="text-box">
            <h2 class="title">{$title}</h2>
            <div class="text">{$text}</div>
        </div>
        <a class="primary" href="{$link['url']}" target="{$link['target']}" aria-label="{$label}">{$link_title}</a>
    </div>
HTML;
