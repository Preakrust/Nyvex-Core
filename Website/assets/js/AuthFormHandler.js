//Author = nyvex-core.com/u/PreaKrust, made for Nyvex-Core//

//Get the form//

const Form = document.getElementById("AuthForm");

//Get the action//
const Action = Form.getAttribute("data-auth-action")

const Functions = {
    Login: function(form) {
        console.log("Hi!")
    }
}

const SelectedFunction = Functions[Action]

if (SelectedFunction) {
    SelectedFunction(Form)
} else {
    console.error("Invalid Action!")
}
