/*
Tenemos un cliente que nos está pidiendo que el sistema que estamos desarrollando tenga una 
contraseña segura pero con las siguientes característica, que esta debe contener: 
1) Que tenga una longitud de 12 caracteres mínimo.
2) Debe contener al menos 1 letra en mayúscula.
3) Debe contener al menos 1 letra en minúscula.
4) No puede contener espacios vacíos.
*/

const input = document.querySelector('#password');
const submit = document.querySelector('#submit')

//               1 letra mayúscula, 1 minúscula, números y símbolos (sin espacios en blanco)
const regexp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).\S{12,16}$/g;

function PasswordValido(inputElement) {
    inputElement.addEventListener('blur', () => {
        inputElement.isValid = false;

        if (inputElement.type === 'password' && regexp.test(inputElement.value)) {
            inputElement.isValid = true;
            console.log('Password valida');
        } else if (inputElement.isValid === false) {
            console.log('Password invalida');
        }
    })
}

PasswordValido(input);

submit.addEventListener('click', (e) => {
    e.preventDefault();

    if (input.isValid === true) {
        alert('enviado!');
    } else {
        alert('contraseña invalida');
    }
})