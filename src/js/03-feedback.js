import throttle from 'lodash.throttle';

const formEL = document.querySelector('.feedback-form');

const input = document.querySelector('input');
const textarea = document.querySelector('textarea');
populateInputes();
formEL.addEventListener(
  'input',
  throttle(function (e) {
    const inputValue = e.currentTarget.elements.email.value;
    const message = e.currentTarget.elements.message.value;

    const valueObj = {
      email: inputValue,
      message: message,
    };
    localStorage.setItem('feedback-form-state', JSON.stringify(valueObj));
  }),
  1000
);

formEL.addEventListener('submit', evt => {
  evt.preventDefault();
  const localStorageIs = localStorage.getItem('feedback-form-state');
  const Obj = JSON.parse(localStorageIs);
  console.log(Obj);
  formEL.reset();
  localStorage.removeItem('feedback-form-state');
});

function populateInputes() {
  const localStorageIs = localStorage.getItem('feedback-form-state');
  const saveObj = JSON.parse(localStorageIs);

  if (saveObj) {
    input.value = saveObj.email;
    textarea.value = saveObj.message;
  }
}
