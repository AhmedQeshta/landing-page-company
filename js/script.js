    // -----------------input-------------------
    var menu1 = document.getElementById("menu1");
    var menu2 = document.getElementById("menu2");
    // -----------------output-------------------
    var programingMenu = document.getElementById("programingMenu");
    var helpMenu = document.getElementById("helpMenu");
    
menu2.addEventListener("click", function() {
    if (programingMenu.style.display==="none") {
        programingMenu.style.transition = "0.25s ease-in";
        programingMenu.style.display = "block";
        programingMenu.style.transition = "0.25s ease-in";
    } else {
        programingMenu.style.display = "none"
    }
});
menu1.addEventListener("click", function() {
    if (helpMenu.style.display==="none") {
        helpMenu.style.transition = "0.25s ease-in";
        helpMenu.style.display = "block";
    } else {
        helpMenu.style.display = "none"
    }
});