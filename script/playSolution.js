let buttonPlay = document.getElementsByClassName("button-play");
for (let i = 0, len = buttonPlay.length; i < len; i++) {
    buttonPlay[i].addEventListener("click", function() {
        tasks[buttonPlay[i].dataset.name]();
    }); 
}