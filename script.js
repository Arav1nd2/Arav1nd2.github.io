var consoleScreen = true;
        function setupTypewriter(t) {
        var HTML = t.innerHTML;

        t.innerHTML = "";

        var cursorPosition = 0,
            tag = "",
            writingTag = true,
            tagOpen = false,
            typeSpeed = 0.01,
            tempTypeSpeed = 0;

        var type = function() {
        
            if (writingTag === true) {
                tag += HTML[cursorPosition];
            }
            
            if (HTML[cursorPosition] === "<") {
                tempTypeSpeed = 0;
                if (tagOpen) {
                    tagOpen = false;
                    writingTag = true;
                } else {
                    tag = "";
                    tagOpen = true;
                    writingTag = true;
                    tag += HTML[cursorPosition];
                }
            }
            if (!writingTag && tagOpen) {
                tag.innerHTML += HTML[cursorPosition];
            }
            if (!writingTag && !tagOpen) {
                if (HTML[cursorPosition] === " ") {
                    tempTypeSpeed = 0;
                } else {
                    tempTypeSpeed = (Math.random() * typeSpeed) + 10;
                }
                t.innerHTML += HTML[cursorPosition];
            }
            if (writingTag === true && HTML[cursorPosition] === ">") {
                tempTypeSpeed = (Math.random() * typeSpeed) + 10;
                writingTag = false;
                if (tagOpen) {
                    var newSpan = document.createElement("span");
                    t.appendChild(newSpan);
                    newSpan.innerHTML = tag;
                    tag = newSpan.firstChild;
                }
            }

            cursorPosition += 1;
            if (cursorPosition < HTML.length - 1) {
                setTimeout(type, tempTypeSpeed);
            }

        };

        return {
            type: type
        };
    }
    var mainPage,typer;
    mainPage = document.getElementById("main-page");
    typer = document.getElementById('npm-install');
    typewriter = setupTypewriter(typer);
    typewriter.type();

    // Start the npm install
    setTimeout(function() {
        typer.style.display = 'block';
    },1);
    setTimeout(function() {
        typer.style.display = "none";
        mainPage.style.display = "block";
    },20000);
    
    //20000

    var navState = true;
    function closeNav() {
        if(navState) {
            document.getElementById('navid').style.display = 'none';
            navState = false;    
        } else {
            document.getElementById('navid').style.display = 'block';
            navState = true;
        }
        //document.getElementsByClassName('main-area').style.display = 'block';
    }
    function openNav() {
        if(navState) {
            document.getElementById('navid').style.display = 'none';
            navState = false;    
        } else {
            document.getElementById('navid').style.display = 'block';
            navState = true;
        }
        //document.getElementsByClassName('main-area').style.display = 'none';
    }


    window.onload = function() {
        console.log(screen.width);
        if(screen.width < 700 ) {
            closeNav();
        }
    }


    function setTab(type) { 
        var tab = document.getElementById("id");
        if(type === "general") {
            tab.innerHTML = "General.html";
            document.getElementById('general').style.display = 'block';
            document.getElementById('projects').style.display = 'none';
            document.getElementById('academics').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            if(screen.width < 700 ) {
                closeNav();
            }
        } else if(type === "projects") {
            tab.innerHTML = "Projects.css";
            document.getElementById('projects').style.display = 'block';
            document.getElementById('academics').style.display = 'none';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('general').style.display = 'none';
            if(screen.width < 700 ) {
                closeNav();
            }
        } else if(type === "academics") {
            tab.innerHTML = "Academics.js";
            document.getElementById('projects').style.display = 'none';
            document.getElementById('academics').style.display = 'block';
            document.getElementById('contact').style.display = 'none';
            document.getElementById('general').style.display = 'none';
            if(screen.width < 700 ) {
                closeNav();
            }
        } else if (type === "contact") {
            tab.innerHTML = "Contact.jsx";
            document.getElementById('projects').style.display = 'none';
            document.getElementById('academics').style.display = 'none';
            document.getElementById('contact').style.display = 'block';
            document.getElementById('general').style.display = 'none';
            if(screen.width < 700 ) {
                closeNav();
            }
        }
    }