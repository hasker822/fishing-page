var toggleBtn = document.querySelector(".burg_b");
var menu = document.querySelector('.m-menu');
toggleBtn.onclick = function () {
    if (menu.className === "m-menu") {
        menu.classList.add("active-m");
    }
    else{
        menu.classList.remove("active-m"); 
    }
};
