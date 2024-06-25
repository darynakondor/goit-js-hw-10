import flatpickr from 'flatpickr';
import "flatpickr/dist/flatpickr.min.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";


const inputDateTime = document.querySelector('#datetime-picker');
const btnStart = document.querySelector('[data-start]');

const refs = {
    days: document.querySelector("[data-days]"),
    hours: document.querySelector("[data-hours]"),
    minutes: document.querySelector("[data-minutes]"),
    seconds: document.querySelector("[data-seconds]"),
}
let userSelectedDate = null;
let timerInterval = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        userSelectedDate = selectedDates[0]
        validationCheck()
    },
};

flatpickr(inputDateTime, options)

/**
 * Перевірка на валідність дати
*/

function initial() {
    btnStart.disabled = true
}

initial()

function validationCheck() {
    if(options.defaultDate > userSelectedDate) {
        iziToast.error({
            icon: '',
            message: 'Please choose a date in the future',
            position: 'topRight'
        });
        btnStart.disabled = true
    } else {
        btnStart.disabled = false
    }
}

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
}

btnStart.addEventListener('click', () => {
  startTimer()
})

function updateTimerDisplay({ days, hours, minutes, seconds }) {
    refs.days.textContent = String(days).padStart(2, '0');
    refs.hours.textContent = String(hours).padStart(2, '0');
    refs.minutes.textContent = String(minutes).padStart(2, '0');
    refs.seconds.textContent = String(seconds).padStart(2, '0');
}

function startTimer() {
    timerInterval = setInterval(() => {
        const msToDate = userSelectedDate - new Date();
        if (msToDate <= 0) {
            clearInterval(timerInterval);
            updateTimerDisplay({ days: 0, hours: 0, minutes: 0, seconds: 0 });
            inputDateTime.disabled = false
        } else {
            const timeObject = convertMs(msToDate);
            updateTimerDisplay(timeObject);
            inputDateTime.disabled = true
            btnStart.disabled = true
        }
    }, 1000);
}

  