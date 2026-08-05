<?php

if (!empty(get_field('page_builder'))) {
    foreach (get_field('page_builder') as $templatePart) {
        if (isset($templatePart['acf_fc_layout'])) {
            get_template_part(
                'template-parts/pagebuilder/' . $templatePart['acf_fc_layout'],
                null,
                ['section' => $templatePart]
            );
        }
    }
}
