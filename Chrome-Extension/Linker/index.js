const saveLinkbtn = document.getElementById("save-link-btn");
const deleteLinkbtn = document.getElementById("Delete-link-btn");
const textField = document.getElementById("text-filed-el");
const ulEl = document.getElementById("output-list");

let myLinksArray = [];

let mylinksFromLocalStorage = fetchFromStorage();
if(mylinksFromLocalStorage){
    myLinksArray = mylinksFromLocalStorage;
    displayMyLinks(myLinksArray);
}//if the storage is not empty i want the myLinksArray to be initialised to the array in storage then display it

saveLinkbtn.addEventListener("click", function(){

    let fieldValue = getFieldValue();
    if(fieldValue !== ""){
        myLinksArray.push(fieldValue);
        storeMyLinks(myLinksArray);
        displayMyLinks(myLinksArray);
        clearfield()
    }
}); //this is a cleaner way to define functionality to the the SAVE LINK bu

deleteLinkbtn.addEventListener("dblclick", function(){
    localStorage.clear();
    myLinksArray =[];
    displayMyLinks(myLinksArray);
})

function getFieldValue(){
    return document.querySelector("input").value;
}//this reurns the value in the text-field

function displayMyLinks(myLinksArray){
    let linkslist = "";
    for(let linksPosition = 0; linksPosition < myLinksArray.length; linksPosition++){
        let link = myLinksArray[linksPosition];
        linkslist += `<li>
                        <a href = "${link}" target = "_blank"> ${link} </a>
                    </li>`;
    }
    ulEl.innerHTML = linkslist;
}

function clearfield(){
    document.querySelector("input").value = "";
}

function storeMyLinks(array){
    let arrayString = JSON.stringify(array);
    localStorage.setItem("myLinks", arrayString);
}
function fetchFromStorage(){
    return JSON.parse(localStorage.getItem("myLinks"));
}

