function displayUTCTimeMilliseconds() {
  const utcTimeMillisecondsElement = document.querySelector('[data-testid="currentUTCTime"');
  
  setInterval(() => {
      const currentTimeMillis = new Date().getTime();
      utcTimeMillisecondsElement.textContent = `${currentTimeMillis}`;
  }, 1000);
}
function displayDayOfWeek() {
  const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  
  setInterval(() => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDayOfWeek = new Date().getDay();
      dayOfWeekElement.textContent = `${days[currentDayOfWeek]}`;
  }, 1000);
}

displayUTCTimeMilliseconds();
displayDayOfWeek();
