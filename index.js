const timer = document.getElementById('timer');

let timeLeft = 7200;

const tick = () => {
  timeLeft--;

  const hours = Math.floor(timeLeft / 3600).toString().padStart(2, '0');
  const minutes = Math.floor((timeLeft - hours * 3600) / 60).toString().padStart(2, '0');
  const seconds = (timeLeft % 60).toString().padStart(2, '0');

  timer.textContent = `${hours}:${minutes}:${seconds}`;

  if (timeLeft <= 0) {
    clearInterval(interval);
  }
};

const interval = setInterval(tick, 1000);
