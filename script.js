const main = () => {
	const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
	const dateElem = document.querySelector('[data-testid="currentDayOfTheWeek"]')
	const timeElem = document.querySelector('[data-testid="currentUTCTime"]')
	const setValue = (elem, val) => {	elem.innerHTML = val }
	setValue(dateElem, days[new Date().getUTCDay()])
	window.setInterval(()=> {
		setValue(dateElem, days[new Date().getUTCDay()])
	}, 60000)
	const timer = () => {
		window.setInterval(() => {
			setValue(timeElem, Date.now())
			}, 100)
 	}
	timer()
}
window.addEventListener('DOMContentLoaded', (event) => { main() });