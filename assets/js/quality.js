//Lev1_2_js-vertiefung_conditional-statements-quelitaet
function weather() {
    let quality = document.getElementById("weather").value
    if ((quality >= 8) && (quality <= 10)) {
        document.getElementById("output").innerHTML = "Super"
    } else if ((quality >= 6) && (quality <= 8)) {
        document.getElementById("output").innerHTML = "Gut"
    } else if ((quality >= 3) && (quality <= 6)) {
        document.getElementById("output").innerHTML = "Okay"
    } else if ((quality >= 0) && (quality <= 3)) {
        document.getElementById("output").innerHTML = "Schlecht"
    }
}