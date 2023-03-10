import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const dateTime = document.querySelector('#datetime-picker');
const startBtn = document.querySelector('[data-start]');
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMinutes = document.querySelector('[data-minutes]');
const dataSeconds = document.querySelector('[data-seconds]');


startBtn.disabled = true;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);

    if (selectedDates[0] < options.defaultDate) {
      startBtn.disabled = true;
      Notify.failure('Please choose a date in the future');
    } else {
      startBtn.disabled = false;
    }
  },
};

const flat = flatpickr(dateTime, options);


startBtn.addEventListener('click', onStartTimer);

function onStartTimer() {
  const selectedTime = flat.selectedDates[0].getTime();
  startBtn.disabled = true;
  dateTime.disabled = true;

  const intervalId = setInterval(() => {
    const currentTime = Date.now();
    const intervalTime = selectedTime - currentTime;
    if (intervalTime < 0) {
      clearInterval(intervalId);
      return;
    }

    dataDays.textContent = convertMs(intervalTime).days;
    dataHours.textContent = convertMs(intervalTime).hours;
    dataMinutes.textContent = convertMs(intervalTime).minutes;
    dataSeconds.textContent = convertMs(intervalTime).seconds;
  }, 1000);
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = addLeadingZero(Math.floor(ms / day));
  // Remaining hours
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  // Remaining minutes
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  // Remaining seconds
  const seconds = addLeadingZero(
    Math.floor((((ms % day) % hour) % minute) / second)
  );

  return { days, hours, minutes, seconds };
}
