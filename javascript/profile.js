document.addEventListener("DOMContentLoaded", function() {


    


    window.addEventListener("keydown", function (event) {
        if (event.key == "Enter") { validate() }
    }, true);

    window.addEventListener("keydown", function (event) {
        if (event.key == "Enter") { validate2() }
    }, true);


    function validate() {

        uname = document.getElementById("uname").value
        password = document.getElementById("psw").value    
        
        var link = document.getElementById("login");



        if (!(uname != "")) {
            invalid("inv_name", true)
            return
        }
        else { invalid("inv_name", false) }



        if (!(password.length >= 8)) {
            invalid("inv_password", true)
            return
        }
        else { invalid("inv_password", false) }

        link.href = "personalData.html";
        
    }

    function validate2() {
        uname2 = document.getElementById("uname2").value
        email = document.getElementById("email").value
        password2 = document.getElementById("psw2").value

        emailparts = email.split("@")

        var link = document.getElementById("register");

        if (!(uname2 != "")) {
            invalid("inv_name2", true)
            return
        }
        else { invalid("inv_name2", false) }


        if (!(email.includes("@") && emailparts.length == 2 && emailparts[1].includes("."))) {
            invalid("inv_email", true)
            return
        }
        else { invalid("inv_email", false) }


        if (!(password2.length >= 8)) {
            invalid("inv_password2", true)
            return
        }
        else { invalid("inv_password2", false) }

        
        link.href = "personalData.html";
        
    }

    function invalid(id, bool) {

        if (bool == true) { 
            document.getElementById(id).classList = "invalid-feedback d-block";
            localStorage.setItem("ver", "false"); 
            return 
        }
        else if (bool == false) { 
            document.getElementById(id).classList = "invalid-feedback d-none";
            localStorage.setItem("ver", "true"); 
            return
        }

    }


    function validateUser() {
        var link = document.getElementById("userLink");
        var ver = localStorage.getItem("ver");

        if (ver == "false") {
            
            link.href = "profile.html"; 
        }
        if (ver == "true") {
            link.href = "personalData.html";
        }
    }

    localStorage.setItem("ver", "false");
    document.getElementById("login").addEventListener("click", validate);
    document.getElementById("register").addEventListener("click", validate2);
    document.getElementById("userLink").addEventListener("click", validateUser);

});