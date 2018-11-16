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
     * Function fetching articles.
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

        //console.log("Entering get_articles");

        // FIXME it's not working when I change topic and back to the first

        let filter_query_string = "";

        if (filters) {

            if (filters.nid)
                filter_query_string += "&nid=" + filters.nid;

            if (filters.topic)
                filter_query_string += "&field_ems_topic_target_id=" + filters.topic;

            if (filters.sticky)
                filter_query_string += "&sticky=1";

        }

        // FIXME /rest/EMS/view/articlesplayground

        this.fetch_articles(filter_query_string, (articles_fetched_successfully) => {

            // console.log("fetch_articles");
            // console.log(response);

            if (articles_fetched_successfully) {

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

    fetch_articles(filter_query_string, callback) {

        // FIXME need to test cases like when you have a number of articles that makes for a rounded number of pages

        // FIXME If page_number is not a number, we default to page_number = 0
        // Page zero is the first page

        let page_number;

        const count_of_articles_in_cache = this.count_of_articles_cache_for_query(filter_query_string);
        const count_of_articles = this.count_of_articles_for_query(filter_query_string);

        if (count_of_articles > count_of_articles_in_cache || count_of_articles_in_cache === 0) {

            if (count_of_articles === -1)
                page_number = 0;
            else
                page_number = number_of_page_to_fetch(count_of_articles_in_cache, count_of_articles, APP_CONFIGURATION.fetchPageSize);


            console.log("fetch_articles about to fetch a page");
            console.log("filter_query_string=" + filter_query_string);
            console.log("page_number=" + page_number);
            console.log(this.articles_cache);


            fetch(APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articlesplayground?_format=json&langcode=en" + filter_query_string + "&page=" + page_number, {
                method: 'GET',
            })
                .then((response) => {
                    if (!response.ok) { throw response }
                    return response.json()
                })
                .then((response) => {

                    // response contains results and count

                    //console.log(response);

                    // FIXME the results should be added to the cache

                    this.add_results_to_cache(filter_query_string, response.results);

                    this.update_count_of_articles_for_query(filter_query_string, response.count);

                    callback(true);
                })
                .catch((error) => {

                    console.error("ArticleService::fetch_articles");
                    console.error(error);

                    callback(false);
                });


        } else {

            callback(true);

        }

    };

    count_of_articles_cache_for_query(filter_query_string) {

        // Testing filter_query_string for empty
        // https://repl.it/@EmanueleSantanc/Check-for-empty-parameter

        if (!filter_query_string) {

            console.error("count_of_articles_cache_for_query, filter_query_string not defined");
            return;
        }

        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        // FIXME does this work?
        return this.articles_cache[filter_query_string].length;

    };

    count_of_articles_for_query(filter_query_string) {

        if (!filter_query_string) {

            console.error("count_of_articles_for_query, filter_query_string not defined");
            return;
        }

        if (typeof this.articles_count[filter_query_string] === "undefined") {

            this.articles_count[filter_query_string] = -1;

        }

        return this.articles_count[filter_query_string];

    };

    update_count_of_articles_for_query(filter_query_string, count_of_articles) {

        if (!filter_query_string) {

            console.error("update_count_of_articles_for_query, filter_query_string not defined");
            return;
        }

        this.articles_count[filter_query_string] = parseInt(count_of_articles);

    };

    add_results_to_cache(filter_query_string, results) {

        if (typeof this.articles_cache[filter_query_string] === "undefined") {

            this.articles_cache[filter_query_string] = [];

        }

        this.articles_cache[filter_query_string].push(...results);

    }

}

export default ArticleService;