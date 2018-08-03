import { Service } from 'react-services-injector';

// App configuration
import { APP_CONFIGURATION } from '../../appConfiguration';

/**
 * This service fetches articles from the backend.
 */
class ArticleService extends Service {

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
     * @param {function} callback_to_return_articles Function to call to return the fetched articles
     */
    fetch_articles(filters, callback_to_return_articles) {

        let filter_query_string = "";

        if (filters) {

            if (filters.nid)
                filter_query_string += "&nid=" + filters.nid;

            if (filters.topic)
                filter_query_string += "&field_ems_topic_target_id=" + filters.topic;

            if (filters.sticky)
                filter_query_string += "&sticky=1";

        }

        fetch(APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articles?_format=json&langcode=en" + filter_query_string, {
                method: 'GET',

            })
            .then((response) => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then(function(list_of_articles) {

                callback_to_return_articles(list_of_articles);
            })
            .catch(function(error) {

                console.error("ArticleService::fetch_articles");
                console.error(error);

                callback_to_return_articles(null);
            });
    };
}

// "publicName" property is important if you use any kind of minimization on your JS
ArticleService.publicName = 'ArticleService';

export default ArticleService;