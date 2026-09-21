<?php

$widget = $args['widget'] ?? "";
$title = $widget['title'] ?? "";
$text = $widget['text'] ?? "";
$link = $widget['link']['text'] ?? "";
$popup_class_name = $widget['link']['popup_class_name'] ?? "";
$label = str_replace("<span>", "", str_replace("</span>", "", $link));

$form_title = "Customer Mailing List Signup";
$form_code = "24266376";
if ($popup_class_name == "performer-form") {
    $form_title = "Performer Mailing List Signup";
    $form_code = "24266377";
}

echo <<<HTML
    <div class="widget">
        <div class="text-box">
            <h2 class="title">{$title}</h2>
            <div class="text">{$text}</div>
        </div>
        <div class="primary" data-title="{$form_title}" data-code="{$form_code}" data-class="{$popup_class_name}" aria-label="{$label}">{$link}</div>
    </div>
HTML;
