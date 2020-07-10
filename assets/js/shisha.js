function adult() {
    let age = document.getElementById("input").value
    if (age >= 18) {
        console.log(`true`)
        document.getElementById("ergebnis").innerHTML = "volljährig"
    } else if (age < 18) {
        console.log('false')
        document.getElementById("ergebnis").innerHTML = "minderjährig"
    }
}