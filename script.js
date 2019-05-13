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
    let dropval = false;
    function dropdown() {
            dropval = !dropval;
            var drop = document.getElementById("dropdown-content");
            if(dropval) {
                drop.innerHTML = "<div>" + 
                "<div class = 'opt'><i class='fab fa-html5 text-danger'></i>&nbsp;General.html</div>"+
                "<div class = 'opt '><i class='fab fa-css3-alt text-primary'></i>&nbsp;Projects.css</div>"+
                "<div class = 'opt '><i class='fab fa-js text-warning'></i>&nbsp;  Academics.js</div>"+
                "<div class = 'opt '><i class='fab fa-react text-primary'></i>&nbsp;Contact.jsx</div>"+
            "</div>";
            } else {
                drop.innerHTML = "";
            }
            
    }
    //20000