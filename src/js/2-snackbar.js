import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form')

form.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const delay = parseInt(this.elements['delay'].value);
    const state = this.elements['state'].value;

    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (state === 'fulfilled') {
          resolve(delay);
        } else {
          reject(delay);
        }
      }, delay);
    });

    promise.then(onFulfilled)
    .catch(onRejected)
  });

function onFulfilled(delay) {
  iziToast.success({
    icon: '',
    close: false,
    message: `✅ Fulfilled promise in ${delay}ms`,
    position: 'topRight'
  });
}
function onRejected(delay) {
  iziToast.error({
    icon: '',
    close: false,
    message: `❌ Rejected promise in ${delay}ms`,
    position: 'topRight'
  });
}