/*Oppgave 1:
Skriv en funksjon kalt sjekkTall som tar inn et tall som parameter.

Hvis tallet er et partall (tall som kan deles på 2 uten rest), skal funksjonen returnere tallet dobbelt (multiplisere det med 2).
Hvis tallet er et oddetall (tall som ikke kan deles på 2 uten rest), skal funksjonen returnere tallet ganger 3 (multiplisere det med 3).*/

// function    dobbelTall(tall)    {
// let result = tall * 2;
// return result;
// }

// console.log(dobbelTall(5));
// console.log(dobbelTall(10));
// console.log(dobbelTall(15));
// console.log(dobbelTall(20));

// function oddeTall(tall) {
//     return tall * 3;
// }

// console.log(oddeTall(5))
// console.log(oddeTall(7))
// console.log(oddeTall(9))
// console.log(oddeTall(11))

/*Alternativ løsning 1*/

function sjekkTall(tall) {
    if (tall % 2 === 0) {  // Hvis tallet er partall
        return tall * 2;
    } else {  // Hvis tallet er oddetall
        return tall * 3;
    }
}

// Tester funksjonen med forskjellige tall
console.log("Resultat for 4:", sjekkTall(4)); // 8 (partall dobles)
console.log("Resultat for 5:", sjekkTall(5)); // 15 (oddetall ganges med 3)
console.log("Resultat for 6:", sjekkTall(6)); // 12 (partall dobles)
console.log("Resultat for 7:", sjekkTall(7)); // 21 (oddetall ganges med 3)

/*Alternativ løsning 2*/

/*Sammendrag av oppgaven:
I denne oppgaven har vi laget en funksjon som sjekker om et tall er partall eller oddetall, og så gjør forskjellige operasjoner (dobler eller tripler tallet) basert på denne sjekken. 
Vi har også brukt modulus-operatoren for å finne ut om et tall er partall eller oddetall, og brukt if-else-setninger for å velge riktig handling.*/

/* Oppgave 2
Skriv en funksjon kalt tallInverter som tar inn et tall som parameter.

Hvis tallet er større enn 0, skal funksjonen returnere negativt av tallet (f.eks. hvis du gir inn 5, skal resultatet være -5).
Hvis tallet er mindre enn 0, skal funksjonen returnere positivt av tallet (f.eks. hvis du gir inn -5, skal resultatet være 5).
Hvis tallet er 0, skal funksjonen returnere 0.*/

// Funksjon som inverterer et tall
function tallInverter(tall) {
    if (tall > 0) {  // Hvis tallet er større enn 0 (positivt tall)
        return -tall;  // Returner tallet som negativt
    } else if (tall < 0) {  // Hvis tallet er mindre enn 0 (negativt tall)
        return -tall;  // Returner tallet som positivt
    } else {  // Hvis tallet er 0
        return 0;  // Returner 0, siden invertering av 0 fortsatt er 0
    }
}

// Tester funksjonen med forskjellige tall
console.log("Resultat for 5:", tallInverter(5));
console.log("Resultat for -5:", tallInverter(-5));
console.log("Resultat for 0:", tallInverter(0));

/*Sammendrag av oppgaven:
I denne oppgaven skulle du lage en funksjon som inverterer et tall:

Hvis tallet er positivt, skulle det bli gjort negativt.
Hvis tallet er negativt, skulle det bli gjort positivt.
Hvis tallet er 0, skulle det forbli 0.
Funksjonen bruker en enkel if-else-struktur for å sjekke om tallet er større enn, mindre enn eller lik 0. Deretter returnerer den det inverterte resultatet.*/

/*Oppgave 3
Skriv en funksjon kalt absoluttVerdi som tar inn et tall som parameter.

Hvis tallet er positivt eller 0, skal funksjonen returnere tallet som det er.
Hvis tallet er negativt, skal funksjonen returnere positiv verdi av tallet (f.eks. hvis du gir inn -5, skal resultatet være 5).*/

function absoluttVerdi(tall) {
    if (tall < 0) {  // Hvis tallet er negativt
        return -tall;  // Gjør tallet positivt
    } 
    return tall;  // Hvis tallet er positivt eller 0, returner det som det er
}

// Tester funksjonen med forskjellige tall
console.log("Resultat for 5:", absoluttVerdi(5));  // 5
console.log("Resultat for -5:", absoluttVerdi(-5)); // 5
console.log("Resultat for 0:", absoluttVerdi(0));  // 0

/*Sammendrag av oppgaven:
Funksjonen sjekker om tallet er negativt, og i så fall gjør det positivt. Hvis tallet allerede er 0 eller positivt, returneres det som det er.*/