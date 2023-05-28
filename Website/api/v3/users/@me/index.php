<?php

require_once('/home/vol12_1/epizy.com/epiz_33511364/htdocs/api/library.php'); // => VERY Usefull lib

// -- Code -- //

NewApiEndpoint("GET", function($ip){ // -> Create an API Endpoint

    // -- Auth Part --//

    $User = AuthGetUserFromCookie();

    switch ($User) { // Handle if the user does not exist //
        case "401";
            echo NewResponse("401", false, "No authentication token found!", array());
            exit();
            break;

        case "404";
            echo NewResponse("404", false, "No user was found for this authentication token!", array());
            exit();
            break;

        case "403";
            echo NewResponse("403", false, "Cannot grant access with this authentication token!", array());
            exit();
            break;
    } 

    echo NewResponse("200", true, "OK!", array(
        "Username" => $User["Username"],
        "LoggedIn" => true
    ));
    exit();

})


?>
