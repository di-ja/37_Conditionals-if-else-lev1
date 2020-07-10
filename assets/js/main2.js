// Lev1_1_js-vertiefung_conditional-statements_score
function adult() {
    console.log(document.getElementById("age").value)
    let age = document.getElementById("age").value
    if (age >= 18) {
        console.log(`true`)
        document.getElementById("ergebnis").innerHTML = "volljährig"
    } else if (age < 18) {
        console.log(`false`)
        document.getElementById("ergebnis").innerHTML = "minderjährig"
    }
}

