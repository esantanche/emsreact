// This file contains all the services used in the app
// Even the services defined in subfolders should be here so that they can be used everywhere in the app
// See https://github.com/EfogDev/react-services-injector

import ArticleService from './services/article/ArticleService';
import TopicService from './services/topic/TopicService';
import PickMyBrainMessageService from './services/pick_my_brain_message/PickMyBrainMessageService';

export default [ ArticleService, TopicService, PickMyBrainMessageService ];
