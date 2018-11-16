/**
 * FIXME
 * @param count_of_articles_in_cache
 * @param count_of_articles
 * @param page_size
 * @returns {number} Number of the next page to fetch with zero being the first page
 */
export function number_of_page_to_fetch(count_of_articles_in_cache, count_of_articles, page_size) {

    if (typeof count_of_articles_in_cache !== "number" || typeof count_of_articles !== "number" || typeof page_size !== "number" || page_size === 0) {

        console.error("number_of_page_to_fetch, error in parameters");

        return -1;
    }

    if (count_of_articles_in_cache >= count_of_articles) {

        // All the articles have already been fetched
        // What am I doing here?

        return -1;
    }

    const number_of_full_pages_in_cache = Math.floor(count_of_articles_in_cache / page_size);

    // Remember that the first page is page 0

    if ((number_of_full_pages_in_cache * page_size) < count_of_articles) {

        // There are more articles to fetch

        // number_of_full_pages_in_cache is also the number of the next page to fetch
        return number_of_full_pages_in_cache;

    } else {

        return -1;
    }
}