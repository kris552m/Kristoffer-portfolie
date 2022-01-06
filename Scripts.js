console.log("Hello World");



// Dont click
function myFunction() {
    document.getElementById("demo").innerHTML = "i dislike you :(";
}

// Accordion Javascript
var acc = document.getElementsByClassName("accordion");
var i;


for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    })};