const secondHand = document.querySelector('.hand-second');
const minHand = document.querySelector('.hand-minute');
const hourHand = document.querySelector('.hand-hour');

function setDate(){
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;

    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = (mins / 60) * 360 + 90;

    minHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hours = now.getMinutes();
    const hoursDegrees = (hours / 12) * 360 + 90;

    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}
setInterval(setDate, 1000);

setDate();