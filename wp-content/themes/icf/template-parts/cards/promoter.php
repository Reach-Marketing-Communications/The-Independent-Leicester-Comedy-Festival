<?php

$widget = $args['widget'] ?? "";
$title = $widget['name'] ?? "";
$booking_for = $widget['booking_for'] ?? "";
$link = $widget['link_to'] ?? "";
$more_info = $widget['more_info_text'] ?? "";
$contact_text = $widget['contact_text'] ?? "";
$contact_name = $widget['contact_name'] ?? "";
$contact_email = $widget['contact_email'] ?? "";


echo <<<HTML
    <div class="promoter">
        <div class="left">
            <h2 class="owners title">{$title}</h2>
        </div>
        <div class="center">
            <div class="green-title">Booking for:</div>
HTML;
foreach ($booking_for as $booking) {
    echo <<<HTML
    <div class="venue-info">
        <div class="venue">{$booking['booking_for']}</div>
        <div class="small">({$booking['capacity']} Capacity)</div>
    </div>
    HTML;
}
echo <<<HTML
                
        </div>
        <div class="right">
            <div class="small more">For more info:</div>
            <a href="{$link}" class="primary" target="_blank">Click Here</a>
            <div class="small more">{$more_info}</div>
            <div class="small">{$contact_text}</div>
            <div class="name">{$contact_name}</div>
            <div class="email"><a class="email" href="mailto:{$contact_email}">{$contact_email}</a></div>
        </div>
    </div>
HTML;
