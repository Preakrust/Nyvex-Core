<?php

require_once('/home/vol12_1/epizy.com/epiz_33511364/htdocs/api/library.php'); // => VERY Usefull lib

// -- Code -- //

NewApiEndpoint("POST", function($ip, $body){ // -> Create an API Endpoint
    $Step = $body["Step"];

    // -- Auth Part --//

    $User = AuthGetDocFromUsername($body["Username"]);

    switch ($User) { // Handle if the user does not exist //
        case "404";
            echo NewResponse("404", false, "User was not found!", array());
            exit();
            break;
    }

    switch ($Step) {
        case "FFA"; 
            $NewLogin = AuthNewPasswordLogin($User["Username"], $body["Password"], $ip);

            switch ($NewLogin) { // -> Handle the login
                
                case "403";
                    echo NewResponse("403", false, "Invalid password!", array());
                    break;

                case "200";
                
                        echo NewResponse("200", true, "Successfully logged in!", array());

                    break;
            }
            break;
    }
    

})


?>
