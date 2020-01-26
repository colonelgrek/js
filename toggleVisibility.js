let button = document.getElementsByClassName("button-solution");
let codeElement = document.querySelectorAll("code");
for (let i = 0, len = codeElement.length; i < len; i++) {
    button[i].addEventListener("click", function() {
        if (codeElement[i].classList.contains("solution-hide")) {
            codeElement[i].classList.remove("solution-hide");
        } else {codeElement[i].classList.add("solution-hide");}
    });
}