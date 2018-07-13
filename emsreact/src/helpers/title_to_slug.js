
export function title_to_slug(title) {

    // Converts this:
    // How do I protect my investment in bespoke software?
    // into this:
    // how-do-i-protect-my-investment-in-bespoke-software

    // Everything goes lowercase
    // Spaces are replaced with '-'
    // Anything that is not alphanumeric is stripped (alphanumeric is a-zA-Z0-9_
    // underscore is allowed

    return title
        .toLowerCase()
        .replace(/ /g,'-')
        .replace(/[^\w-]+/g,'');
}