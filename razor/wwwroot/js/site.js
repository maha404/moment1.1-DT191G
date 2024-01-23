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

