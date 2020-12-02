const idSpan = "span_button";

let logData = function (args) {
    if (console && console.log) {
        console.log(args);
    }
}

let style = document.createElement("style");
style.innerHTML = " .extension_p { border: 3px dotted yellow; margin-top : 5px !important; padding : 5px !important;}";
document.body.appendChild(style);

function readTextToSpeech(text) {
    if(!text.length) {
        // read text ! 
    }
}


function hidePopup(event) {

}

function buildComponent(target) {
    let span = document.createElement('span');
    let buttonRead = document.createElement('button');
    span.classList="";
    span.id = idSpan;
    Object.assign(span.style, {
        backgroundColor : "white",
        color: "black",
        padding: "5px",
        borderRadius : "5px",
        bottom: "5px",
        right : "5px",
    });

    buttonRead.classList = "";
    Object.assign(buttonRead.style, {
        border : "1px solid blue",
        borderRadius : "5px",
        padding : "5px",
    });
    buttonRead.innerHTML= "Read out loud";  
    buttonRead.onclick = e => {
        e.preventDefault();
        e.stopPropagation();
        let text = $(target).text();
        logData(text);
        readTextToSpeech(text);
    };

    span.appendChild(buttonRead);
    target.appendChild(span);
}

function showPopup(event) {
    const target  = event.target;
    logData(target);
    buildComponent(target);
}

function inHover(event) {
    const target = event.target;
    Object.assign(target.style , {
        'background-color' : "black",
        'color' :'white',
        'position' : "relative",
    });

}

function outHover(event) {
    const target = event.target;
    Object.assign(target.style, {
        'background-color' : "",
        'color' : 'black',
        'position' : "",
    });
    logData(target);
    const span = document.getElementById(idSpan);
    span && target.removeChild(span);
}


let pTags = $("p");
for (let pTag of pTags) {
    if (pTag.innerHTML.trim() !== "") {
        //let content = pTag.textContent;               
        //content = content.split(" ").reverse().join(" ");
        $(pTag).css({
            "border": "3px dashed #f31414",
            "padding": "5px",
        });

        $(pTag).on('mouseenter', e => inHover(e));
        $(pTag).on('mouseleave', e => outHover(e));
        $(pTag).on('click', e => showPopup(e));
        //$(pTag).after(`<p class='extension_p'>${content}<p>`);
    }

}