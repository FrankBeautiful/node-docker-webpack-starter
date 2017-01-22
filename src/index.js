import './styles/styles.css';

if(!document.getElementById("livereloadfeedback")) {
    let x = document.createElement("div");
    x.id = "livereloadfeedback";
    document.body.insertBefore(x, document.body.childNodes[0]);
}

/* ------------------------------------------- */
/* ------------------------------------------- */
const testText = "Change text here to check live reload when saved.";
/* ------------------------------------------- */
/* ------------------------------------------- */

document.getElementById("livereloadfeedback").innerHTML = testText;