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

$tweets = $authObj->get('https://api.twitter.com/1.1/statuses/user_timeline.json?screen_name=fadeitdk&include_rts=false&count=5');

if($tweets->errors || $tweets == null || !$tweets){
	//load the tweets from the file if something goes wrong
	echo file_get_contents('archive.json');
	die;
}

file_put_contents('archive.json', json_encode($tweets));
echo json_encode($tweets);


