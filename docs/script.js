window.onload = function () {
    let viewModel = {
        passwordLength: ko.observable(20),
    }
    ko.applyBindings(viewModel);
}