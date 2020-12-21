import './styles.css';

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
//const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
//const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
//const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
//const secs = Math.floor((time % (1000 * 60)) / 1000);

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.timer = document.querySelector(selector);
    this.days = document.querySelector('[data-value="days"]');
    this.hours = document.querySelector('[data-value="hours"]');
    this.mins = document.querySelector('[data-value="mins"]');
    this.secs = document.querySelector('[data-value="secs"]');
    this.targetDate = targetDate;
  }

  start() {
    this.days.textContent = '00';
    this.hours.textContent = '00';
    this.mins.textContent = '00';
    this.secs.textContent = '00';

    setInterval(() => {
      const currentTime = Date.now();
      const deltaTime = this.targetDate - currentTime;

      const days = String(
        Math.floor(deltaTime / (1000 * 60 * 60 * 24)),
      ).padStart(2, '0');
      const hours = String(
        Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      ).padStart(2, '0');
      const mins = String(
        Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)),
      ).padStart(2, '0');
      const secs = String(
        Math.floor((deltaTime % (1000 * 60)) / 1000),
      ).padStart(2, '0');

      this.days.textContent = `${days}`;
      this.hours.textContent = `${hours}`;
      this.mins.textContent = `${mins}`;
      this.secs.textContent = `${secs}`;
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});

timer.start();
