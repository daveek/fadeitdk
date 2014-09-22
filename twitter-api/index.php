<?php
/*
 * Include OAuth library by
 * Abraham Williams (abraham@abrah.am) http://abrah.am
 *
 * The first PHP Library to support OAuth for Twitter's REST API.
 *
*/
include "../vendor/autoload.php";
include "keys.php";

/*
 * Create a new OAuth object and connect
 *
 */
$authObj = new TwitterOAuth($consumer_key, $consumer_secret, $access_token, $access_token_secret);

$tweets = $authObj->get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=fadeitdk&include_rts=false&count=50');
//the count includes retweets as specified in https://dev.twitter.com/rest/reference/get/statuses/user_timeline
/*
 * Count documentation
 *
 Specifies the number of tweets to try and retrieve, up to a maximum of 200 per distinct request. The value of count is best thought of as a limit to the number of tweets to return because suspended or deleted content is removed after the count has been applied. We include retweets in the count, even if include_rts is not supplied. It is recommended you always send include_rts=1 when using this API method.
*/

if($tweets->errors || $tweets == null || !$tweets){
	//load the tweets from the file if something goes wrong
	echo file_get_contents('archive.json');
	die;
}

file_put_contents('archive.json', json_encode($tweets));
echo json_encode($tweets);


