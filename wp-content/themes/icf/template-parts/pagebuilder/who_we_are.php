<?php

$section = $args['section'] ?? "";
$title = $section['title'] ?? "";
$people = $section['people'] ?? "";
$template = get_bloginfo('template_url');

echo <<<HTML
    <section id="who" class="who-we-are">
        <div class="inner-wrapper">
            <div class="background"><img src="{$template}/images/question-mark.svg" alt="background icon" /></div>
            <div class="left-column the-title">
                <h2 class="title splitWords">{$title}</h2>
            </div>
            <div class="people-wrapper alex fadeUpReverse top-wrapper">
                <div class="profile-image">
                    <img src="{$people[0]['image']['sizes']['large']}" alt="Profile image of {$people[0]['name']}" />
                </div>
            </div>
            <div class="people-wrapper colin fadeUpReverse top-wrapper">
                <div class="profile-image">
                    <img src="{$people[1]['image']['sizes']['large']}" alt="Profile image of {$people[1]['name']}" />
                </div>
            </div>
            <div class="left-column bottom">
                <div class="icon">
                    <img src="{$template}/images/question-mark.svg" alt="Image of a question mark" />
                </div>
            </div>
            <div class="people-wrapper bottom alex-bio">
                <div class="profile">
                    <h3 class="name fadeVert">{$people[0]['name']}</h3>
                    <div class="role fadeVert">{$people[0]['role']}</div>
                    <div class="email fadeVert"><a href="mailto:{$people[0]['email']}">{$people[0]['email']}</a></div>
                    <div class="bio fadeUpParagraphs">{$people[0]['bio']}</div>
                </div>
            </div>
            <div class="people-wrapper bottom colin-bio">
                <div class="profile">
                    <h3 class="name fadeVert">{$people[1]['name']}</h3>
                    <div class="role fadeVert">{$people[1]['role']}</div>
                    <div class="email fadeVert"><a href="mailto:{$people[1]['email']}">{$people[1]['email']}</a></div>
                    <div class="bio fadeUpParagraphs">{$people[1]['bio']}</div>
                </div>
            </div>
        </div>
    </section>
HTML;
