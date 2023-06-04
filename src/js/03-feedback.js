import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');

form.addEventListener('input', throttle(saveFormState, 500));
form.addEventListener('submit', handleSubmit);

const savedFormData = JSON.parse(localStorage.getItem('feedback-form-state'));
if (savedFormData) {
  form.elements.email.value = savedFormData.email;
  form.elements.message.value = savedFormData.message;
}

function saveFormState() {
  const formData = {
    email: form.elements.email.value,
    message: form.elements.message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function handleSubmit(event) {
  event.preventDefault();

  console.log({
    email: form.elements.email.value,
    message: form.elements.message.value,
  });

  form.reset();
  localStorage.removeItem('feedback-form-state');
}
