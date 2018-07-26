import { Service } from 'react-services-injector';
import red from "@material-ui/core/colors/red";
import lightBlue from "@material-ui/core/colors/lightBlue";
import orange from '@material-ui/core/colors/orange';
import lightGreen from '@material-ui/core/colors/lightGreen';
import yellow from '@material-ui/core/colors/yellow';

class TopicService extends Service {

    constructor() {
        super();

        this.topics = {};

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
            }
        ];
    }

    get_topics(callback_to_return_topics) {

        callback_to_return_topics(this.topics['en']);

        // TODO there will be the possibiility to use another language
        // return ;
    }

    get_topic_from_url(topic_from_url, callback_to_return_topic) {

        const found_topic = this.topics['en'].find(topic => topic.name_for_url === topic_from_url);

        callback_to_return_topic(found_topic);

        // TODO there will be the possibiility to use another language
        // return ;
    }

}

//"publicName" property is important if you use any kind of minimization on your JS
TopicService.publicName = 'TopicService';

export default TopicService;