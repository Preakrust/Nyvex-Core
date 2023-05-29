<?php

// -- Author = PreaKrust, Lagnuage = PHP, repository = https://github.com/Preakrust/Nyvex-Core/blob/main/Website/api/v3/auth/login/index.php -- //

require_once('/home/vol12_1/epizy.com/epiz_33511364/htdocs/api/library.php'); // => VERY Usefull lib

// -- Code -- //

NewApiEndpoint("POST", function ($ip, $body) { // -> Create an API Endpoint

    // -- Login Part --//

    $User = AuthGetDocFromUsername($body["Username"]);

    switch ($User) { // Handle if the user does not exist //
        case "404";
            echo NewResponse("404", false, "User was not found!", array());
            exit();
    }


    $NewLogin = AuthNewPasswordLogin($User["Username"], $body["Password"], $ip);

    switch ($NewLogin) { // -> Handle the login

        case "403";
            echo NewResponse("403", false, "Invalid password!", array());
            exit();

        case "200";

            echo NewResponse("200", true, "Successfully logged in!", array());
            exit();
    }

})


?>
