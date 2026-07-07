async function fillNav(){
    const response = await fetch("../html/nav.html");
    const text = await response.text();

    document.querySelector('nav').innerHTML = text;
}

async function fillFooter(){
    const response = await fetch("../html/footer.html");
    const text = await response.text();

    document.querySelector('footer').innerHTML = text;
}

async function fillRulesBox(FileName) {
    
    const response = await fetch(FileName);
    const text = await response.text();

    responeRule.innerHTML = text;
}


fillFooter();