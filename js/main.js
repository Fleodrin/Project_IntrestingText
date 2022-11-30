const firstField = document.querySelector('#field-number1');
const secondField = document.querySelector('#field-number2');
const resultField = document.querySelector('#field-result');
const submitButton = document.querySelector('#submit-button');
const buttonContainer = document.querySelector('.form__button-wrapper');
const buttons = buttonContainer.querySelectorAll('.button');
const labels = document.querySelectorAll('.form__label');

for (let button of buttons) {
    button.addEventListener('click', () => {

        for (let button of buttons) {
            button.classList.remove('active');
        }

        button.classList.add('active');
        firstField.value = '';
        secondField.value = '';
        resultField.value = '';

        if (buttons[0].classList.contains('active')) {
            labels[1].textContent = 'Количество слов:';
            secondField.readOnly = true;
            labels[2].textContent = 'Без лишних пробелов:';
            resultField.readOnly = true;
        }

        if (buttons[1].classList.contains('active')) {
            labels[1].textContent = 'Что заменить?';
            secondField.readOnly = false;
            labels[2].textContent = 'На что заменить?';
            resultField.readOnly = false;
            firstField.value = firstField.value.replaceAll(secondField.value, resultField.value);
        }
    })
}
submitButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    if (buttons[0].classList.contains('active')) {
        const finalField = firstField.value.split(' ').filter((e) => {
            return e !== '';
        });

        secondField.value = finalField.length;
        resultField.value = finalField.join(' ');
    }

    if (buttons[1].classList.contains('active')) {
        firstField.value = firstField.value.replaceAll(secondField.value, resultField.value);
    }
});