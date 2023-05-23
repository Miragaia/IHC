document.addEventListener("DOMContentLoaded", function() {  
       
    function logout() {
        var link = document.getElementById("logout");
        localStorage.setItem("ver", "false");

        link.href = "profile.html";

    }

    document.getElementById("logout").addEventListener("click", logout);

});