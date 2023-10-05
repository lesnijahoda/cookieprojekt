const cookie = document.getElementById("cookie");
const counter = document.getElementById("counter");
const clickUpgrade = document.getElementById("clickUpgrade");
const autoclickerUpgrade = document.getElementById("autoclickerUpgrade");
const banana = document.getElementById("banana");
const farmaUpgrade = document.getElementById("farmaUpgrade");
const farmacounter = document.getElementById("farmacounter");
const farmacounterlevel = document.getElementById("farmacounterlevel");

let numberOfCookies = 0;
let costOfclickUpgrade = 20;
let clickUpgradeIncrease = 1;
let autoclickIncrease = 0;
let autoclicker;
let autoclickerCost = 100;


let farmaUpgradeIncrease = 0;
let farmaUpgradeCost =  100000;
let farma;
let farmalevel =0;
/*const updateinfo = () => {
    
}*/

banana.onmouseover = () => {
    console.log("banana mouse")
    numberOfCookies += clickUpgradeIncrease;
    counter.innerHTML = `Points: ${numberOfCookies}`;
}



cookie.onclick = () => {
    numberOfCookies += clickUpgradeIncrease;
    //counter.innerHTML = "Cookies: " + numberOfCookies;
    counter.innerHTML = `Cookies: ${numberOfCookies}`;
    console.log("click")
}


//vytvoření funkce
//function nazev() {}

function cheats() {
    console.log("cheats on!");
    numberOfCookies += 1000000;
    counter.innerHTML = "Cookies: " + numberOfCookies;
}
//spusteni funkce
//cheats();


const cheatsTwo = () => {
    numberOfCookies *= 2;
    counter.innerText = "Cookies:" + numberOfCookies;
}
//cheatsTwo();



const clickUpgradeFunction = () => {
    if (numberOfCookies >= costOfclickUpgrade) {
        //odecteme cenu upgradu
        //pocet susenek a odectu 20
        numberOfCookies -= costOfclickUpgrade;

        //aktualizace odstavce
        counter.innerText = "Cookies:" + numberOfCookies;

        //zvedneme pocet susenek na kliknuti
        clickUpgradeIncrease++;
        costOfclickUpgrade *= 2;
        clickUpgrade.innerText = "Buy clickupgrade:" +costOfclickUpgrade;
    }
};

clickUpgrade.onclick = clickUpgradeFunction;











autoclickerUpgrade.onclick = () => {
    if (numberOfCookies >= autoclickerCost) {
        numberOfCookies -= autoclickerCost;
        autoclickerCost *=2;
        autoclickerUpgrade.innerText = "Buy autoclicker upgrade:" +autoclickerCost;
        //numberOfCookies = numberOfCookies - 100;        delší způsob
        //odecist sušenky
        //aktualizovat odstavec se susenky
        counter.innerText = "Cookies" + numberOfCookies;
        autoclickIncrease++;
        //clear
        clearInterval(autoclicker);
        //spustit interval
        autoclicker = setInterval(() => {
            //zvednout o nějaké číslo
            numberOfCookies += autoclickIncrease;
            //aktualizovat odstavec
            counter.innerText = "Cookies" + numberOfCookies;
            
        }, 1000);
        
    }
}



cheats()
cheatsTwo()



farmaUpgrade.onclick = () => {
    if (numberOfCookies >= farmaUpgradeCost) {
        numberOfCookies -= farmaUpgradeCost;
        farmaUpgradeCost +=5000;
        farmaUpgrade.innerText = "Buy Farmaupgrade:" +farmaUpgradeCost;
        farmalevel++;
        farmacounterlevel.innerText = "Buy Farmaupgrade:" +farmalevel;
        //numberOfCookies = numberOfCookies - 100;        delší způsob
        //odecist sušenky
        //aktualizovat odstavec se susenky
        farmacounter.innerText= "farma price: " +farmaUpgradeCost;
        counter.innerText = "Cookies" + numberOfCookies;
        farmaUpgradeIncrease+=5000;
        //clear
        clearInterval(farma);
        //spustit interval
        farma = setInterval(() => {
            //zvednout o nějaké číslo
            numberOfCookies += farmaUpgradeIncrease;
            //aktualizovat odstavec
            counter.innerText = "Cookies" + numberOfCookies;
            
        }, 1000);
        
    }
}


