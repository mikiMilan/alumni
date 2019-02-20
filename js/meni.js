function myFunctionMeni(x) {
    x.classList.toggle("change");
    t = document.getElementById("myNav");
    if (t.style.width == "260px") {
        t.style.width = "0px";
    } else {
        t.style.width = "260px";
    }
}