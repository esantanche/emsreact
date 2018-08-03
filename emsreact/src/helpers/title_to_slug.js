/**
 * This function produces a slug from the title of an article.
 *
 * Converts this:
 * How do I protect my investment in bespoke software?
 * into this:
 * how-do-i-protect-my-investment-in-bespoke-software
 *
 * A slug is better suited to be part of a URL than the original title.
 * It has no whitespaces, all chars are lowercase and everything that is not
 * alphanumeric is stripped away.
 *
 * @param {string} title The title we have to convert into a slug
 * @returns {string} The slug
 */
export function title_to_slug(title) {

    return title
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}