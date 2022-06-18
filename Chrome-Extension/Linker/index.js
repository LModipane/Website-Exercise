const saveLinkbtn = document.getElementById("save-link-btn");
const textField = document.getElementById("text-filed-el");
const ulEl = document.getElementById("output-list");


let myLinksArray = [];
saveLinkbtn.addEventListener("click", function(){
    let fieldValue = getFieldValue();
    if(fieldValue !== ""){
        myLinksArray.push(fieldValue);
        displayOutput(myLinksArray);
        clearfield()
    }
}); //this is a cleaner way to define functionality to the the SAVE LINK bu


function getFieldValue(){
    return document.querySelector("input").value;
}//this reurns the value in the text-field

function displayOutput(myLinksArray){
    let linkslist = "";
    for(let linksPosition = 0; linksPosition < myLinksArray.length; linksPosition++){
        let link = myLinksArray[linksPosition];
        linkslist += `<li>
                        <a href = "${link} "target = "_blank"> ${link} </a>
                    </li>`;
    }
    ulEl.innerHTML = linkslist;
}

function clearfield(){
    document.querySelector("input").value = "";
}


