// Function to display UTC time in milliseconds
function displayUTCTimeMilliseconds() {
  const utcTimeMillisecondsElement = document.querySelector('[data-testid="currentUTCTime"');
  
  setInterval(() => {
      const currentTimeMillis = new Date().getTime();
      utcTimeMillisecondsElement.textContent = `UTC Time: ${currentTimeMillis}`;
  }, 1000);
}

// Function to display the day of the week
function displayDayOfWeek() {
  const dayOfWeekElement = document.querySelector('[data-testid="currentDayOfTheWeek"]');
  
  setInterval(() => {
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const currentDayOfWeek = new Date().getDay();
      dayOfWeekElement.textContent = `Day of the Week: ${days[currentDayOfWeek]}`;
  }, 1000);
}

displayUTCTimeMilliseconds();
displayDayOfWeek();
