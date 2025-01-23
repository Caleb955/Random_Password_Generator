const inputField = document.getElementById('password');
const passwordButton = document.getElementById('password-btn')
const copyButton = document.querySelector('.copy-btn')

function GeneratePassword() {
    let password = '';

    const upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    const lowerCase = 'abcdefghijklmnopqrstuvwxyz'

    const numbers = '0123456789'

    const symbols = '@#$%&<>/()+=-?'

    password += upperCase[Math.floor(Math.random() * upperCase.length)]

    password += lowerCase[Math.floor(Math.random() * lowerCase.length)]

    password += numbers[Math.floor(Math.random() * numbers.length)]

    password += symbols[Math.floor(Math.random() * symbols.length)]

    const concatEvery = upperCase + lowerCase + numbers + symbols
    
    for(i= 1; i <= 8; i ++) {
        password += concatEvery[Math.floor(Math.random() * concatEvery.length)]
    }

    inputField.value = password
    
}

function CopyPassword() {
    
    inputField.select();
    document.execCommand('copy');
    document.documentElement.toggleAttribute('down')
}

passwordButton.addEventListener('click', () => {
    GeneratePassword()
});


document.addEventListener('click', (event) => {
    if (event.target.matches('.copy-btn')) {
        CopyPassword()
    }  else if (event.target.matches !== event.target.matches('#copied-btn')) {
        document.documentElement.removeAttribute('down')
    }

})