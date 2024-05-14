let adjectives = [
'Happy',
'Bright',
'Delicious',
'Brave',
'Shiny',
'Funny',
'Quiet',
'Strong',
'Beautiful',
'Clever'
]

let nouns = [

'table',
'chair',
'phone',
'bread',
'beach',
'river',
'tiger',
'piano',
'apple'
]

let specialDigit = [
'@',
'$',
'?',
'!',
'-',
'_',
]

let number = []

let randomAdjectiveIndex = Math.floor(Math.random() * adjectives.length);
let randomAdjective = adjectives[randomAdjectiveIndex]


function generatePassword() {
    let randomAdjectiveCreator = Math.floor(Math.random() * adjectives.length);
    let randomAdjective = adjectives[randomAdjectiveCreator]

    let randomNounCreator = Math.floor(Math.random() * nouns.length);
    let randomNoun = nouns[randomNounCreator]

    let randomSpecialDigitCreator = Math.floor(Math.random() * specialDigit.length);
    let randomSpecialDigit = specialDigit[randomSpecialDigitCreator]

    let randomPassword = (randomAdjective + randomSpecialDigit + randomNoun + parseInt(Math.random() * 99 + 1))

    let changePassword = document.querySelector('input')
    changePassword.value = `${randomPassword}`
}

    let a = 6

function changeLanguage() {

    if (a % 2 === 0) {
    changeText('#languageBtn', 'Pt-br')
    changeText('Title', 'Gerador de senha')
    changeText('h1', 'Gerador de senha')
    changePlaceholderText('Placeholder', 'A senha irá aparecer aqui :D')
    changeText('.part1', 'Essa ferramenta vai gerar uma senha aleatória, que será:')
    changeText('.part2', 'Uma combinação de um substantivo, digito especial, adjetivo e um número (Também terá uma letra maiúscula)')
    changeText('.part3', 'Exemplo: Quiet$apple86')
    changeText('.alerta', 'AVISO: A SENHA GERADA SERÁ EM INGLÊS')
    changeText('#generateBtn', 'Gerar senha')
    
    a++
}
    else {
    changeText('#languageBtn', 'En')
    changeText('Title', 'Password generator')
    changeText('h1', 'Password generator')
    changePlaceholderText('Placeholder', 'The password will appear here :D')
    changeText('.part1', 'This tool will generate a random password, which will be:')
    changeText('.part2', 'A combination of a random noun, special digit, adjective and a number (It will also contain an uppercase letter)')
    changeText('.part3', 'Example: Quiet$apple86')
    changeText('.alerta', '')
    changeText('#generateBtn', 'Generate password')

    a--
}
}

function changeText(tag, text) {
    let camp = document.querySelector(tag)
    camp.innerHTML = text
}


function changePlaceholderText(Placeholder, Textoplaceholder) {


let camp = document.querySelector('input');

// Obter o valor atual do placeholder (Gets the value of the placeholder)
let placeholderText = camp.getAttribute('placeholder');

// Definir um novo valor para o placeholder (Gives it a new value)
camp.setAttribute(Placeholder, Textoplaceholder);


}