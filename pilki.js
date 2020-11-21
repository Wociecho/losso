const ruchy = [];
let poczatekS = 0;
let poczatekW = 550;
//ustalanie pozycji początkowej
for (let i = 0; i < document.getElementsByClassName('pilka').length; i++) {
    if (poczatekS >= 550) {
        poczatekS = 0;
        poczatekW -= 60;
    }
    document.getElementsByClassName('pilka')[i].style.left = poczatekS + "px";
    document.getElementsByClassName('pilka')[i].style.top = poczatekW + "px";

    poczatekS += 60;
}

function start() {

    //przypisywanie ruchów do zmiennej w tablicy
    for (let i = 0; i < document.getElementsByClassName('pilka').length; i++) {
        let pozycjaX = document.getElementsByClassName('pilka')[i].offsetLeft;
        let pozycjaY = document.getElementsByClassName('pilka')[i].offsetTop;

        let przesuniecieX = Math.ceil(Math.random() * 5);
        let przesuniecieY = Math.ceil(Math.random() * 5);

        let kierunekKuli = Math.ceil(Math.random() * 4);
        //szybkość kuli
        let szybkosc = Math.ceil(Math.random() * 30) + 10;
        let szybkoscObrotow = Math.ceil(Math.random() * 6) + 3;
        kierunekObrotow = "reverse";
        document.getElementsByClassName('pilka')[i].children[0].style.animation = "spin 0." + szybkoscObrotow + "s infinite linear " + kierunekObrotow;

        //żeby nie robiły się kwadraty
        if (przesuniecieX == przesuniecieY && przesuniecieX != 5) {
            przesuniecieX++;
        } else if (przesuniecieX == przesuniecieY) {
            przesuniecieY--;
        }
        //----

        // Animacja/odbicia
        function animacja(nr) {
            //Koniec
            /*if (pozycjaX > 500 && pozycjaY < 50) {
                alert('BRAWOOOO!');
                clearInterval(ruchy[i]);
            }*/
            //Kierunek NE
            if (kierunekKuli == 1) {
                if (pozycjaX < 550 && pozycjaY > 0) {
                    pozycjaX += przesuniecieX;
                    pozycjaY -= przesuniecieY;

                    document.getElementsByClassName('pilka')[nr].style.left = pozycjaX + "px";
                    document.getElementsByClassName('pilka')[nr].style.top = pozycjaY + "px";
                } else if (pozycjaX >= 550) {
                    kierunekKuli = 2;
                } else if (pozycjaY <= 0) {
                    kierunekKuli = 3;
                }
            }
            //Kierunek NW
            if (kierunekKuli == 2) {
                if (pozycjaX > 0 && pozycjaY > 0) {
                    pozycjaX -= przesuniecieX;
                    pozycjaY -= przesuniecieY;

                    document.getElementsByClassName('pilka')[nr].style.left = pozycjaX + "px";
                    document.getElementsByClassName('pilka')[nr].style.top = pozycjaY + "px";
                } else if (pozycjaX <= 0) {
                    kierunekKuli = 1;
                } else if (pozycjaY <= 0) {
                    kierunekKuli = 4;
                }
            }
            //Kierunek SE
            if (kierunekKuli == 3) {
                if (pozycjaX < 550 && pozycjaY < 550) {
                    pozycjaX += przesuniecieX;
                    pozycjaY += przesuniecieY;

                    document.getElementsByClassName('pilka')[nr].style.left = pozycjaX + "px";
                    document.getElementsByClassName('pilka')[nr].style.top = pozycjaY + "px";
                } else if (pozycjaX >= 550) {
                    kierunekKuli = 4;
                } else if (pozycjaY >= 550) {
                    kierunekKuli = 1;
                }
            }
            //Kierunek SW
            if (kierunekKuli == 4) {
                if (pozycjaX > 0 && pozycjaY < 550) {
                    pozycjaX -= przesuniecieX;
                    pozycjaY += przesuniecieY;

                    document.getElementsByClassName('pilka')[nr].style.left = pozycjaX + "px";
                    document.getElementsByClassName('pilka')[nr].style.top = pozycjaY + "px";
                } else if (pozycjaX <= 0) {
                    kierunekKuli = 3;
                } else if (pozycjaY >= 550) {
                    kierunekKuli = 2;
                }
            }
        }
        //---

        ruchy[i] = setInterval(animacja, szybkosc, i);
    }
}

function stop() {
    for (let i = 0; i < document.getElementsByClassName('pilka').length; i++) {
        clearInterval(ruchy[i]);
    }
    for (let i = 0; i < document.getElementsByClassName('pilka').length; i++) {
        document.getElementsByClassName('pilka')[i].children[0].style.animationPlayState = "paused";
    }
}
