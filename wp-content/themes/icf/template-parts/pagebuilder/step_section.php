<?php

$section = $args['section'] ?? "";

$black_box = $section['black_box'] ?? "";
$white_box = $section['white_box'] ?? "";
$inset = $section['inset'] ?? 'inset';

echo <<<HTML
    <section class="step-section">
        <div class="inner-wrapper">
            <div class="black-box">
                <div class="box-title owners fadeUp">
                    {$black_box['title']}
                </div>
                <h2 class="box-text owners fadeUpReverse">
                    {$black_box['text']}
                </h2>
            </div>
            <div class="white-box fadeUpReverse">
HTML;
foreach ($white_box as $box) {
    $link = $box['link'] ? '<a style="display: inline-block; margin-top: 1em;" href="' . $box['link']['url'] . '" class="primary fadeUpReverse" target="' . $box['link']['target'] . '">' . $box['link']['title'] . '</a>' :  "";

    echo <<<HTML

        <div class="white-box-content {$inset} fadeUpParagraphs">
            {$box['content']}
            {$link}
        </div>

    HTML;
}

echo <<<HTML
            </div>
        </div>
    </section>
HTML;
