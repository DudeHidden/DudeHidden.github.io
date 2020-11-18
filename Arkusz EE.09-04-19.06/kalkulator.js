function dodawanie() {
let a= +document.getElementById("pole1").value;
let b= +document.getElementById("pole2").value;
let wynik = a+b;
document.getElementById("wynik").innerHtml = "Wynik dodawania wynosi : " + wynik;
}
function odejmowanie() {
let a= +document.getElementById("pole1").value;
let b= +document.getElementById("pole2").value;
let wynik = a-b;
document.getElementById("wynik").innerHtml = "Wynik odejmowanie wynosi : " + wynik;
}
function dzielenie() {
let a= +document.getElementById("pole1").value;
let b= +document.getElementById("pole2").value;
let wynik = a/b;
document.getElementById("wynik").innerHtml = "Wynik dzielenia wynosi :" + wynik;
}
function mnożenie() {
let a= +document.getElementById("pole1").value;
let b= +document.getElementById("pole2").value;
let wynik = a*b;
document.getElementById("wynik").innerHtml = "Wynik mnożenia wynosi : " + wynik;
}
function potegowanie() {
let a= +document.getElementById("pole1").value;
let b= +document.getElementById("pole2").value;
let wynik = a**b;
document.getElementById("wynik").innerHtml = "Wynik potęgowania wynosi : " + wynik;
}
