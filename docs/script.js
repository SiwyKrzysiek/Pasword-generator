function model () {
    this.passwordLength = ko.observable(15);
    this.password = ko.observable("");
    this.displayPassowrd = ko.pureComputed(function() {
        return this.password() != "";
    }, this);
    this.numbers = ko.observable(true);
    this.special = ko.observable(true);
}
let viewModel = new model();

window.onload = function () {
    ko.applyBindings(viewModel);
    document.getElementById("generateButton").onclick = generatePassword;
}

function generatePassword() {
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    let digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    let special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

    if (viewModel.numbers())
        alphabet = alphabet.concat(digits);
    if (viewModel.special())
        alphabet = alphabet.concat(special);

    let password = "";
    for (let i=0; i<viewModel.passwordLength(); i++) {
        password += alphabet[Math.floor(Math.random()*alphabet.length)];
    }

    viewModel.password(password);
}