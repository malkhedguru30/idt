window.onload = function () {

    document.getElementById("themeToggle").onclick = function () {
        document.body.classList.toggle("dark-mode");
        console.log("Theme button clicked");
    };

    document.getElementById("demobtn").onclick = function () {
        window.open("demo.html");
    };

};