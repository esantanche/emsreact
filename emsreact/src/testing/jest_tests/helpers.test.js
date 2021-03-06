// Here we test helper functions in the folder helpers

import React from "react";

import { title_to_slug } from "../../helpers/title_to_slug";

describe('Testing title_to_slug.js', function() {

    const test_cases = [
        [ 'How I work', 'how-i-work' ],
        [ 'Who am I?', 'who-am-i' ],
        [ 'Installing Drupal 8 alongside React', 'installing-drupal-8-alongside-react' ],
        [ 'WYSIWYG editor for Mediawiki', 'wysiwyg-editor-for-mediawiki' ],
        [ 'Use your smart-phone as webcam and keep enjoying enhanced security as well', 'use-your-smart-phone-as-webcam-and-keep-enjoying-enhanced-security-as-well' ],
        [ 'Bounce processing, when SMTP server doesn’t return bounces properly', 'bounce-processing-when-smtp-server-doesnt-return-bounces-properly' ],
        [ 'Php frameworks, how to choose', 'php-frameworks-how-to-choose' ]
    ];

    test_cases.forEach((test) => {
        it('title_to_slug for ' + test[0], () => {
            expect(title_to_slug(test[0])).toBe(test[1]);
        })
    });

});
