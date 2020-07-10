// let text = "Lorem ipsum dolor sit amet."
// console.log(text.indexOf("m", 5))
// console.log(text.search("m"))
// console.log(text.lastIndexOf("L"))
// console.log(true.toPrecision(2))
// console.log(text.toUpperCase())

let num = 5
if (num < 3) {
    console.log(`Ich bin true`)
} else if (num < 4) {
    console.log("Ich bin false")
} else {
    console.log("All false")
}

function myFunc(para) {
    if (para == "hallo") {
        console.log("Willkommen ihr alle!")
    } else {
        console.log("Bye")
    }
}
myFunc("Hallo")

// Schreibt euch eine Funktion, der ein Paramenter übergeben wird
// und die wenn der Parameter kleiner als 10 ist in der Console "Guten Morgen" ausgibt
// wenn der Parameter unter 14 ist "Guten Mittag"
// falls der Parameter etwas anderes ist "Guten Tag" ausgibt
// ruft die Funktion mit unterschiedlichen Parametern auf

function time(para) {
    if (para < 10) {
        console.log("Guten Morgen")
    } else if (para < 14) {
        console.log("Guten Mittag")
    } else {
        console.log("Guten Tag")
    }
}
time(23)

// greeting(6)
// greeting(13)
// greeting(14)

// Logical Operators
// && - And
let x = 1
let y = 4

if (x < 2 && y > 6) {
    console.log("Das stimmt alles!")
} else {
    console.log("Leider nicht")
}
// if (wochentag == freitag && uhrzeit > 15 Uhr) {
//     Wochenende!
// }

// console.log(true && true && false)

// || - Or (Auf dem Keyboard Alt+7)

if ((x < 2) || (y > 6)) {
    console.log("Das stimmt alles!")
} else {
    console.log("Leider nicht")
}

// ! - Not

if (!((x < 2) && (y > 6))) {
    console.log("Das stimmt alles!")
} else {
    console.log("Leider nicht")
}

function checkGender() {
    console.log("Working")
    if (document.getElementById('male').checked == true) {
        console.log("User is male")
    } else {
        console.log("User is female")
    }
}