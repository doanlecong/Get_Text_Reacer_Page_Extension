let logData = function (args) {
    if (console && console.log) {
        console.log(args);
    }
}

let style = document.createElement("style");
style.innerHTML = " .extension_p { border: 3px dotted yellow; margin-top : 5px !important; padding : 5px !important;";
document.body.appendChild(style);


let pTags = $("p");
for (let pTag of pTags) {
    if (pTag.innerHTML.trim() !== "") {
        let content = pTag.textContent;
        content = content.split(" ").reverse().join(" ");
        $(pTag).css({
            "border": "3px dashed #f31414",
            "padding": "5px"
        });
        $(pTag).after(`<p class='extension_p'>${content}<p>`);
    }

}