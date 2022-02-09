// Decides to open or close the menu
function toggleMenu() {
    $("#mobsec").toggleClass("dropup");
    if ($("#mobsec").hasClass("dropup")) {
        $("#menuIcon").attr("src", "static/img/Icons/Menu.svg");
    } else {
        $("#menuIcon").attr("src", "static/img/Icons/Close.svg");
    }
}

// Smoothly scrolls to wanted section (ID)
function scrollToId(target_id) { 
    $('html, body').animate({
        scrollTop: $("#"+target_id).offset().top
    }, 2000);
}

// Smoothly scrolls to the top
function scrollToTop() {
    $('html, body').animate({
        scrollTop: $('body').offset().top
    }, 2000);
}

// Animates descriptiom
function dynamicDescription() {
    //Defines the parameters
    var periods = ["Full-Stack Developer from Italy.", "Python lover since ever", "Always learning something new", "Nice to meet you!"];
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
    // Created by the good friend of mine Vlad Postu
    // Original repo: https://github.com/vladpostu/TA-Typing-Animation
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
    setTimeout(() => {$("#tab").removeClass("d-none");}, (tout+110)); //170

    setTimeout(() => {
        // Changes the target to the surname
        ta.setSelector("#surname");
        // Types the surname
        ta.typingForward('Di Pasquale', 0);
    }, (tout+380));

    // Sets a generic timeout and shows the semicolon
    setTimeout(() => {
        $("#semicolon").removeClass("d-none"); 
        $("#dyndescr").removeClass("d-none");
        dynamicDescription();
    }, (tout+tout+470));

}


// Onload functions
$(document).ready(
    setTimeout(function() {
        animateName();
    }, 500),
);