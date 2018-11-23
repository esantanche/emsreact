// App configuration
import { APP_CONFIGURATION } from '../../appConfiguration';

// Helper function to calculate the number of the next page to fetch
// The first page is page zero
import { number_of_page_to_fetch } from '../../helpers/cache_computations';

/**
 * This service fetches articles from the backend.
 */
class ArticleService {

    constructor() {

        this.articles_cache = {};
        this.articles_count = {};

    }

    /**
     * Function getting articles.
     *
     * There are three implemented filters.
     *
     * The first one fetches a single article. It needs the node id the backend assigned to the article.
     *
     * The second fetches all articles for a given topic. Topics can be "How I work", "The tools I use", etc.
     *
     * The third fetches sticky articles only or all af them.
     *
     * It's possible to combine the topic and sticky filters. Of course the nid filter (single article) has to be used alone.
     *
     * @param {object} filters Filters to use when fetching articles
     * @param {function} callback_to_return_articles_and_more_flag Function to call to return the fetched articles
     */
    get_articles(filters, callback_to_return_articles_and_more_flag) {

        let filter_query_string = "";

        if (filters) {

            if (filters.nid)
                filter_query_string += "&nid=" + filters.nid;

            if (filters.topic)
                filter_query_string += "&field_ems_topic_target_id=" + filters.topic;

            if (filters.sticky)
                filter_query_string += "&sticky=1";

        }

        this.fetch_articles(filter_query_string, (articles_fetched_successfully) => {

            if (articles_fetched_successfully) {

                // I need to know if there are more articles to fetch so that I can return
                // this piece of information and the caller can show the LOAD MORE button

                const count_of_articles_in_cache = this.count_of_articles_cache_for_query(filter_query_string);

                const count_of_articles = this.count_of_articles_for_query(filter_query_string);

                const there_are_more_articles_to_fetch = (count_of_articles > count_of_articles_in_cache);

                const result_to_return = {

                    more: there_are_more_articles_to_fetch,

                    articles: this.articles_cache[filter_query_string]

                };

                callback_to_return_articles_and_more_flag(result_to_return);

            }

        })

    };

    /**
     * Doing the actual fetch. This function will add to the cache an additional page of results or it will do nothing
     * if all articles have already been fetched.
     * If there is nothing in cache, it will fetch page zero.
     * This function returns just true on success and false on failure. The caller will find the articles in cache.
     *
     * @param {string} filter_query_string String with query parameters that will filter the result
     * @param {function} callback Function to call to return true if everything went well, false otherwise.
     */
    fetch_articles(filter_query_string, callback) {

        let page_number;

        // There is a separated cache for each query string
        const count_of_articles_in_cache = this.count_of_articles_cache_for_query(filter_query_string);
        const count_of_articles = this.count_of_articles_for_query(filter_query_string);

        // We need to fetch another page only if we didn't yet fetch all available articles for the
        // given query.
        // If the cache is empty certainly we need to fetch the first page
        if (count_of_articles > count_of_articles_in_cache || count_of_articles_in_cache === 0) {

            if (count_of_articles === -1)
                page_number = 0;
            else
                page_number = number_of_page_to_fetch(count_of_articles_in_cache, count_of_articles, APP_CONFIGURATION.fetchPageSize);

            fetch(APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articlesplayground?_format=json&langcode=en" +
                        filter_query_string + "&page=" + page_number, {
                method: 'GET',
            })
                .then((response) => {
                    if (!response.ok) { throw response }
                    return response.json()
                })
                .then((response) => {

                    this.add_results_to_cache(filter_query_string, response.results);

                    this.update_count_of_articles_for_query(filter_query_string, parseInt(response.count));

                    callback(true);
                })
                .catch((error) => {

                    callback(false);
                });


        } else {

            // Everything is already in cache. The caller has just to read it.

            callback(true);

        }

    };

    /**
     * Returning the number of articles we already have in cache for the given
     * query string.
     * We don't get the number here. We got it previously and stored it in an array.
     * Now just returning the stored value.
     *
     * @param {string} filter_query_string Query string
     * @returns {number} Number of articles in cache for the given query string
     */
    count_of_articles_cache_for_query(filter_query_string) {

        // Testing filter_query_string for empty
        // See https://repl.it/@EmanueleSantanc/Check-for-empty-parameter

        if (!filter_query_string) {

            console.error("count_of_articles_cache_for_query, filter_query_string not defined");

            return -1;
        }

        // If the cache for the given query string is not even defined,
        // we define it and set it as empty
        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        return this.articles_cache[filter_query_string].length;

    };

    /**
     * Returning the total number of articles that are available for the given
     * query string.
     * We don't get the number here. We got it previously and stored it in an array.
     * Now just returning the stored value.
     *
     * @param {string} filter_query_string Query string
     * @returns {number} Total number of articles that are available for the given
     * query string.
     */
    count_of_articles_for_query(filter_query_string) {

        if (!filter_query_string) {

            console.error("count_of_articles_for_query, filter_query_string not defined");

            return -1;
        }

        // If the total number of articles available for a given query has never been
        // determined, we define it and set it to -1
        if (typeof this.articles_count[filter_query_string] === "undefined") {

            this.articles_count[filter_query_string] = -1;

        }

        return this.articles_count[filter_query_string];

    };

    /**
     * We call this function to update the total number of articles available for a given query.
     * We typically do this after we make an actual query.
     *
     * @param {string} filter_query_string Query string
     * @param {number} count_of_articles Total number of articles that are available for the given
     * query string.
     */
    update_count_of_articles_for_query(filter_query_string, count_of_articles) {

        if (!filter_query_string) {

            console.error("update_count_of_articles_for_query, filter_query_string not defined");

            return;
        }

        this.articles_count[filter_query_string] = count_of_articles;

    };

    /**
     * Adding articles to the cache of articles for the given query string
     *
     * @param {string} filter_query_string Query string
     * @param {array} results Array of additional results to append to the cache
     */
    add_results_to_cache(filter_query_string, results) {

        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        // Append array to array
        // See https://repl.it/@EmanueleSantanc/Append-array-to-an-array

        this.articles_cache[filter_query_string].push(...results);

    }

}

export default ArticleService;