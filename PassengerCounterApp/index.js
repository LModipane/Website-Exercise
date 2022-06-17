//document.getElementById("total-number-of-people").innerHTML = 20;
//note this line above will instantiate the HTML document then grab some element with the id specified above finally we will assign some value to the text/content of that element

var count = 0;
function increment() {
    count += 1;
    console.log(count)
    document.getElementById("total-number-of-people").innerHTML = count;
}
function decrement() {
    count -= 1;
    console.log(count)
    document.getElementById("total-number-of-people").innerHTML = count;
}

var previousEntriesEl = document.getElementById("Previous-entries")
function save(){
    previousEntriesEl.innerHTML += count + " - ";
    document.getElementById("total-number-of-people").innerHTML = 0;
    count = 0;
}

//this is an example of document object manipulation, AKA the DOM. In other words this is how javascript can change the webpage in an object oriented way 
//note we consider the webpage as some object with data-type document.

//lets a paragraph that display the previous entries 
