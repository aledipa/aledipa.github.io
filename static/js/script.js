// Decides to open or close the menu
function toggleMenu() {
    if ($("#mobsec").hasClass("d-none")) {
        openMenu();
    } else {
        closeMenu();
    }
}

// Opens the mobile dropdown menu
function openMenu() {
    $("#mobsec").removeClass("d-none");
    $("#menuIcon").attr("src", "static/img/Icons/Close.svg");
}

// Closes the mobile dropdown menu
function closeMenu() {
    $("#mobsec").addClass("d-none");
    $("#menuIcon").attr("src", "static/img/Icons/Menu.svg");
}