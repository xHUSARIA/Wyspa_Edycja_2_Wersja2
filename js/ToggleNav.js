let toggler = document.querySelector("#toggler i");

let navShown = true;

function toggleNav(){
    const nav = document.querySelector("nav div");
    nav.classList.toggle("hidden");

    if (!navShown)
        toggler.className = "fa-solid fa-eye-slash";
    else
        toggler.className = "fa-solid fa-eye";

    navShown = !navShown;

}

toggler.addEventListener("click",toggleNav)


function favicon() {
    const link = document.createElement("link");
    link.rel = "icon";
    link.type = "image/x-icon";
    link.href = "../images/favicon.jpg";

    document.head.appendChild(link);
}

favicon();