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
            $(".description").fadeOut(500, function() {
                $(".description").text(periods[pos]);
                $(".description").fadeIn(500);
                pos++;
            });
        }
        proceed = !proceed;

        setTimeout(() => animator(periods, pos, !proceed), 3000);
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


    // Sets safely the name and surname text
    setTimeout(() => {
        $("#name").text("Alessandro");
        $("#surname").text("Di Pasquale");
    }, (tout+tout+tout));
}

// Creates the email's link
function createLink(name, subject, message) {
    return "mailto:aledipa.03@gmail.com?subject="+name+subject+"&body="+message;
}

// Sends the email
function sendEmail() {
    let name = $("#mail_name").val();
    let subject = $("#subject").val();
    let message = $("#message").val();
    if (name.length > 0) {
        name += " - ";
    }
    window.location.href = createLink(name, subject, message);
}

// Onload functions
$(document).ready(
    setTimeout(function() {
        animateName();
    }, 500),
);