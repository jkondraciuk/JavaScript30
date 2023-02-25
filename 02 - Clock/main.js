const hourHand = document.getElementById("hour-hand");
const minuteHand = document.getElementById("min-hand");
const secondHand = document.getElementById("second-hand");

setInterval(() => {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const _offset = 90; // 90 because of we start at 90deg in css

  const hoursDegrees = hours * 15 + _offset;
  const minutesDegrees = minutes * 6 + _offset;
  const secondsDegrees = seconds * 6 + _offset;

  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  console.log(hours, minutes, seconds);
}, 1000);
