import { Service } from 'react-services-injector';
// import { convert_date_from_US_to_ISO } from '../../helpers/date_conversion';
// import { APP_CONFIGURATION } from '../../app-configuration';
// import { create_standard_error_object_from_rest_api_response } from "../../helpers/error_processor";

class ArticleService extends Service {

    // constructor() {
    //     super();
    //
    //     // this.user_profile = {};
    //     // this.id_token = "";
    //
    //     // this.sign_up_via_social_or_emailpwd = "";
    //     // this.user_details = {};
    //     // this.social_network_used_for_sign_up = "";
    //
    // }

    // componentDidMount() {
    //
    //     console.log('ProfileManagementService componentDidMount');
    //
    // }

    // must_fetch_profile_from_backend(id_token) {
    //
    //     // Must fetch the profile from the backend if the id_token I stored
    //     // is not the same as the one passed or if the profile is empty
    //
    //     return (id_token !== this.id_token || this.user_profile.keys().length === 0)
    // }

    // FIXME wiil need a parameter to fetch sticky articles only

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

        // console.log()
        // field_ems_topic_target_id="How I work"

        fetch("http://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json&langcode=en" + filter_query_string, {
                method: 'GET',

            })
            .then((response) => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then(function(fixme_list_of_articles) {
                //console.log('UserAuthService.js fetch_user_profile');
                console.log("fetch_articles_for_test, fixme_list_of_articles");
                console.log(fixme_list_of_articles);
                // if (user_profile.code) callback_to_return_user_profile(user_profile);
                //
                callback_to_return_articles(fixme_list_of_articles);
            })
            .catch(function(error) {
                // FIXME here we need exception handling
                console.error("Error fetching articles");
                console.error(error);
                // console.error("UserAuthService fetch_user_profile catch error");
                // console.error(error.status + error.statusText); callback_to_return_user_profile(null, error);
                // console.error('MailListService subscribe_to_mail_list error: ', error);
                // FIXME should call the callback with some return value like null
                return null;
            });
    };


    fetch_article(article_node_id, callback_to_return_article) {

        fetch("http://backend.emanuelesantanche.com/node/" + article_node_id + "/?_format=json", {
            method: 'GET',
        })
            .then((response) => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then(function(fixme_list_of_articles_maybe_or_only_one) {
                //console.log('UserAuthService.js fetch_user_profile');
                // console.log("fetch_articles_for_test, fixme_list_of_articles");
                // console.log(fixme_list_of_articles);
                // if (user_profile.code) callback_to_return_user_profile(user_profile);
                //
                callback_to_return_article(fixme_list_of_articles_maybe_or_only_one);
            })
            .catch(function(error) {
                // FIXME here we need exception handling
                console.error("Error fetching article (one)");
                console.error(error);
                // console.error("UserAuthService fetch_user_profile catch error");
                // console.error(error.status + error.statusText); callback_to_return_user_profile(null, error);
                // console.error('MailListService subscribe_to_mail_list error: ', error);
                // FIXME should call the callback with some return value like null
                return null;
            });

    }




}

//"publicName" property is important if you use any kind of minimization on your JS
ArticleService.publicName = 'ArticleService';

export default ArticleService;