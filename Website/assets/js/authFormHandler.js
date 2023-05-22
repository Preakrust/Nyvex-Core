//Author = nyvex-core.com/u/PreaKrust, made for Nyvex-Core//

//Get the form//

const Form = document.getElementById("AuthForm");

//Get the action//
const Action = Form.getAttribute("data-auth-action");
const Crsf = Form.getAttribute("data-crsf");

const Functions = {
    Login: function (form) {
        document.addEventListener("DOMContentLoaded", function (Event) {
            form.addEventListener("submit", function (FormEvent) {
                FormEvent.preventDefault();

                const FormDataLogin = new FormData(form)

                fetch("https://nyvex-core.com/api/v3/auth/login/", {
                    method: "LOGIN",
                    headers: {
                        CrsfProtection: Crsf
                    },

                    body: JSON.stringify({
                        Username: FormDataLogin.get("Username"),
                        Password: FormDataLogin.get("Password")
                    })
                })
            })
        })
    }
}


const SelectedFunction = Functions[Action]

if (SelectedFunction) {
    SelectedFunction(Form)
} else {
    console.error("Invalid Action!")
}
