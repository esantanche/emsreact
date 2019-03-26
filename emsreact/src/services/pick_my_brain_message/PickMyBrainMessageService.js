// App configuration
import { APP_CONFIGURATION } from '../../appConfiguration';

/**
 * This service gets the message the user entered in the Pick My Brain form
 * and sends it to the backend.
 *
 * Drupal will send an email to notify that there is a new message.
 */
class PickMyBrainMessageService {

    /**
     * Sending the message.
     *
     * @param {object} message_details Contains name, email and message
     * @param {function} callback_to_return_error Function to call to return the
     * error or null is everything went fine
     */
    create_pick_my_brain_message(message_details, callback_to_return_error) {

        const now = new Date();

        // The Drupal backend needs the content type of the node to create
        // It's ems_pick_my_brain_message.
        // This Drupal content type has three fields: name, email and message.
        // We have to provide a title that will show up only in Drupal
        // admin interface

        const message_node_details = {
            type: [{"target_id": "ems_pick_my_brain_message"}],
            title: [{"value": "New Message EMS " + message_details.name}],
            field_name: [{"value": message_details.name}],
            field_email: [{"value": message_details.email}],
            field_message: [{"value": message_details.message}]
        };

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

                // No error here

                callback_to_return_error(null);
            })
            .catch(function (error) {

                console.error("PickMyBrainMessageService::create_pick_my_brain_message");
                console.error(error);

                callback_to_return_error(error);

            });

    }

}

export default PickMyBrainMessageService;
