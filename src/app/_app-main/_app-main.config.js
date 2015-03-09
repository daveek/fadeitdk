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
  })
  //if more languages will be added, it would make sense to add a separate controller
   .state('en-us', {
    url: '/en-us',
    controller: 'RootController'
  }).state('da-dk', {
    url: '/da-dk',
    controller: 'RootController'
  });

  //TURN ON FOR PROD
  $locationProvider.html5Mode(true);
  $locationProvider.hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  /*
   * Set language, if no setting in localStorage then use da-dk
   */
  var retrievedLang = localStorage.getItem('langStore');

  if(retrievedLang && JSON.parse(retrievedLang) && JSON.parse(retrievedLang).lang){
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
    "CONTACT_FULL": "fadeit ApS - 81100200, Anelystparken 31 D, 8381 Tilst, Århus, Denmark.",

    /*
     * EXPERTISE PAGE
     */
    "EXPERTISE_PAGE_TITLE": "Our expertise",
    "EXPERTISE_SUMMARY": "We've been developing a variety of web and mobile appications. We design cross-platform concepts and experiences. We automate systems and simplify processes.",
    "EXPERTISE_DRUPAL": "Planning a medium to large size, highly-customizable modern website with awesome community support? Looks like you're talking about Drupal. We can build a custom installation profile, theme or module for you. Also, we can provide you with Drupal site maintenance, testing and support.",
    "EXPERTISE_PYTHON": "Sometimes Content Management Systems just don't cut it. At fadeit, we love Python and its Web Stack and we can build custom web apps using Flask micro framework.",
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
     * BLOG PAGE
     */
    "BLOG_PAGE_TITLE": "The fadeit blog",
    "BLOG_SUMMARY": "Our blog is a great place to find tech-related articles and tutorials to kick-start your next project. We love to share our knowledge and help others learn from our experience. We're currently writing in English to reach a wider audience.",
    "BLOG_LIST_ERROR": "There was a problem loading the blog posts. Please check back later",
    "BLOG_READ_MORE": "Read this",
    "BLOG_POST_ERROR": "We couldn't load this blog post at this time, please try again in a short while.",

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
    //ols
    "PLIST_OLS_TITLE": "Hopper",
    "PLIST_OLS_DESC": "Hopper helps people find, book and communicate with business providers close to their location.",

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
    "PDET_GATE_P_2": "Some of the more tasks we contributed to were: development of gatesense.com website, setting up automated infrastructure, CoAP protocol integration into Node-RED IoT tool and Internet of Things research work.",
    //ols
    "PDET_OLS_IMG_H": "Links and design mock-ups",
    "PDET_OLS_SCREEN_1_T": "Front page",
    "PDET_OLS_SCREEN_1_D": "The front page focuses on the location-based search.",
    "PDET_OLS_SCREEN_2_T": "Search results",
    "PDET_OLS_SCREEN_2_D": "On the right hand side a list of the closest providers matching the search will be displayed.",
    "PDET_OLS_SCREEN_3_T": "Detailed result",
    "PDET_OLS_SCREEN_3_D": "Selecting a result will display concise information about the provider.",
    "PDET_OLS_SCREEN_4_T": "Provider profile (services)",
    "PDET_OLS_SCREEN_4_D": "Local service providers can display their services on the company profile page.",
    "PDET_OLS_SCREEN_5_T": "Provider projects",
    "PDET_OLS_SCREEN_5_D": "In addition to services, providers can showcase their previous work.",
    "PDET_OLS_URL_1_T": "hopper.dk",
    "PDET_OLS_URL_1_D": "The prototype is available at ",
    "PDET_OLS_URL_2_T": "here",
    "PDET_OLS_URL_2_D": "A few design mock-ups are presented below. The design is constantly evolving, therefore they might be different from the prototype. The design manual is also available ",
    "PDET_OLS_INTRO_T": "About Hopper",
    "PDET_OLS_INTRO_D": "Hopper is a fadeit in-house project started in 2013. The purpose of this project is to offer a powerful location-based search and a messaging/booking system.",
    "PDET_OLS_MAIN_T": "What we have been doing so far",
    "PDET_OLS_P_1": "We are still in the early stages of the project, with only core features implemented. However, we have automated the deployment process and have been building a design manual in parallel. For the past months we were able to make visible progress and launch our first prototype.",
    "PDET_OLS_P_2": "Our plans for Hopper include integrating it with accounting systems and introducing mobile applications to manage bookings easier.",

    /*
     * APPLY & THANK YOU PAGE
     */
    "APPLY_PAGE_TITLE": "Work at fadeit",
    "APPLY_WELCOME": "Hi there, stranger",
    "APPLY_TEXT_1": "Thanks for dropping by. We're excited to know that you are curious and willing to explore. We are always looking for a motivated and determined person to join our team.",
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
    "SEO_TITLE_APPEND": "fadeit, software development company in Aarhus",
    "SEO_LOGO_ALT": "the fadeit logo - software development company",
    "SEO_LEGO_STRUCTURE_ALT": "the structure of the fadeit logo - software development company",
    "SEO_ARROW_DOWN_ALT": "continue reading about fadeit - software development company",
    "SEO_HEART_ALT": "Thanks for your time, lots of <3 from fadeit - software development company",
    "SEO_PROJECT_ALT": " - project made by fadeit - software development company",
    "SEO_META_DESC": "fadeit is a software development agency founded in Aarhus, Denmark. We specialize in developing & designing software, web and mobile applications that optimize business processes.",
    "SEO_SCREENSHOT_ALT": " - screenshot made by fadeit - software development company"
  });

  $translateProvider.translations('da-dk', {
    "ID": 'da-dk', //NEEDED for saving language pref.
    "SWITCH": "en-us", //NEEDED for switching the language.
    "IN_LANGUAGE": "in english", //MENU button (switch)
        /*
     * 404
     */
    "404_PAGE_TITLE": "OMG VI KUNNE IKKE FINDE DENNE SIDE",
    "404_PINGUIN": "404 penguin - siden blev ikke fundet - software development company",
    "404_DEFAULT": "Denne side blev smadret af en flok wilde pingviner, som truede os med at de ville komme tilbage og smadre hele hjemesiden.<br/> Vi er ikke helt ovenpå endnu...",

    /*
     * FOOTER
     */
    "FOOTER_PHONE": "Telefon",

    /*
     * TOOLBOX
     */
    "TOOLBOX_PAGE_TITLE": "Vores værktøjskasse",

    /*
     * FRONT PAGE
     */
    "FRONT_PAGE_TITLE": "Vi er et team at dedikerede udviklere",
    "FRONT_TIME_TO_DO": "Hvorfor har udviklere aldrig<br/>tid til at gøre det rigtigt ... <br/>men altid tid til at gøre det<br/>hele om igen!",
    "FRONT_HERES_WHAT_WE_BELIEVE": "Software og it er for mange et sort område - du ved godt hvad du vil ha' og hvordan det skal virke, men du ved ikke hvordan vi udviklere når målet",
    "FRONT_SOFTWARE_EASY": "Vi skaber software der skaber værdi",
    "FRONT_SOFTWARE_EASY_TEXT": "Hjemmesider, portaler, e-shop løsninger, back-end løsninger, it og system <br/>automatisering og system integration er blot nogle af de opgaver vi har <br/>arbejdet med igennem de seneste mange år - Vi har erfaringen og en hånd-<br/>fuld af dygtige udviklere som er med til at skabe software der skaber værdi <br/>for vores kunder.",
    "FRONT_SOFTWARE_SECURE": "Alting har jo en bagside?",
    "FRONT_SOFTWARE_SECURE_TEXT": "Det kan være svært for dig som kunde at se hvad der sker bag ved skærmen ... <br/>Hvad nytter det at du kører rundt i verdens smukkeste bil, hvis ikke den kan <br/>bremse? <br/><br/>Som udvikler er det vores job at sikre at visse regler overholdes når vi bygger <br/>software til vores kunder. For at sikre at vi ikke går på kompromis med vores <br/>regelsæt har vi som udgangspunkt altid én udvikler der læser koden igennem <br/>inden den bliver frigivet. <br/><br/>Det er måske også årsagen til at vi ikke er de billigste ... Men det giver dig garanti <br/>for at dit software er stabilt, at sikkerhed ikke er et stort kompromis og at, hvis <br/>det skulle fejle, så kan fejl lokaliseres og fjernes hurtigt og effektivt.",
    "FRONT_SOFTWARE_OPEN": "Vi tænker anderledes ;)",
    "FRONT_SOFTWARE_OPEN_TEXT": "Hos fadeit tænker vi anderledes - vi har dygtige udviklere ... de kan udvikle den <br/>dybe tallerken, men ligeså vigtigt har vi de bedste system designere i Danmark - <br/>En system designers primære og mest fornemste job er at hjælpe dig til at se <br/>muligheder, at udvikle dine tanker, at illustrerer hvad der er muligt og naturligvis <br/>at kunne tale med dig over en kop kaffe.",
    "FRONT_SOFTWARE_FOR_YOU": "Lad os rådgive dig?",
    "FRONT_ARE_YOU_A_CLIENT": "Værdiskabende rådgivning uden varm luft - Har du store planer du vil have realiseret, planer som du vil have et andet syn på? ",
    "FRONT_BUTTON_CONTACT": "Spørg løs",

    /*
     * ABOUT PAGE
     */
    "ABOUT_PAGE_TITLE": "Om os",
    "ABOUT_SUMMARY": "Vi er en mindre udviklingsvirksomhed i Århus, hvis rejse startede tilbage i 2013 - Siden da har vi brugt vores tid på at bage lækkert software til vores kunder.",
    "ABOUT_OUR_CULTURE": "Kulturen",
    "ABOUT_CULTURE_TEXT_1": "Her, hos fadeit forsøger vi at se et lidt andet perspektiv end de fleste andre udviklingsvirksomheder. Vi vil have vores projekter er fornøjelige og af en meget høj kvalitet, ikke bare for kundens skyld, men ligeså meget for vores egen skyld. Vi vil udvikle os sammen med vores kunder og bygge software der kan skabe glæde for begge parter i lang tid.",
    "ABOUT_CULTURE_TEXT_2": "Vi vil også gerne have ligeså meget sjov som vi er alvorlige - En af vores grundværdier er at have det sjovt på arbejdspladsen og det er uanset hvad sjov betyder for den enkelte medarbejder - det kan være 24 timers lemans på kontorstolen, at skrive en lækker code, at drikke en shaker til fyraften ... eller alle tre ting på én gang.",

    /*
     * CONTACT PAGE
     */
    "CONTACT_PAGE_TITLE": "Kontakt",
    "CONTACT_NAME": "fadeit ApS",
    "CONTACT_ADDRESS": "Anelystparken 31 D, 8381 Tilst, Århus, Denmark",
    "CONTACT_BUSINESS": "Salg og projektstyring",
    "CONTACT_PHONE": "Telefon:",
    "CONTACT_EMAIL": "E-mail:",
    "CONTACT_DEVS": "Du er altid velkommen til at sige hej til teamet",
    "CONTACT_CHAT_WITH_US": "Vi tager gerne en uforpligtende snak",
    "CONTACT_FOLLOW_US": "Følg os på de sociale medier.",
    "CONTACT_FULL": "fadeit ApS - 81100200, Anelystparken 31 D, 8381 Tilst, Århus, Denmark.",

    /*
     * EXPERTISE PAGE
     */
    "EXPERTISE_PAGE_TITLE": "Det vi gør",
    "EXPERTISE_SUMMARY": "Vi har udviklet en stor vifte af forskellige web og mobil applikationer. Vi designer på tværs af platforme, koncepter og erfaringer. Vi automatiserer systemer og forenkle processer.",
    "EXPERTISE_DRUPAL": "Planlægger du at lave et moderne website som kan tilpasses ned i mindste detalje og som tilbyder lækker community support? Så er det nok Drupal du skal kigge på - vi bygger brugerdefinerede installations profiler, designer tema'er og udvikler moduler både til mindre opgaver, men også til de helt store opgaver. Vi tilbyder også Drupal vedligeholdelse, afprøvning og støtte.",
    "EXPERTISE_PYTHON": "Nogle gange kan et standard CMS (Content Management System) bare ikke løse opgaven. Hos fadeit elsker vi Python Web Stacks - Vi bygger custom applikationer med Flask micro framework.",
      "EXPERTISE_ANGULARJS": "Angular JS tillader at vi kan udvikle skalerbare, vedligeholdelsesfrie og genbrugeligt software. Måden hvorpå koden skrives simplificerer ydermere logikken og ydeevnen på serversiden af dit software så brugerens oplevelse er flydende.",
    "EXPERTISE_IT_AUTO_TITLE": "IT Automatisering",
    "EXPERTISE_IT_AUTO": "Måske har du hørt legender om at udviklingsvirksomheder hvor nye udviklere kunne udgive deres applikationer på deres første dag? Tjaa, det er absolut ikke et mirakel og det er faktisk heller ikke umuligt at opnå. Vi arbejder med DevOps og Infrastructure som vores kode mentalitet. Giv os et kald hvis du har brug for en dedikeret kode ninja der kan hjælpe dig med Puppet, Docker eller Vagrant.",
    "EXPERTISE_XP_DESIGN_TITLE": "Experience Design",
    "EXPERTISE_XP_DESIGN": "Vores baggrund med experience design vil kunne udvikle dine tanker og hjælper dig til at bygge et langt bedre produkt. Vi elsker at udvikle koncepter sammen med vores kunder.",
    "EXPERTISE_OPEN_DATA_TITLE": "Open Data",
    "EXPERTISE_OPEN_DATA": "Åbenhed og gennemsigtighed er nøglen til den regering du gerne vil have. Hvis du skal bygge eller udvide et Open Data software, står vi til rådighed. Vi har stor expertise i forbindelse med at udvikle større CKAN portaler integreret med bl.a. Drupal infrastruktur.",
    "EXPERTISE_NODEJS": "Javascript afvikles ikke mere i din browser - NodeJS byder derimod på en model som er velegnet til web applikationer med data i real-time. Vi udvikler kommunikations applikationer med socket.io, custom moduler i forbindelse med Internet of Things routing software Node-RED og express.js backends.",
    "EXPERTISE_WEB_CRAWLERS_TITLE": "Web Crawlers",
    "EXPERTISE_WEB_CRAWLERS": "Har du brug for at få offentlig data ind i din database, men kan ikke finde en indgang? Vi bygger custom web spiders så giv os et kald, hvis du har brug for hjælp.",
    "EXPERTISE_BACKENDS_TITLE": "Custom Back-ends",
    "EXPERTISE_BACKENDS": "Vi tilbyder vores ekspertise i forbindelse med forskellige server backend systemer. Nogle af de ting vi kan er:<br/><br/> - ElasticSearch/Solr server setup, konfiguration<br/> - Udvikler RESTful APIs<br/> - PostgreSQL/MySQL server setup, konfiguration<br/> - Opsætning af Nginx og Varnish reverse proxies<br/>",
    "EXPERTISE_TOOLBOX_LINK": "Fandt du ikke det du kom efter? Tag et kig i vores {{toolbox}} og ha' lidt sjov med det!",

    /*
     * OUR WORK PAGE
     */
    "WORK_PAGE_TITLE": "Noget vi har lavet",
    "WORK_SUMMARY": "Vi er åbne overfor samarbejder på spændende og udfordrende projekter. Vi har arbejdet med Decentralized Web, IoT, Open Data, Modern Web Apps og meget andet. Du finder nogle af vores projekter her.",
    "WORK_PROJECT_ERROR": "Projektet blev ikke fundet, forsøg venligst om et par minutter.",
    "WORK_PROJECT_READ_MORE": "Læs mere",

    /*
     * TEAM PAGE
     */
    "TEAM_PAGE_TITLE": "Teamet",
    "TEAM_SUMMARY": "Vi er et team at hackers, automation freaks og console cowboys som elsker at arbejde med Open Source software og med henblik på at benytte det i såvel open source applikationer som kommercielle applikationer. Vi mener selv vi har et unikt perspektiv på software udvikling grundet vores baggrund.",
    "TEAM_CEO": "CEO",
    "TEAM_SOFTWARE_DEV": "Software Udvikler",
    "TEAM_DESIGNER": "Designer",
    //Lars
    "TEAM_LARS_DESC": "Manden der får ting til at gå op i en højere enhed.<br/> Når det kommer til alt det kedelige administrative, salget og økonomien er Lars manden man skal snakke med.",
    "TEAM_LARS_ALT": "Lars Normark Holmgaard",
    //Justas
    "TEAM_JUSTAS_DESC": "Udvikler med mange kompetencer. Han mestrer 10+ programmeringssprog og utallige andre teknologier. Hans ynglingsvåben: Python, NodeJS, Puppet, Linux, Vim, ZSH.",
    "TEAM_JUSTAS_ALT": "Justas Azna",
    //Dan
    "TEAM_DAN_DESC": "Arbejder med det der virker for at opnå det rigtige resultat: Sketch, Illustrator, AngularJS, iOS, wacky CSS; you name it. Han var engang rigtig glad for et design han havde lavet, men nu laver han det om.",
    "TEAM_DAN_ALT": "Dan Mindru",
    //Sander
    "TEAM_SANDER_DESC": "Der findes ingen hindringer og ingen bjerge er for store - Han når altid toppen af bjerget. Der kommer altid nye ideer på bordet og stadig med samme hensynsløse pragmatiske indgangsvinkel.",
    "TEAM_SANDER_ALT": "Sander Sink",
    //New guy
    "TEAM_NEW_POSITION": "Imponerende person",
    "TEAM_NEW_NAME": "J. Brugforetjob",
    "TEAM_NEW_DESC": "Elsker at surfe på kanten af bølgerne af teknologi og er altid motiveret til at lære nyt og opnå resultater. Hvis det er sådan du har det ... ?<br/> Så søg ind til os ",
    "TEAM_NEW_LINK_TITLE": "her",

    /*
     * SINGLE PROJECT PAGE
     */
    "PSINGLE_NOT_FOUND": "Projekt beskrivelsen for <u>{{url}}</u> er endnu ikke færdig. Han lovede os et eksempel, og vi blev ikke skuffet: ",
    "PSINGLE_NOT_FOUND_PENGUIN": "Her er en pingvin der kan muntre dig lidt op. <br/>(Siden blev ikke fundet!)",
    "PSINGLE_NOT_FOUND_PENG_TEXT": "Vi gør vores bedste for at dette ikke kommer til at ske igen.<br/> Hvis du er blevet rigtig vred på os så send os gerne en vred e-mail.<br/><br/> Vi bekymrer os om vores kunder, så klik her {{contact}} og kom med dine vrede.",

    /*
     * BLOG PAGE
     */
    "BLOG_PAGE_TITLE": "The fadeit blog",
    "BLOG_SUMMARY": "Our blog is a great place to find tech-related articles and tutorials to kick-start your next project. We love to share our knowledge and help others learn from our experience. We're currently writing in English to reach a wider audience.",
    "BLOG_LIST_ERROR": "There was a problem loading the blog posts. Please check back later",
    "BLOG_READ_MORE": "Read this",
    "BLOG_POST_ERROR": "We couldn't load this blog post at this time, please try again in a short while.",

    /*
     * PROJECT LIST
     */
    //ipvision
    "PLIST_IPVISION_TITLE": "Ipvision",
    "PLIST_IPVISION_DESC": "Integration af telefonisystemer, cloud services, mail clients, back-office løsning og selvbetjeningsportal",
    //alexandra inst.
    "PLIST_ALEX_TITLE": "Alexandra Institute",
    "PLIST_ALEX_DESC": "Integration med research baseret innovation, powered by Open Data",
    //gatesense
    "PLIST_GATE_TITLE": "Gatesense",
    "PLIST_GATE_DESC": "løslad kreativiteten og udvikling af værdi til samfundet",
    //ols
    "PLIST_OLS_TITLE": "Hopper",
    "PLIST_OLS_DESC": "Hopper hjælper dig med at finde, booke og kommunikere med kvalificerede håndværkere tæt på dig.",

    /*
     * PROJECT DETAILS
     */
    //ipvision
    "PDET_IPVISION_IMG_H": "Projekt billeder og mere information",
    "PDET_IPVISION_SCREEN_1_T": "Forsiden",
    "PDET_IPVISION_SCREEN_1_D": "Forsiden i applikationen viser tydelige brugerens forbrug for den valgte periode.",
    "PDET_IPVISION_SCREEN_2_T": "Forbrugs oversigt",
    "PDET_IPVISION_SCREEN_2_D": "Et detaljeret overblik over talt tid i den valgte periode.",
    "PDET_IPVISION_SCREEN_3_T": "Abonnementsstyring",
    "PDET_IPVISION_SCREEN_3_D": "Et detaljeret overblik over hvilket abonnement den valgte bruger har købt.",
    "PDET_IPVISION_SCREEN_4_T": "Brugerkonto",
    "PDET_IPVISION_SCREEN_4_D": "Brugerkontoen's forside viser generelle bruger oplysninger.",
    "PDET_IPVISION_SCREEN_5_T": "Mobil",
    "PDET_IPVISION_SCREEN_5_D": "Et overblik over mobil delen.",
    "PDET_IPVISION_URL_1_T": "Ipvision hjemmeside",
    "PDET_IPVISION_URL_1_D": "Hvis du vil vide mere om ipvision - Gå til  ",
    "PDET_IPVISION_URL_2_T": "Portalen",
    "PDET_IPVISION_URL_2_D": "Nedenfor kan du se billeder fra den selvbetjeningsportal vi byggede for Ipvision - Ydermere kan du tilgå prototypen her: ",
    "PDET_IPVISION_INTRO_T": "Om Ipvision",
    "PDET_IPVISION_INTRO_D": "Ipvision A/S er danmarks fortrukne teleoperatør på B2B markedet. Virksomheden er førende indenfor ip telefoni løsninger til erhvervslivet.",
    "PDET_IPVISION_MAIN_T": "Vores samarbejde",
    "PDET_IPVISION_P_1": "I samarbejde med Ipvision's internt udviklingsafdeling, har vi haft mulighed for at arbejde med state-of-the-art brugerportaler, backoffice systemer, telefonisystemer, økonomisystemer og automatisering af forskellige arbejdsprocesser.",
    //alexandra inst.
    "PDET_ALEX_IMG_H": "Mere om Alexandra?",
    "PDET_ALEX_URL_1_T": "deres hjemmeside",
    "PDET_ALEX_URL_1_D": "For at læse mere om Alexandra, gå til ",
    "PDET_ALEX_URL_2_T": "ved at klikke her",
    "PDET_ALEX_URL_2_D": "Du finder mere information om Smart City Lab ",
    "PDET_ALEX_INTRO_T": "Om Alexandra Institute",
    "PDET_ALEX_INTRO_D": "Alexandra Institute er en IT research og innovations organisation stiftet tilbage i 1999.",
    "PDET_ALEX_MAIN_T": "Vores opgave",
    //TODO: add a danish description for P1
    "PDET_ALEX_P_1": "Alexandra Instituttet hjælper offentlige og private virksomheder med at anvende den nyeste forskning og teknologi inden for it. De skaber værdi gennem nye innovative it-baserede produkter og services.",
    "PDET_ALEX_P_2": "Vi arbejder sammen med Alexandra's Smart City Lab i forbindelse med udvikling af moderne open data portaler som er baseret på CKAN og Drupal.",
    //gatesense
    "PDET_GATE_IMG_H": "Læs mere om Gatesense",
    "PDET_GATE_URL_1_T": "Gatesense hjemmeside",
    "PDET_GATE_URL_1_D": "Dette on-going projekt er baseret på en international gruppe af udviklere og entreprenører, byer or organisationer med en passion bæredygtighed. Tjek ",
    "PDET_GATE_INTRO_T": "Gatesense",
    "PDET_GATE_INTRO_D": "Gatesense er en moderniseret version af Internet of Things platformen. Dets primære formål er at bygge et community og et sæt værktøjer der skal være medvirkende til at løse dagligdagens miljø problemer.",
    "PDET_GATE_MAIN_T": "Vores samarbejde",
    "PDET_GATE_P_1": "Vi spiller en stor rolle i forbindelse med research og udvikling af platformen. Projektet bliver drevet og funded af Grundfos og Alexandra Institute.",
    "PDET_GATE_P_2": "",
        //ols
    "PDET_OLS_IMG_H": "Links og design eksempler",
    "PDET_OLS_SCREEN_1_T": "Forside",
    "PDET_OLS_SCREEN_1_D": "Forsiden holder fokus på det brugeren kommer efter.",
    "PDET_OLS_SCREEN_2_T": "Søgeresultater",
    "PDET_OLS_SCREEN_2_D": "På højre side finder brugeren en liste over de håndværkere der er tættest på brugeren.",
    "PDET_OLS_SCREEN_3_T": "Detaljeret søgeresultat",
    "PDET_OLS_SCREEN_3_D": "Når brugeren vælger en håndværker vises der masser af nyttig information om den enkelte håndværker.",
    "PDET_OLS_SCREEN_4_T": "Virksomhedens side (ydelser)",
    "PDET_OLS_SCREEN_4_D": "Håndværkere også kaldet virksomheden kan liste de jobs de udfører på deres egen side.",
    "PDET_OLS_SCREEN_5_T": "Udførte opgaver",
    "PDET_OLS_SCREEN_5_D": "Ud over at liste hvad håndværkeren kan gøre for brugeren vises også eventuelle opgaver som håndværkeren allerede har lavet.",
    "PDET_OLS_URL_1_T": "hopper.dk",
    "PDET_OLS_URL_1_D": "Prototypen er tilgængelig på ",
    "PDET_OLS_URL_2_T": "her",
    "PDET_OLS_URL_2_D": "Vi har listet et par forskellige eksempler nedenfor. Designet af hopper.dk udvikles løbende så du skal forvente at der kan være forskel mellem prototypen og det du ser på hopper.dk ",
    "PDET_OLS_INTRO_T": "Om Hopper",
    "PDET_OLS_INTRO_D": "Hopper er et projektet tænkt og udviklet af fadeit selv i starten af 2013. Formålet med hopper er at tilbyde en nem vej til at finde lige netop den håndværker du har brug for og naturligvis baseret på afstanden mellem dig og håndværkeren.",
    "PDET_OLS_MAIN_T": "Hvad vi har lavet indtil nu",
    "PDET_OLS_P_1": "Hopper er stadig ret nyt så vi har som udgangspunkt kun lanceret de mest grundlæggende funktionaliteter.",
    "PDET_OLS_P_2": "Strategien og formålet med Hopper er blandt andet integration til eksisterende økonomisystemer samt udvikling af APP’s for mobiler således kommunikation og bookning mellem bruger og håndværker bliver nemmere og mere intuitiv.",

    /*
     * APPLY & THANK YOU PAGE
     */
    "APPLY_PAGE_TITLE": "Job hos fadeit",
    "APPLY_WELCOME": "Hej, fremmede",
    //TODO: ADD INTRO SENTENCE
    "APPLY_TEXT_1": "Vi er glade for at se at du både er nysgerrig og villig til at udforske. Vi leder konstant efter motiverede og målrettede medlemmer til vores team af udviklere.",
    "APPLY_HEADING_1": "Hvem leder vi efter?",
    "APPLY_TEXT_2": "Teknologi platforme og måder at udvikle moderne applikationer skifter hele tiden - hvad der i dag betragtes som cutting-edge kan nemt være forældet i morgen. Hos fadeit værdsætter vi evnen at ville lærer.<br/> Du behøver ikke være bekendt med teknologier fra vores {{toolbox}} (Selv om det måske er en kæmpe fordel). Vi leder efter udviklere som er lærernemme og rigtig gerne vil være med der hvor teknologierne opstår - du skal være motiveret til at gøre bedre.",
    "APPLY_HEADING_2": "Hvad kan vi tilbyde?",
    "APPLY_TEXT_3": "Vi tilbyder en mulighed for at arbejde med Free Software og Open Source værktøjer med henblik på at udvikle web applikationer på den rigtige måde. Du elsker back-end udvikling, du vil arbejde med front-end design? Måske leder du efter en mulighed for at forbedre dine evner med Linux, måske kunne du tænke dig at arbejde med it automation? Er der noget helt andet du finder sjovt at lave? Chancen for at vi har en plads til dig er stor.",
    "APPLY_HEADING_3": "Hvis det lyder godt i dine øre så send os dine informationer:<br/>",
    "THANKS_PAGE_TITLE": "Tak",
    "THANKS_HEADING_1": "Awesome!",
    "THANKS_TEXT_1": "Din ansøgning er modtaget og vi kan ikke vente med at læse den. Hvis du har glemt noget vigtigt i din ansøgning så gå til {{contact}} og fortæl os om det. Når vi har læst din ansøgning kontakter vi dig!<br/><br/> Vi glæder os til at møde dig,<br/> <b>The fadeit team</b>",

    /*
     * NAV TRANSLATIONS
     */
    "NAV_STORY": "hjem",
    "NAV_EXPERTISE": "teknologier",
    "NAV_ABOUT": "Om fadeit",
    "NAV_OUR_WORK": "vi kan lidt af hvert",
    "NAV_TEAM": "menneskerne",
    "NAV_TOOLBOX": "værktøjskasse",
    "NAV_CONTACT": "kontakt",
    "NAV_A_LINK": "et link",
    "NAV_TO_TOP": "Free ride to the top",
    "NAV_TO_MENU": "gå til menu'en",
    "NAV_BACK_HOME": "Til forsiden",

    /*
     * SEO TRANSLATIONS
     * Keep in mind - ALT tags should also describe
     * what the image represents, SEO comes after
     */
    "SEO_TITLE_APPEND": "fadeit - software udviklingsvirksomhed",
    "SEO_LOGO_ALT": "the fadeit logo - software udviklingsvirksomhed",
    "SEO_LEGO_STRUCTURE_ALT": "the structure of the fadeit logo - software udviklingsvirksomhed",
    "SEO_ARROW_DOWN_ALT": "continue reading about fadeit - software udviklingsvirksomhed",
    "SEO_HEART_ALT": "Thanks for your time, lots of <3 from fadeit - software udviklingsvirksomhed",
    "SEO_PROJECT_ALT": " - project made by fadeit - software udviklingsvirksomhed",
    "SEO_META_DESC": "fadeit is a software development agency founded in Aarhus, Denmark. We specialize in developing & designing software, web and mobile applications that optimize business processes.",
    "SEO_SCREENSHOT_ALT": " - screenshot made by fadeit - software udviklingsvirksomhed",
    "SEO_META_TITLE_EMPTY": "fadeit - software udviklingsvirksomhed"
  });
}
