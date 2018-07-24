import { Service } from 'react-services-injector';
// import { convert_date_from_US_to_ISO } from '../../helpers/date_conversion';
import { APP_CONFIGURATION } from '../../appConfiguration';

// FIXME do i need this?
// import { create_standard_error_object_from_rest_api_response } from "../../helpers/error_processor";

class PickMyBrainMessageService extends Service {

    create_pick_my_brain_message(message_details, callback_to_return_error) {


        const now = new Date();

        const message_node_details = {
            type: [{"target_id": "ems_pick_my_brain_message"}],
            title: [{"value": "New Message " + now}],
            field_name: [{"value": message_details.name}],
            field_email: [{"value": message_details.email}],
            field_message: [{"value": message_details.message}]
        };

        // alert("insiede create_pick_my_brain_message");

        fetch(APP_CONFIGURATION.backendUrl + '/node?_format=json', {
                method: 'POST',
                body: JSON.stringify(message_node_details),
                headers: {
                    'Content-Type': 'application/json',
                    'Accepts': 'application/json'
                }
            })
            .then((response) => {
                if (!response.ok) {
                    throw response
                }
                return response.json()
            })
            .then(function (response_json) {

                // no error here
                callback_to_return_error(null);
            })
            .catch(function (error) {
                // FIXME here we need exception handling

                // FIXME do I need the heloer function that formats the error object?
                callback_to_return_error(error);

            });

    }

}

//"publicName" property is important if you use any kind of minimization on your JS
PickMyBrainMessageService.publicName = 'PickMyBrainMessageService';

export default PickMyBrainMessageService;