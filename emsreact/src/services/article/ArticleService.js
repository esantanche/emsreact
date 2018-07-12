import { Service } from 'react-services-injector';
// import { convert_date_from_US_to_ISO } from '../../helpers/date_conversion';
// import { APP_CONFIGURATION } from '../../app-configuration';
// import { create_standard_error_object_from_rest_api_response } from "../../helpers/error_processor";

class ArticleService extends Service {

    constructor() {
        super();

        // this.user_profile = {};
        // this.id_token = "";

        // this.sign_up_via_social_or_emailpwd = "";
        // this.user_details = {};
        // this.social_network_used_for_sign_up = "";

    }

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

    fetch_articles_for_test() {


        fetch("http://backend.emanuelesantanche.com/rest/EMS/view/articles?_format=json", {
                method: 'GET',

            })
            .then((response) => {
                if (!response.ok) { throw response }
                return response.json()
            })
            .then(function(fixme_list_of_articles) {
                //console.log('UserAuthService.js fetch_user_profile');
                console.log(fixme_list_of_articles);
                // if (user_profile.code) callback_to_return_user_profile(user_profile);
                //
                return fixme_list_of_articles;
            })
            .catch(function(error) {
                // FIXME here we need exception handling
                console.error("Error fetching articles");
                console.error(error);
                // console.error("UserAuthService fetch_user_profile catch error");
                // console.error(error.status + error.statusText); callback_to_return_user_profile(null, error);
                // console.error('MailListService subscribe_to_mail_list error: ', error);
                return null;
            });
    };

    fetch_user_profile(id_token, callback_to_return_success_or_error) {

        var self = this;

        // const { UserAuthService } = this.services;

        // this.UserAuthService = UserAuthService;
        //
        // const { ExceptionTrackingService } = this.services;
        //
        // this.ExceptionTrackingService = ExceptionTrackingService;

        // if (this.must_fetch_profile_from_backend(id_token)) {
        //
        //     this.UserAuthService.fetch_user_profile(id_token,
        //         function (user_profile, error) {
        //             //console.log('player_or_coach');
        //             //console.log(user_profile);
        //
        //             if (error) {
        //
        //                 // FIXME excpt handling
        //
        //                 callback_to_return_success_or_error(error);
        //
        //                 return;
        //             }
        //
        //             // FIXME what about exceptions?
        //
        //             // FOXME for the stub, in local storage put the entire user profile
        //
        //             // FIXME now doing the stub, so replacing the user profile
        //
        //             // FIXME here I'll check the id of the player I created when the user gave the details
        //             // if that id is defined, it means that they completed the profile
        //
        //             if (localStorage.getItem('user_profile')) {
        //                 const local_storage_user_profile = JSON.parse(localStorage.getItem('user_profile'));
        //                 self.user_profile = Object.assign({}, local_storage_user_profile);
        //             } else {
        //                 localStorage.setItem('user_profile', JSON.stringify(user_profile));
        //                 self.user_profile = Object.assign({}, user_profile);
        //             }
        //
        //             //localStorage.getItem('user_profile');
        //
        //             //self.user_profile.player_or_coach = localStorage.getItem('user_profile:player_or_coach');
        //
        //             // FIXME player_or_coach in user profile
        //
        //             //         this.email_of_user_who_is_signing_up = localStorage.getItem('email_of_user_who_is_signing_up');
        //
        //             // FIXME this is a stub
        //             //user_profile.player_or_coach = localStorage.getItem('user_profile:player_or_coach');
        //             // self.setState({ user_profile_from_backend: user_profile });
        //             // self.setState({ firstname: user_profile.givenName, lastname: user_profile.familyName })
        //             callback_to_return_success_or_error('success');
        //         }
        //     );
        //
        // } else {
        //
        //     callback_to_return_success_or_error('success');
        //
        // }

    }



}

//"publicName" property is important if you use any kind of minimization on your JS
ArticleService.publicName = 'ArticleService';

export default ArticleService;