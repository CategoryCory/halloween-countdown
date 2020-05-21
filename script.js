const countdownTitle = document.getElementById("countdown-title");
const container = document.querySelector(".container");
const loadingSection = document.querySelector(".loading");
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

let today = new Date();

let nextHalloween;

if (
    today.getMonth() >= 10 ||
    (today.getMonth() === 9 && today.getDate() === 31)
) {
    nextHalloween = new Date(`${today.getFullYear() + 1}-10-31T00:00:00`);
} else {
    nextHalloween = new Date(`${today.getFullYear()}-10-31T00:00:00`);
}

countdownTitle.innerText = `Countdown to Halloween ${nextHalloween.getFullYear()}`;

setTimeout(() => {
    container.style.display = "flex";
    loadingSection.remove();
}, 1000);

setInterval(() => {
    today = new Date();

    const timeDifference = nextHalloween - today;
    const deltaDay = Math.floor(timeDifference / 86400000);
    const deltaHour = Math.floor(timeDifference / 3600000) % 24;
    const deltaMinute = Math.floor(timeDifference / 60000) % 60;
    const deltaSecond = Math.floor(timeDifference / 1000) % 60;

    days.innerText = deltaDay;
    hours.innerText = deltaHour < 10 ? `0${deltaHour}` : deltaHour;
    minutes.innerText = deltaMinute < 10 ? `0${deltaMinute}` : deltaMinute;
    seconds.innerText = deltaSecond < 10 ? `0${deltaSecond}` : deltaSecond;
}, 1000);
