const clock = document.getElementById('clock');

const getTime = () => new Date().toTimeString().replace(/ .*/, '');

const displayTime = () =>
  (document.getElementById('clock').innerText = getTime());

setInterval(() => displayTime(), 1000);
