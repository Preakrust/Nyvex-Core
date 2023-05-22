//Author = nyvex-core.com/u/PreaKrust, made for Nyvex-Core//

//Get the url thingy//

const url = new URL(window.location.href);
const queryParams = new URLSearchParams(url.search);


const FETCH = function (Callback) {
    fetch("https://nyvex-core.com/api/v3/users/@me/", {
        method: "GET"
    }).then(AuthRequest => {
        return AuthRequest.json()
    }).then(jsonAuthResponse => {
        Callback(jsonAuthResponse)
    })
}

const AccountFunctions = {
    ["https://nyvex-core.com/auth/v3/login/"]: function () {
        FETCH(function(UserInfo) {
            if (UserInfo.IsBanned == true) { //Prevent banned people from accessing the page
                window.location.href = 'https://nyvex-core.com/e/banned/';
            }
    
            const redirectUrl = queryParams.get('redirect-url');
    
            if (UserInfo.LoggedIn === true && UserInfo.IsBanned == false) {
                if (redirectUrl) {
                    
                    window.location.href = redirectUrl;
                } else {
                    // Redirect to a default URL
                    window.location.href = 'https://nyvex-core.com/@me';
                }
            }
        })
    }
}

const SelectedAccountFunction = AccountFunctions[window.location.href];

if (SelectedAccountFunction) {
    SelectedAccountFunction()
} else {
    console.error("Invalid url")
}
