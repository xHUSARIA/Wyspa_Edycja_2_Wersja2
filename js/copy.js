document.addEventListener("click", (e) => {

    const element = e.target.closest("[data-copy]");

    if (!element) return;

    navigator.clipboard.writeText(element.dataset.copy);

    element.textContent = "Skopiowano!";

    setTimeout(() => {
        element.textContent = "Skopiuj";
    }, 1200);

});

