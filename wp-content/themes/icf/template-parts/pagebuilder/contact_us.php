<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$intro = $section['intro'] ?? "";
$popup_class_name = $section['popup_class'] ?? "";
$social_media_text = $section['social_media_text'] ?? "";
$contacts = $section['contacts'] ?? "";
$contact_form_text = $section['contact_form_text'] ?? "";
$contact_form_shortcode = $section['contact_from_shortcode'] ? do_shortcode($section['contact_from_shortcode']) : "";
$template = get_bloginfo('template_url');

$form_title = "Customer Mailing List Signup";
$form_code = "24266376";
if ($popup_class_name == "performer-form") {
    $form_title = "Performer Mailing List Signup";
    $form_code = "24266377";
}

$instagram = get_field('instagram', 'option') ?? "";
$facebook = get_field('facebook', 'option') ?? "";

echo <<<HTML
</div>
    <section class="contact-us" id="contact">
        <div class="inner-wrapper">
            <h2 class="title fadeUp">{$title}</h2>
            <div class="contact-wrapper">
                <div class="fadeVert">{$intro}</div>
                <div class="primary fadeVert" data-title="{$form_title}" data-code="{$form_code}" data-class="{$popup_class_name}" aria-label="Mailing list signup button">Join mailing list</div>
                <div class="fadeVert">{$social_media_text}</div>
                <div class="social-icons">
                    <a aria-label="External link to Instagram" class="instagram social-icon" href="{$instagram}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224.3 141a115 115 0 1 0 -.6 230 115 115 0 1 0 .6-230zm-.6 40.4a74.6 74.6 0 1 1 .6 149.2 74.6 74.6 0 1 1 -.6-149.2zm93.4-45.1a26.8 26.8 0 1 1 53.6 0 26.8 26.8 0 1 1 -53.6 0zm129.7 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM399 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                    </a>
                    <a aria-label="External link to Facebook" class="facebook social-icon" href="{$facebook}" target="_blank">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M80 299.3l0 212.7 116 0 0-212.7 86.5 0 18-97.8-104.5 0 0-34.6c0-51.7 20.3-71.5 72.7-71.5 16.3 0 29.4 .4 37 1.2l0-88.7C291.4 4 256.4 0 236.2 0 129.3 0 80 50.5 80 159.4l0 42.1-66 0 0 97.8 66 0z"/></svg>
                    </a>
                </div>
            </div>
            <div class="links">
HTML;
foreach ($contacts as $contact) {
    echo <<< HTML
            <div class="link-wrapper fadeUp">
                {$contact['text']}
                <a href="{$contact['link']['url']}">{$contact['link']['title']}</a>
            </div>
        HTML;
}
echo <<<HTML
            </div>
            <div class="contact-form">
                <div class="fadeUp">{$contact_form_text}</div>
                {$contact_form_shortcode}
            </div>

            <div class="back-to-top"><a href="#top">Top <img src="{$template}/images/top.svg" alt="Scroll to top triangle icon" /></a>
        </div>
    </section>
HTML;
