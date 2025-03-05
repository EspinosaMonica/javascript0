const inputRange = document.querySelector('#ipl');
const lengthDisplay = document.querySelector('#lengthDisplay');
const generateBtn = document.querySelector('#generateBtn');
const passwordHeading = document.querySelector('#passwordDisplay');
const copyBtn = document.querySelector('#copyBtn');
const strengthMessage = document.querySelector('#strengthMessage');


// Actualiza el valor del input range dinámicamente
const handleChange = () => {
    lengthDisplay.textContent = inputRange.value;
};

//Generar Contraseña Aleatoria
const generatePassword = (passwordLength) => {
    let result = '';
    let characters = '';

    //Comprueba qué opciones están seleccionadas (checkboxes) para incluirlas en la contraseña.
    const useUppercase = document.querySelector('#uppercase').checked;
    const useLowercase = document.querySelector('#lowercase').checked;
    const useNumbers = document.querySelector('#numbers').checked;
    const useSymbols = document.querySelector('#symbols').checked;

    if (useUppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (useLowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (useNumbers) characters += '0123456789';
    if (useSymbols) characters += '!@#$%^&*()-_=+[]{};:,.<>?';

    if (characters === '') {
        passwordHeading.textContent = 'Selecciona al menos una opción';
        return '';
    }

    //Evalúa la Seguridad de la Contraseña
    for (let i = 0; i < passwordLength; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    return result;
};

const evaluateStrength = (password) => {
    let strength = 0;
    
    if (password.length >= 12) strength++; // Más de 12 caracteres → más fuerte
    if (/[A-Z]/.test(password)) strength++; // Contiene mayúsculas
    if (/[a-z]/.test(password)) strength++; // Contiene minúsculas
    if (/[0-9]/.test(password)) strength++; // Contiene números
    if (/[!@#$%^&*()\-_=+\[\]{};:,.<>?]/.test(password)) strength++; // Contiene símbolos

    // Asignar nivel de seguridad
    if (strength <= 2) {
        strengthMessage.textContent = "Seguridad: Débil";
        strengthMessage.style.color = "red";
    } else if (strength <= 4) {
        strengthMessage.textContent = "Seguridad: Media";
        strengthMessage.style.color = "yellow";
    } else {
        strengthMessage.textContent = "Seguridad: Fuerte";
        strengthMessage.style.color = "lightgreen";
    }
};

const printPassword = (event) => {
    event.preventDefault();
    const password = generatePassword(parseInt(inputRange.value));
    if (password) {
        passwordHeading.textContent = password;
        evaluateStrength(password);
        copyBtn.style.display = 'inline-block'; // Muestra el botón de copiar
        copyBtn.textContent = 'Copiar';
    }
};

//Copiar Contraseña
const copyToClipboard = () => {
    const textToCopy = passwordHeading.textContent;
    if (textToCopy) {
        navigator.clipboard.writeText(textToCopy).then(() => {
            copyBtn.textContent = '¡Copiado!';
            setTimeout(() => copyBtn.textContent = 'Copiar', 2000);
        });
    }
};


//Agregar Listeners a los Eventos
inputRange.addEventListener('input', handleChange);
generateBtn.addEventListener('click', printPassword);
copyBtn.addEventListener('click', copyToClipboard);

