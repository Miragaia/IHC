document.addEventListener("DOMContentLoaded", function() {


    window.addEventListener("keydown", function (event) {
        if (event.key == "Enter") { validate() }
    }, true);

    window.addEventListener("keydown", function (event) {
        if (event.key == "Enter") { validate2() }
    }, true);


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

    
    document.getElementById("userLink").addEventListener("click", validateUser);

});