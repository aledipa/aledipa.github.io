// Decides to open or close the menu
function toggleMenu() {
    const $mobsec = $("#mobsec");
    const $menuButton = $(".menu");
    $mobsec.toggleClass("dropup");
    
    const isExpanded = !$mobsec.hasClass("dropup");
    $menuButton.attr("aria-expanded", isExpanded);
    
    if ($mobsec.hasClass("dropup")) {
        $("#menuIcon").attr("src", "static/img/Icons/Menu.svg");
    } else {
        $("#menuIcon").attr("src", "static/img/Icons/Close.svg");
    }
}

// Handle smooth scrolling for hash links
$(document).on('click', 'a[href^="#"]', function(e) {
    const target = $(this.getAttribute('href'));
    if (target.length) {
        e.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1000);
    }
});

// Animates description
let descriptionIntervalId = null;

function dynamicDescription() {
    // Defines the parameters
    const periods = ["Full-Stack Developer from Italy.", "Python lover since ever", "Always learning something new", "Nice to meet you!"];
    let pos = 0;
    let proceed = true;

    // Clear any existing interval
    if (descriptionIntervalId) {
        clearInterval(descriptionIntervalId);
    }

    // Recursively animates the periods given in the array
    function animator() {
        // Resets the counter when it reaches the limit
        if (periods.length === pos) {
            pos = 0;
        }
        // Alternately updates the period and waits
        if (proceed) {
            $(".description").fadeOut(500, function() {
                $(".description").text(periods[pos]);
                $(".description").fadeIn(500);
                pos++;
            });
        }
        proceed = !proceed;
    }

    // Initial call and set interval
    descriptionIntervalId = setInterval(animator, 2000);
}

// Animates the name
function animateName() {
    const typed_name = new Typed('#name', {
        stringsElement: '#typed-name',
        showCursor: false,
        typeSpeed: 50,
    });
    // Sets a generic timeout
    const tout = 800;

    // Sets a generic timeout and shows the dots
    setTimeout(() => {
        $("#dots").removeClass("d-none");
    }, tout);

    // Sets a generic timeout and shows the tab
    setTimeout(() => {
        $("#tab").removeClass("d-none");
    }, (tout + 100));

    const typed_surname = new Typed('#surname', {
        stringsElement: '#typed-surname',
        showCursor: false,
        startDelay: 950,
        typeSpeed: 50,
    });

    // Sets a generic timeout and shows the semicolon
    setTimeout(() => {
        $("#semicolon").removeClass("d-none"); 
        $("#dyndescr").removeClass("d-none");
        dynamicDescription();
    }, (tout + 1000));
}

// Creates the email's link
function createLink(name, subject, message) {
    const encodedSubject = encodeURIComponent(name + subject);
    const encodedMessage = encodeURIComponent(message);
    return `mailto:aledipa.03@gmail.com?subject=${encodedSubject}&body=${encodedMessage}`;
}

// Sends the email
function sendEmail() {
    const name = $("#mail_name").val().trim();
    const subject = $("#subject").val().trim();
    const message = $("#message").val().trim();
    
    // Validate required fields
    if (!subject || !message) {
        alert("Please fill in all required fields (Subject and Message).");
        return;
    }
    
    const namePrefix = name.length > 0 ? name + " - " : "";
    window.location.href = createLink(namePrefix, subject, message);
}

/* DARK MODE */
function toggleAllDarkIcons() {
    $(".dark-icon").toggleClass("d-none");
}

function toggleAllLightIcons() {
    $(".light-icon").toggleClass("d-none");
}

function toggleAllIcons() {
    toggleAllDarkIcons();
    toggleAllLightIcons();
}

function toggleDarkReader() {
    toggleAllIcons();
    if (DarkReader.isEnabled()) {
        DarkReader.disable();

    } else {
        DarkReader.enable({
            brightness: 100,
            contrast: 90,
            sepia: 10
        });
    }
}

// Onload functions
$(document).ready(function() {
    setTimeout(function() {
        animateName();
    }, 500);
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize marquees
    const marquees = document.querySelectorAll('.marquee--auto');
    marquees.forEach(marquee => {
        const items = marquee.querySelectorAll('.marquee__item');
        const itemCount = items.length;
        marquee.style.setProperty('--marquee-items', itemCount);
        items.forEach((item, index) => {
            item.style.setProperty('--marquee-item-index', index + 1);
        });
    });

    // Initialize inverted marquees
    const invertedMarquees = document.querySelectorAll('.inverted-marquee');
    invertedMarquees.forEach(marquee => {
        const items = marquee.querySelectorAll('.inverted-marquee__item');
        const itemCount = items.length;
        marquee.style.setProperty('--marquee-items', itemCount);
        items.forEach((item, index) => {
            item.style.setProperty('--marquee-item-index', index + 1);
        });
    });
    
    // Initialize dark mode
    if (typeof DarkReader !== 'undefined') {
        DarkReader.auto({
            brightness: 100,
            contrast: 95,
            sepia: 10
        });
        
        if (DarkReader.isEnabled()) {
            toggleAllIcons();
        }
    }
});