// DATE OBJECT

let zaman=new Date();
let birthday=new Date(prompt("Doğum yılınız: "),prompt("Doğum ayınız (sayı): ")-1,prompt("Doğum gününüzün günü (sayı): "));
let now=new Date();
// Get Methods

console.log("Yıl:",zaman.getFullYear());
console.log("Ay:",zaman.getMonth()+1);
console.log("Tarih:",zaman.getDate());
console.log("Gün:",zaman.getDay()+1);
console.log("Saat:",zaman.getHours());
console.log("Dakika:",zaman.getMinutes());
console.log("Saniye:",zaman.getSeconds());
console.log("Milisaniye:",zaman.getMilliseconds());
console.log(zaman);
console.log(typeof zaman);

let yil=zaman.getFullYear();
let dakika=zaman.getMinutes();
if (dakika===6){
    console.clear();
    console.warn("6. dakika!!")
}

// Set Methods
zaman.setDate(25);
zaman.setMonth(94);
zaman.setFullYear(1996);
zaman.setHours(20);
console.clear();
console.log(zaman);

let yas=now.getFullYear()-birthday.getFullYear();
let nextBirthday = new Date(now.getFullYear(), birthday.getMonth(), birthday.getDate());
if (nextBirthday < now) {
    nextBirthday.setFullYear(now.getFullYear() + 1);
}
let fark=nextBirthday-now;
let ayFark=nextBirthday.getMonth()-now.getMonth();
let gunFark=nextBirthday.getDate()-now.getDate();
let gun=Math.floor(fark/(1000*60*60*24));
console.log(String(yas)," yaşınızdasınız");
if (ayFark<= 2){
    console.warn("Doğum gününe ",gun," gün kaldı!");
} else {
    console.log("Doğum gününe ",gun," gün kaldı");
}

function showMonth(){
    let ayFark = Math.floor(fark / (1000 * 60 * 60 * 24 * 30));
    let ayDiv=document.getElementById("ay");
    let ayH1=document.createElement("h1");
    ayH1.innerText=ayFark;
    ayH1.id = "month";
    if (document.getElementById("month")){
        console.log("")
    } else {
        ayDiv.appendChild(ayH1);
    }
}

function showDay(){
    let gunFark = Math.floor(fark / (1000 * 60 * 60 * 24));
    
    let gunDiv=document.getElementById("gun");
    let gunH2=document.createElement("h1");
    gunH2.innerText=gunFark;
    gunH2.id="day"
    if (document.getElementById("day")){
        console.log("")
    } else {
        gunDiv.appendChild(gunH2)
    }
}

function lifeTime(){
    const yasamDiv=document.getElementById("yasam")
    const yasamDiv2=document.getElementById("yasam2")
    let lifeFark=now-birthday
    // Hamlar
    let hamSecond=Math.floor(lifeFark/(1000))
    let hamMinute=Math.floor(lifeFark/(1000*60))
    let hamHour=Math.floor(lifeFark/(1000*60*60))
    let hamDay=Math.floor(lifeFark/(1000*60*60*24))
    let hamWeek=Math.floor(lifeFark/(1000*60*60*24*7))
    let hamMonth=Math.floor(lifeFark/(1000*60*60*24*30))
    let hamYear=Math.floor(lifeFark/(1000*60*60*24*365))
    let age = Math.floor(lifeFark / (1000 * 60 * 60 * 24 * 365.25));
    // Tam yaşam
    let minutes;
    let hours;
    let days;
    let weeks;
    let seconds = hamSecond;
    if (seconds>=60){
        minutes=seconds/60;
        seconds=minutes%60;
        if (minutes>=60){
            hours=minutes/60
            minutes = Math.floor(hamSecond / 60) % 60;
            if (hours>=24){
                days=hours/24;
                hours= Math.floor(hamSecond / 3600) % 24;
                if (days>=7){
                    weeks=days/7;
                    days= Math.floor(hamSecond / 86400) % 7;
                }
            }
        }
    }
    let ulYasam = document.createElement("ul");
    ulYasam.id = "yasamtext";
    let li1 = document.createElement("li");
    li1.innerText = seconds + " saniye";

    let li2 = document.createElement("li");
    li2.innerText = minutes + " dakika";

    let li3 = document.createElement("li");
    li3.innerText = hours + " saat";

    let li4 = document.createElement("li");
    li4.innerText = days + " gün";

    let li5 = document.createElement("li");
    li5.innerText = weeks + " hafta";

    let li6=document.createElement("li");
    li6.innerText=age+" yaşınızdasınız";

    ulYasam.appendChild(li1);
    ulYasam.appendChild(li2);
    ulYasam.appendChild(li3);
    ulYasam.appendChild(li4);
    ulYasam.appendChild(li5);
    ulYasam.appendChild(li6);
    let ul2=document.createElement("ul");
    let li7 = document.createElement("li");
    li7.innerText = hamSecond + " saniye";

    let li8 = document.createElement("li");
    li8.innerText = hamMinute + " dakika";

    let li9 = document.createElement("li");
    li9.innerText = hamHour + " saat";

    let li10 = document.createElement("li");
    li10.innerText = hamDay + " gün";

    let li11= document.createElement("li");
    li11.innerText = hamWeek + " hafta";

    let li12=document.createElement("li");
    li12.innerText=hamMonth+" ay";
    let li13=document.createElement("li");
    li13.innerText=age+" yaşınızdasınız";
    ul2.appendChild(li7);
    ul2.appendChild(li8);
    ul2.appendChild(li9);
    ul2.appendChild(li10);
    ul2.appendChild(li11);
    ul2.appendChild(li12);
    ul2.appendChild(li13)
    if (!document.getElementById("yasamtext")) {
        yasamDiv2.appendChild(ul2);
        yasamDiv.appendChild(ulYasam);
    }
}