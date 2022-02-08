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
    $("#menuIcon").attr("src", "static/img/Icons/Close.svg");
    $("#mobsec").removeClass("d-none");
}

// Closes the mobile dropdown menu
function closeMenu() {
    $("#menuIcon").attr("src", "static/img/Icons/Menu.svg");
    $("#mobsec").addClass("d-none");
}

// Animates descriptiom
function dynamicDescription() {
    //Defines the parameters
    var periods = ["Full-Stack Developer from North Italy.", "Python lover since ever", "Always learning something new", "Nice to meet you!"];
    var pos = 0;
    var proceed = true;

    //Calls the recursive function
    setTimeout(animator(periods, pos, proceed), 100);

    //Recursively animates the periods given in the array
    function animator(periods, pos, proceed) {
        //Resets the counter when it reaches the limit
        if (periods.length == pos) {pos=0}
        //Alternately updates the period and waits
        if (proceed) {
            $(".description").toggleClass("slide-left", true);
            $(".description").text(periods[pos]);
            pos++
        } else {
            $(".description").toggleClass("slide-left", false);
        }
        proceed = !proceed;

        setTimeout(() => animator(periods, pos, proceed), 1500);
    }
    
}

function animateName() {
    // Istantiates TypingAnimation Class
    let ta = new TA({
        htmlEl: "#name",
        minDelay: 75,
        maxDelay: 150,
    });

    // Sets a generic timeout
    var tout = 1350;

    // Types the name
    ta.typingForward('Alessandro', 0);

    // Sets a generic timeout and shows the dots
    setTimeout(() => {$("#dots").removeClass("d-none");}, tout);

    // Sets a generic timeout and shows the tab
    setTimeout(() => {$("#tab").removeClass("d-none");}, (tout+150));

    setTimeout(() => {
        // Changes the target to the surname
        ta.setSelector("#surname");
        // Types the surname
        ta.typingForward('Di Pasquale', 0);
    }, (tout+350));

    // Sets a generic timeout and shows the semicolon
    setTimeout(() => {
        $("#semicolon").removeClass("d-none"); 
        $("#dyndescr").removeClass("d-none");
        dynamicDescription();
    }, (tout+tout+460));

}


// Onload functions
$(document).ready(
    setTimeout(function() {
        animateName();
    }, 500)
    
);