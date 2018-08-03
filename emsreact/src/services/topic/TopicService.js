import { Service } from 'react-services-injector';

// Material UI colors
import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import yellow from '@material-ui/core/colors/yellow';
import indigo from "@material-ui/core/es/colors/indigo";

/**
 * When showing lists of articles about topics, many details are needed.
 *
 * This service provides these details.
 *
 * Each topic has the following details:
 * * topic name
 * * topic name as it has to be shown in urls
 * * subheader
 * * letter to be used in the avatar
 * * color of avatar
 * * text to be used on the button that links to more articles for the same topic
 */
class TopicService extends Service {

    constructor() {
        super();

        this.topics = {};

        // For now supporting English only
        this.topics['en'] = [

            {
                name: "How I work",
                name_for_url: "how-i-work",
                subheader: "There is value in doing things properly first time",
                letter_for_avatar: "W",
                color_for_avatar: red[500],
                more_articles_button_label: "More about how I work"
            },
            {
                name: "The tools I use",
                name_for_url: "the-tools-i-use",
                subheader: "Modern technology making writing code more productive, fun and easy",
                letter_for_avatar: "T",
                color_for_avatar: lightBlue[400],
                more_articles_button_label: "More about the tools I use"
            },
            {
                name: "Success stories",
                name_for_url: "success-stories",
                subheader: "From Intel Corporation to video streaming of classical music",
                letter_for_avatar: "S",
                color_for_avatar: orange[400],
                more_articles_button_label: "More success stories"
            },
            {
                name: "Testimonials",
                name_for_url: "testimonials",
                subheader: "Happy clients and happy managers",
                letter_for_avatar: "T",
                color_for_avatar: lightGreen[500],
                more_articles_button_label: "More testimonials"
            },
            {
                name: "Talking about my experiences",
                name_for_url: "talking-about-my-experiences",
                subheader: "Sharing my knowledge with the world",
                letter_for_avatar: "E",
                color_for_avatar: yellow[600],
                more_articles_button_label: "More knowledge"
            },
            {
                name: "Where? How?",
                name_for_url: "where-how",
                subheader: "Where do I work? How do I work with you?",
                letter_for_avatar: "W",
                color_for_avatar: indigo[300],
                more_articles_button_label: "More about where and how I work with you"
            }
        ];
    }

    /**
     * Returning all details for all topics.
     *
     * @param {function} callback_to_return_topics Function to call to return all details for all topics
     */
    get_topics(callback_to_return_topics) {

        callback_to_return_topics(this.topics['en']);

    }

    /**
     * Returning all details for a specific topic. The topic name as it appears in urls is given.
     *
     * @param {string} topic_from_url The topic's name as it appears in urls
     * @param {function} callback_to_return_topic Function to call to return the topic's details
     */
    get_topic_from_url(topic_from_url, callback_to_return_topic) {

        const found_topic_details = this.topics['en'].find(topic => topic.name_for_url === topic_from_url);

        callback_to_return_topic(found_topic_details);

    }

}

// "publicName" property is important if you use any kind of minimization on your JS
TopicService.publicName = 'TopicService';

export default TopicService;