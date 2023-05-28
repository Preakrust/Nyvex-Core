<?php

require_once('/home/vol12_1/epizy.com/epiz_33511364/htdocs/api/library.php'); // => VERY Usefull lib

// -- Code -- //

NewApiEndpoint("POST", function($ip, $body){ // -> Create an API Endpoint
    $Action = $body["Action"];

    // -- Auth Part --//

    $User = AuthGetDocFromUsername($body["Username"])

    switch $User { // Handle if the user does not exist //
        case "404" 
            NewResponse("404", false, "User was not found!", array())
            break;
    }

    switch ($Action) { // -> Make a switch thingy


        case "Step-1" // -> If it's the first step the exe that


            break;
    }

})
