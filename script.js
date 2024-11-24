const form = document.querySelector(".form");
form.addEventListener("submit", (event) => {
    // Предотвращает действие браузера по умолчанию. В данном случае — отправку формы
    // https://learn.javascript.ru/default-browser-action
    event.preventDefault();

    const name = document.getElementById('name').value;
    const secondName = document.getElementById('secondName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const agreement = document.getElementById('agree').checked;
    const success = document.querySelector('#success-reg');

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
                        "name": name,
                        "secondName": secondName,
                        "phone": phone,
                        "email": email,
                        "agree": agreement
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
        success.querySelector('h1').textContent = `Вы успешно зарегистрировались, ${name} :)`;

    }

    completeRegistration();
})