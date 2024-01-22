
// Knapp funktion för menyn. 
let btnContainer = document.getElementById('list');

let btns = btnContainer.getElementsByClassName('listItem');

for(let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function () {
        var current = document.getElementsByClassName("active");

        if (current.length > 0) {
          current[0].className = current[0].className.replace(" active", "");
        }

        this.className += " active";
    });
}

//Dropdown som finns på Razor undersidan
let dropdownBtn = document.getElementById("information");
let content = document.getElementById("textbox");

content.style.display = "none";

dropdownBtn.addEventListener("click", function() {
    if(content.style.display != "block") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
})

