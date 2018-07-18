// This file contains all the services used in the app
// Even the services defined in subfolders should be here so that they can be used everywhere in the app
// See https://github.com/EfogDev/react-services-injector

// import UserAuthService from './userauth/services/UserAuthService';
// import MailListService from './userauth/services/MailListService';
// import ExceptionTrackingService from './exceptiontracking/ExceptionTrackingService';
// import ProfileManagementService from './profilemanagement/services/ProfileManagementService';

import ArticleService from './services/article/ArticleService';
import TopicService from './services/topic/TopicService';

export default [ ArticleService, TopicService ];

// Always export an array, even if you have only one service
// export default [ UserAuthService, MailListService, ExceptionTrackingService, ProfileManagementService ];