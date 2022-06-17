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

