function oblicz(){
	var a = document.getElementById("a").value;
	var wynik = Math.ceil(a / 4);
document.getElementById("wynik").innerHTML = "Liczba jednolitrowych puszek farby potrzebnych do pomalowania wynosi: "+wynik+"";
}