let curDate = document.getElementById("curDate");
let days = document.getElementById("day");
let rightLeftIcons = document.querySelectorAll(".icons i");
let date = new Date();
curYear = date.getFullYear();
curMonth = date.getMonth();

let events = document.getElementById("events");
let inputEvent = document.getElementById("inputEvent");


months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

const Calendar = () => {
    let curDay = "";
    let firstDate = new Date(curYear, curMonth, 1).getDay(),
        lastDate = new Date(curYear, curMonth + 1, 0).getDate(),
        lastDay = new Date(curYear, curMonth, lastDate).getDay(),
        lastDateLMonth = new Date(curYear, curMonth, 0).getDate();


    //prev months last days
    for (let i = firstDate; i > 0; i--) {
        curDay += `<li class="passive">${lastDateLMonth - i + 1}</li>`;
    }

    //days current months 
    for (let i = 1; i <= lastDate; i++) {

        curDay += `<li onclick="showDiv(this)" ><p >${i}</p> </li> `;
    }

    //next months first days
    for (let i = lastDay; i < 6; i++) {
        curDay += `<li class="passive">${i - lastDay + 1}</li>`;
    }

    curDate.innerHTML = `${months[curMonth]} ${curYear}`;
    days.innerHTML = curDay;
}
Calendar();


rightLeftIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        curMonth = icon.id === "prev" ? curMonth - 1 : curMonth + 1;
        if (curMonth < 0 || curMonth > 11) {
            date = new Date(curYear, curMonth);
            curYear = date.getFullYear();
            curMonth = date.getMonth();
        }
        else {
            date = new Date();
        }
        Calendar();
    });
});

let item;
function showDiv(clickDay) {
    events.style.visibility = "visible";
    item = clickDay;
}

function add() {
    let day = item.innerHTML;
    let  event = inputEvent.value;
    item.innerHTML = `${day}<p>${event}</p>`;
    events.style.visibility = "hidden";
}

function Delete() {
    let day = item.getElementsByTagName('p')[0].innerHTML;
    item.innerHTML = `<p>${day}</p>`;
    events.style.visibility = "hidden";
}
function Edit() {
    console.log(item)
    let day = item.getElementsByTagName('p')[0].innerHTML;
    let event=item.getElementsByTagName('p')[1].innerHTML
    event = inputEvent.value;
    item.innerHTML = `<p>${day}<p>${event}</p>`;
    events.style.visibility = "hidden";
}