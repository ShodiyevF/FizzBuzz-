var elForm = document.querySelector('.form');
var elFormInput = elForm.querySelector('.form-input');
var elFormBtn = elForm.querySelector('.form-btn');
var elResult = elForm.querySelector('.result');

elForm.addEventListener('submit', function (evt) {
    evt.preventDefault();

    var test = elFormInput.value;

    if (elFormInput.value % 3 === 0 && elFormInput.value % 5 === 0) {
        elResult.textContent = 'FizzBazz';

    } else if (elFormInput.value % 5 === 0){
        elResult.textContent = 'Bazz';

    } else if (elFormInput.value % 3 === 0) {
        elResult.textContent = 'Fizz';

    } else {
        elResult.textContent = elFormInput.value;
        
    }

    console.log(test);
    // elResult.textContent = test;
});