<?php
//Quick PHP script so we don't have to deal with CORS
$url = 'https://yourname.zendesk.com/api/v2/channels/voice/stats/current_queue_activity.json';
$username = 'admin username';
$password = 'admin password';
$ch = curl_init();

// set URL and other appropriate options
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_HEADER, 0);
curl_setopt($ch, CURLOPT_USERPWD, $username . ":" . $password);

// grab URL and pass it to the browser
curl_exec($ch);

// close cURL resource, and free up system resources
curl_close($ch);
