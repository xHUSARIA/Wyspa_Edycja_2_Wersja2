let responeRule = document.querySelector(".responseRules");
let lawCases = document.querySelectorAll(".rules");

let rulesBox = document.querySelector(".rulesBox")
let closeBtn = document.querySelector(".rulesBox i");



function closeRulesMenu()
{
    rulesBox.classList.add("hidden");
    setTimeout(()=>{rulesBox.style.display = "none";}, 200);
}

closeBtn.addEventListener('click', closeRulesMenu)

lawCases.forEach((element, index) => {
    element.addEventListener("click", ()=>{
        console.log(responeRule[index]);

        rulesBox.style.display = "flex";
        setTimeout(()=>{rulesBox.classList.remove("hidden");}, 200);

        let FileName;
        switch(index)
        {
            case 0:
                FileName = "../html/rules/light.html";
                break;
            case 1: 
                FileName = "../html/rules/medium.html";
                break;
            case 2: 
                FileName = "../html/rules/hard.html";
                break;
            case 3:
                FileName = "../html/rules/end.html";
                break; 
        }

        //function is in rules.js
        fillRulesBox(FileName);

       


    })
})