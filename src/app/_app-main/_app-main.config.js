/*
 * Configuration block for the root module.
 * This module is the only one that does not require pushAfterBootstrap
 * (it is already registered in _app-main.init.js)
 *
 */

angular.module(fadeitConfig.appRootModuleName).config(rootConfig);

rootConfig.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider', '$translateProvider'];
function rootConfig($locationProvider, $urlRouterProvider, $stateProvider, $translateProvider){
   $stateProvider.state('404', {
    url: '/404',
    templateUrl: 'views/404.html',
    data:{
      pageTitle: '404_PAGE_TITLE'
    }
  });

  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  /*
   * Set language, if no setting in localStorage then use da-dk
   */
  var retrievedLang = localStorage.getItem('langStore');

  if(retrievedLang){
    $translateProvider.preferredLanguage(JSON.parse(retrievedLang).lang);
  } else {
    $translateProvider.preferredLanguage('da-dk');
  }

  /*
   * Translations
   */
  $translateProvider.translations('en-us', {
    "ID": 'en-us', //NEEDED for saving language pref.
    "SWITCH": "da-dk", //NEEDED for switching the language.
    "IN_LANGUAGE": "på dansk", //MENU button (switch)

    /*
     * 404
     */
    "404_PAGE_TITLE": "OMG WE COULDN'T FIND THIS PAGE",
    "404_PINGUIN": "404 penguin - page not found - software development company",
    "404_DEFAULT": "This page was destroyed by a pack of wild penguins threating us that they will come back and finish what they started.<br/> We are still recovering...",

    /*
     * FOOTER
     */
    "FOOTER_PHONE": "Phone",

    /*
     * TOOLBOX
     */
    "TOOLBOX_PAGE_TITLE": "Our toolbox",

    /*
     * FRONT PAGE
     */
    "FRONT_PAGE_TITLE": "We're a dedicated development force",
    "FRONT_TIME_TO_DO": "Why do we never have time to do it right,<br/> but always have time to do it over?",
    "FRONT_HERES_WHAT_WE_BELIEVE": "Software can become a dark spot if not done properly, we're here to make it right.<br/> Here's what we believe in.",
    "FRONT_SOFTWARE_EASY": "Software made easy",
    "FRONT_SOFTWARE_EASY_TEXT": "We believe that software should be accessible and intuitive to use.<br/> User experience is at the foundation of our software.",
    "FRONT_SOFTWARE_SECURE": "Software made secure",
    "FRONT_SOFTWARE_SECURE_TEXT": "Software security is essentially a catch-up game which is impossible to win.<br/> While new attack vectors are being used every day, it is important to stay on <br/> top of the game. Our software choices are influenced by the vendor’s<br/> perspective on security as well as making sure that the choices we<br/> make today are supported tomorrow.",
    "FRONT_SOFTWARE_OPEN": "Software made open",
    "FRONT_SOFTWARE_OPEN_TEXT": " We think that software should be transparent. Open source solutions are at the<br/> core of our products. We share our knowledge with the community, we progress.",
    "FRONT_SOFTWARE_POWERFUL": "Software made powerful",
    "FRONT_SOFTWARE_POWERFUL_TEXT": "No more constraints, the browser can do it all. With the rise of HTML5, the limits of what a browser can do have been scraped.<br/> This has changed how applications are architectured and it's time to embrace the change.",
    "FRONT_SOFTWARE_MOBILE": "Software made mobile",
    "FRONT_SOFTWARE_MOBILE_TEXT": "We believe single page applications are changing how we interact with the browser.<br/> Combined with responsive interfaces, we are able to create cross platform software with a single code base.<br/> When just-as-well is not good enough, our solutions can be ported to mobile platforms so they are treated like first class citizens.",
    "FRONT_SOFTWARE_FOR_YOU": "Software made for you.",
    "FRONT_ARE_YOU_A_CLIENT": "We are here to keep you away from the dark. Are you our next great client?",
    "FRONT_BUTTON_CONTACT": "Get in touch",

    /*
     * ABOUT PAGE
     */
    "ABOUT_PAGE_TITLE": "About us",
    "ABOUT_SUMMARY": "We are a software development company that started its voyage in 2013.  Since then we've been busy baking awesome software for companies from Aarhus and Copenhagen.",
    "ABOUT_OUR_CULTURE": "Our culture",
    "ABOUT_CULTURE_TEXT_1": "Here at fadeit, we try to have a different perspective on work. We want our projects to be enjoyable and rewarding, not only for us, but for our clients too. We want to grow together and build awesome software that'll make you and us happy for a long, long time.",
    "ABOUT_CULTURE_TEXT_2": "We like to have fun as much as we like to be serious. One of fadeit's founding principles is to have fun while being part of it, no matter what fun means to you. It could be racing your chair, coding, drinking a beer or doing all at once.",

    /*
     * CONTACT PAGE
     */
    "CONTACT_PAGE_TITLE": "Contact us",
    "CONTACT_NAME": "fadeit ApS",
    "CONTACT_ADDRESS": "Anelystparken 31 D, 8381 Tilst, Aarhus, Denmark",
    "CONTACT_BUSINESS": "For any business related matter",
    "CONTACT_PHONE": "Phone:",
    "CONTACT_EMAIL": "Email:",
    "CONTACT_DEVS": "Always feel free to say hi to our team",
    "CONTACT_CHAT_WITH_US": "We'd love to chat with you",
    "CONTACT_FOLLOW_US": "Follow us on social media for more updates and tech-related news.",

    /*
     * EXPERTISE PAGE
     */
    "EXPERTISE_PAGE_TITLE": "Our expertise",
    "EXPERTISE_SUMMARY": "We've been developing a variety of web and mobile appications. We design cross-platform concepts and experiences. We automate systems and simplify processes.",
    "EXPERTISE_DRUPAL": "Planning a medium to large size, highly-customizable modern website with awesome community support? Looks like you're talking about Drupal. We can build a custom installation profile, theme or module for you. Also, we can provide you with Drupal site maintenance, testing and support.",
    "EXPERTISE_PYTHON": "Sometimes Content Management Systems just don't cut it. In fadeit, we love Python and its Web Stack and we can build custom web apps using Flask micro framework.",
    "EXPERTISE_ANGULARJS": "Abstracting the front-end will allow you to develop scalable, maintainable and reusable applications. Single page apps will also drastically simplify the server side logic and improve the performance of the interface.",
    "EXPERTISE_IT_AUTO_TITLE": "IT Automation",
    "EXPERTISE_IT_AUTO": "Perhaps you've heard some legends about IT companies where new developers are able to commit code on their very first day and push to production on their first week? Well, it's not a miracle and it's possible to achieve this in your company too. We embrace DevOps and Infrastructure as Code mentality. Give us a call if you need a dedicated automation ninja to help you with Puppet, Docker or Vagrant.",
    "EXPERTISE_XP_DESIGN_TITLE": "Experience Design",
    "EXPERTISE_XP_DESIGN": "Our strong background in experience design will complement your innovation efforts and help you build a better product. We'll be happy to develop concepts together, responsive interfaces and try to push your brand strategy one step further.",
    "EXPERTISE_OPEN_DATA_TITLE": "Open Data",
    "EXPERTISE_OPEN_DATA": "Openness and transparency is the key to the government that you want. If you are looking to build or extend an Open Data site, we’re here to help. We have experience with building large CKAN portals complete with Drupal integration.",
    "EXPERTISE_NODEJS": "Javascript no longer runs in the browser - NodeJS offers concurrency model suitable for web applications dealing with data in real-time. We develop communications applications with socket.io, custom modules for most popular Internet of Things routing software Node-RED and lightweight express.js backends.",
    "EXPERTISE_WEB_CRAWLERS_TITLE": "Web Crawlers",
    "EXPERTISE_WEB_CRAWLERS": "Want to get some public data from the web into your database but can’t find an API endpoint? We build custom web spiders so pay us a call if you need help.",
    "EXPERTISE_BACKENDS_TITLE": "Custom Back-ends",
    "EXPERTISE_BACKENDS": " We offer expertise with various server backend systems. Some of the things that we can do:<br/><br/> - ElasticSearch/Solr server setup, configuration<br/> - Building RESTful APIs<br/> - PostgreSQL/MySQL server setup, configuration<br/> - Setting up Nginx and Varnish reverse proxies<br/>",
    "EXPERTISE_TOOLBOX_LINK": "Looking for more? Take a look at our {{toolbox}} and have some fun with it!",

    /*
     * OUR WORK PAGE
     */
    "WORK_PAGE_TITLE": "Our work",
    "WORK_SUMMARY": "We're open to collaboration on interesting and challenging projects. We've been working on Decentralized Web, IoT, Open Data, Modern Web Apps and much more. See some of our most interesting projects below.",
    "WORK_PROJECT_ERROR": "We couldn't load the projects at this time, please try again in a short while.",
    "WORK_PROJECT_READ_MORE": "Read more",

    /*
     * TEAM PAGE
     */
    "TEAM_PAGE_TITLE": "The fadeit team",
    "TEAM_SUMMARY": "We're a team of hackers, automation freaks and console cowboys who like to work with Open Source software and to apply it in both Open and Commercial projects. We like to think that we have a unique perspective on software development due to our design background.",
    "TEAM_CEO": "CEO",
    "TEAM_SOFTWARE_DEV": "Software Developer",
    "TEAM_DESIGNER": "Experience Designer",
    //Lars
    "TEAM_LARS_DESC": "The man you can trust to always do the job right.<br/> When it comes to management, sales and managing sales he is the man.",
    "TEAM_LARS_ALT": "Lars Normark Holmgaard - the fadeit team",
    //Justas
    "TEAM_JUSTAS_DESC": "Web developer with many hats. He has 10+ programming languages and countless other technologies under his belt. Weapons of choice: Python, NodeJS, Puppet, Linux, Vim, ZSH.",
    "TEAM_JUSTAS_ALT": "Justas Azna - the fadeit team",
    //Dan
    "TEAM_DAN_DESC": "Works with whatever is necessary to achieve a great UX: Sketch, Illustrator, AngularJS, iOS, wacky CSS; you name it. He was once almost happy with a design he made, but then started over.",
    "TEAM_DAN_ALT": "Dan Mindru - the fadeit team",
    //Sander
    "TEAM_SANDER_DESC": "Computer network and web development aficionado. Constantly brings fresh ideas to the table and stays ruthlessly pragmatic at the same time.",
    "TEAM_SANDER_ALT": "Sander Sink - the fadeit team",
    //New guy
    "TEAM_NEW_POSITION": "Impressive Person",
    "TEAM_NEW_NAME": "J. Wantsomework",
    "TEAM_NEW_DESC": "Loves to surf the cutting edge waves of tech and is motivated to learn and succeed. Is that how you feel?<br/> Apply for a position ",
    "TEAM_NEW_LINK_TITLE": "here",

    /*
     * SINGLE PROJECT PAGE
     */
    "PSINGLE_NOT_FOUND": "The project description for <u>{{url}}</u> is still being put together by one of our developers. He promised us a preview and he did not disappoint when asked to deliver: ",
    "PSINGLE_NOT_FOUND_PENGUIN": "Here's a penguin to cheer you up. <br/>(page not found!)",
    "PSINGLE_NOT_FOUND_PENG_TEXT": "We'll do our best to prevent this from happening again.<br/> If you are really mad at us, go ahead and send an angry email.<br/><br/> We care about your nervous breakdown, so here is {{contact}} where you can rant.",

    /*
     * PROJECT LIST
     */
    //ipvision
    "PLIST_IPVISION_TITLE": "IPVision",
    "PLIST_IPVISION_DESC": "Integrating PBXs, Cloud services, mail clients and back-office servers",
    //alexandra inst.
    "PLIST_ALEX_TITLE": "Alexandra Institute",
    "PLIST_ALEX_DESC": "Building bridges with research-based innovation, powered by Open Data",
    //gatesense
    "PLIST_GATE_TITLE": "Gatesense",
    "PLIST_GATE_DESC": "Unleashing creativity and creating significant value for society",

    /*
     * PROJECT DETAILS
     */
    //ipvision
    "PDET_IPVISION_IMG_H": "Project images and further reading",
    "PDET_IPVISION_SCREEN_1_T": "Dashboard / App home",
    "PDET_IPVISION_SCREEN_1_D": "The front page of the application, displaying the user consumption for the selected period of time.",
    "PDET_IPVISION_SCREEN_2_T": "Consumption Overview (line chart)",
    "PDET_IPVISION_SCREEN_2_D": "A detailed view of the 'talk' consumption for the selected period.",
    "PDET_IPVISION_SCREEN_3_T": "Subscription Management",
    "PDET_IPVISION_SCREEN_3_D": "A detailed subscription view for the selected user.",
    "PDET_IPVISION_SCREEN_4_T": "User Account Overview",
    "PDET_IPVISION_SCREEN_4_D": "The user account main page, displaying general user info.",
    "PDET_IPVISION_SCREEN_5_T": "Mobile Views",
    "PDET_IPVISION_SCREEN_5_D": "An overview of the responsive implementation.",
    "PDET_IPVISION_URL_1_T": "IPVision website",
    "PDET_IPVISION_URL_1_D": "To find out more, take a look at the ",
    "PDET_IPVISION_URL_2_T": "Portal prototype",
    "PDET_IPVISION_URL_2_D": "Below you can see one of the projects that we've built together, Portal. A prototype is also avaialble here: ",
    "PDET_IPVISION_INTRO_T": "About IPVision",
    "PDET_IPVISION_INTRO_D": "IPVision A/S is a Copenhagen-based Mobile Virtual Network Operator (MVNO). They are one of the leading IP Telephony providers for B2B customers in Denmark.",
    "PDET_IPVISION_MAIN_T": "Our collaboration",
    "PDET_IPVISION_P_1": "In IPVision, we work on state of the art self service portals, backoffice tools, phone usage systems, accounting software and automation of various workflows.",
    //alexandra inst.
    "PDET_ALEX_IMG_H": "Where to learn more",
    "PDET_ALEX_URL_1_T": "their website",
    "PDET_ALEX_URL_1_D": "To read more about Alexandra, go to ",
    "PDET_ALEX_URL_2_T": "here",
    "PDET_ALEX_URL_2_D": "You can find more details about Smart City Lab ",
    "PDET_ALEX_INTRO_T": "About Alexandra Institute",
    "PDET_ALEX_INTRO_D": "Alexandra Institute is an IT research and innovation organization founded in 1999.",
    "PDET_ALEX_MAIN_T": "Our collaboration",
    "PDET_ALEX_P_1": "By merging commercial relevance, the latest IT research, technology and user involvement, Alexandra creates IT-based products that generate social value and contribute to economic growth. In other words, they are a bridge-builder between research, private corporations, public institutions and citizens.",
    "PDET_ALEX_P_2": "We work with Alexandra's Smart City Lab on building modern Open Data portals that are based on CKAN and Drupal.",
    //gatesense
    "PDET_GATE_IMG_H": "Learn more about Gatesense",
    "PDET_GATE_URL_1_T": "Gatesense website",
    "PDET_GATE_URL_1_D": "This still-evolving project is currently building an international community of developers and other entrepreneurs, cities and organisations with a passion for sustainability. Check out the ",
    "PDET_GATE_INTRO_T": "Gatesense",
    "PDET_GATE_INTRO_D": "Gatesense is a modern Internet of Things platform. Its primary purpose is to build a community and a set of concrete tools for solving today's environment problems.",
    "PDET_GATE_MAIN_T": "Our collaboration",
    "PDET_GATE_P_1": "We play a major role in research and technical development of the platform. The effort is lead by Grundfos and Alexandra Institute.",

    /*
     * APPLY & THANK YOU PAGE
     */
    "APPLY_PAGE_TITLE": "Work at fadeit",
    "APPLY_WELCOME": "Hi there, stranger",
    "APPLY_TEXT_1": "First of all, congrats on cracking that piece of code. We're excited to know that you are curious and willing to explore. We are always looking for a motivated and determined person to join our team.",
    "APPLY_HEADING_1": "Who are we looking for?",
    "APPLY_TEXT_2": "Technology landscapes are changing fast, with new software rolling out on a daily basis - what is considered cutting-edge today, can become obsolete tomorrow. Here at fadeit we value the ability to learn.<br/> You don't have to be familiar with technologies from our {{toolbox}} (although it's an advantage). We're looking for someone who is fast at picking stuff up and most importantly - motivated to improve.",
    "APPLY_HEADING_2": "What do we offer?",
    "APPLY_TEXT_3": "We offer an opportunity to work with quality Free Software and Open Source tools and to do real web development using best practices. Do you like back-end development or want to build awesome front-end user experiences? Perhaps you look to improve your Linux skills or acquire IT automation expertise? Is there something else that you find fascinating? Chances are that we have a place for you.",
    "APPLY_HEADING_3": "If it sounds good to you, send us your info:<br/>",
    "THANKS_PAGE_TITLE": "Thank you",
    "THANKS_HEADING_1": "Awesome!",
    "THANKS_TEXT_1": "Your application has been submitted and we can't wait to read it. If you forgot something important, just go to {{contact}} and tell us all about it. Otherwise, we'll be get back to you very soon!<br/><br/> Looking forward to meeting you,<br/> <b>The fadeit team</b>",

    /*
     * NAV TRANSLATIONS
     */
    "NAV_STORY": "story",
    "NAV_EXPERTISE": "expertise",
    "NAV_ABOUT": "about",
    "NAV_OUR_WORK": "our work",
    "NAV_TEAM": "team",
    "NAV_TOOLBOX": "toolbox",
    "NAV_CONTACT": "contact",
    "NAV_A_LINK": "a link",
    "NAV_TO_TOP": "Free ride to the top",
    "NAV_TO_MENU": "go to menu",
    "NAV_BACK_HOME": "Back home",

    /*
     * SEO TRANSLATIONS
     * Keep in mind - ALT tags should also describe
     * what the image represents, SEO comes after
     */
    "SEO_LOGO_ALT": "the fadeit logo - software development company",
    "SEO_LEGO_STRUCTURE_ALT": "the structure of the fadeit logo - software development company",
    "SEO_ARROW_DOWN_ALT": "continue reading about fadeit - software development company",
    "SEO_HEART_ALT": "Thanks for your time, lots of <3 from fadeit - software development company",
    "SEO_PROJECT_ALT": " - project made by fadeit - software development company",
    "SEO_SCREENSHOT_ALT": " - screenshot made by fadeit - software development company",
    "SEO_META_TITLE_EMPTY": "fadeit - web development company",
    "SEO_META_DESC": "fadeit ApS is a software development agency founded in Aarhus, Denmark. We specialize in developing & designing software, web and mobile applications that optimize business processes.",
    "SEO_META_AUTHOR": "fadeit ApS",
    "SEO_META_KEYWORDS": "fadeit, software, development, design agency, mobile, web, applications, systems, aarhus, denmark",
    "SEO_OG_SITE_NAME": "fadeit"
  });

  $translateProvider.translations('da-dk', {
    "ID": 'da-dk', //NEEDED for saving language pref.
    "SWITCH": "en-us", //NEEDED for switching the language.
    "IN_LANGUAGE": "in english", //MENU button (switch)
  });
}
