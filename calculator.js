//read value from html elements
//document.getElementById('percentage').value = ;
let x;
function display (x) {
    document.getElementById('visor').innerHTML += `${x}`;
}
function ac () {
    let ac = document.getElementById(`visor`).innerHTML;
    document.getElementById(`visor`).innerHTML = " ";
}
function plusminus () {
    let plusminus = document.getElementById(`visor`).innerHTML;
    document.getElementById(`visor`).innerHTML = plusminus*(-1);
}
function percentage () {
    let percentage = document.getElementById(`visor`).innerHTML;
    document.getElementById(`visor`).innerHTML = percentage/100;
}
function result () {
    let result = document.getElementById('visor').innerHTML;
    document.getElementById('visor').innerHTML = eval(result);
}
