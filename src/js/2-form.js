const form = document.querySelector('.feedback-form'); 
const emailInput = document.querySelector('.email-input'); 
const messageInput = document.querySelector('.message-input'); 

const formData = {
    email: '',
    message: ''
};

emailInput.addEventListener('input', (event) => {
    const { value } = event.target;

    formData.email = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


messageInput.addEventListener('input', (event) => {
    const { value } = event.target;

    formData.message = value;
    localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const dataToSubmit = new FormData(event.target);
    const email = dataToSubmit.get('email');
    const message = dataToSubmit.get('message');
    
    if (!email || !message) {
        alert('Fill please all fields')
        return
    }

    const dataObject = Object.fromEntries(dataToSubmit.entries());

    localStorage.setItem('feedback-form-state', {
        email: '',
        message: ''
    });
    formData.email = '';
    formData.message = '';
    emailInput.value = '';
    messageInput.value = '';

    console.log(dataObject)
});

const savedDataStr = localStorage.getItem('feedback-form-state');

try {
    const savedData = JSON.parse(savedDataStr);
console.log(savedData)
    emailInput.value = savedData.email;
    messageInput.value = savedData.message;

} catch (e) {}