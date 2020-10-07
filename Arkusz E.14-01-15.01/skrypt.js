function dodawanie(){
var liczba1 = +document.getElementById("a").value;
var liczba2 = +document.getElementById("b").value;
var wynik = liczba1 + liczba2;
document.getElementById("wynik").innerHTML = wynik;
}
function odejmowanie(){
var liczba1 = document.getElementById("a").value;
var liczba2 = document.getElementById("b").value;
var wynik = liczba1 - liczba2;
document.getElementById("wynik").innerHTML = wynik;
}
function mnozenie(){
var liczba1 = document.getElementById("a").value;
var liczba2 = document.getElementById("b").value;
var wynik = liczba1 * liczba2;
document.getElementById("wynik").innerHTML = wynik;
}
function dzielenie(){
var liczba1 = document.getElementById("a").value;
var liczba2 = document.getElementById("b").value;
var wynik = liczba1 / liczba2;
document.getElementById("wynik").innerHTML = wynik;
}