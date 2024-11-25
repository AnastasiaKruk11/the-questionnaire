const name = document.getElementById('name');
const secondName = document.getElementById('secondName');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const agreement = document.getElementById('agree');
const success = document.querySelector('#success-reg');
const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    const nameValue = name.value;
    const secondNameValue = secondName.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const agreementCheck = agreement.checked;
    async function sendData() {

        try {
            fetch(`https://polinashneider.space/user`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer: AnastasiaKruk11'
                    },
                    body: JSON.stringify({
                        "name": nameValue,
                        "secondName": secondNameValue,
                        "phone": phoneValue,
                        "email": emailValue,
                        "agree": agreementCheck
                    }),
                })
                .then((result) => {
                    return result.json();
                })
                .then((data) => {
                    console.log(data);
                });

            completeRegistration();

        } catch (error) {
            alert('К сожалению, что-то пошло не так и регистрацию завершить не удалось. Попробуйте еще раз')
        }

    }

    sendData();

    function completeRegistration() {

        form.reset();
        success.classList.remove('hidden');
        success.querySelector('h1').textContent = `Вы успешно зарегистрировались, ${nameValue} :)`;

    }

    completeRegistration();
})