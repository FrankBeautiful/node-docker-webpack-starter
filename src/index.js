if(!document.getElementById("livereloadfeedback")) {
    var livereloadfeedback = document.createElement("div");
    livereloadfeedback.id = "livereloadfeedback";
    document.body.insertBefore(livereloadfeedback, document.body.childNodes[0]);
}

/* ------------------------------------------- */
/* ------------------------------------------- */
var testText = "Change text here to check live reload when saved....";
/* ------------------------------------------- */
/* ------------------------------------------- */

document.getElementById("livereloadfeedback").innerHTML = testText;