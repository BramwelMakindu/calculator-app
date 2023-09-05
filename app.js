const display = document.getElementById('display');
const numbers = document.querySelectorAll('.number');
const deleteBtn = document.querySelector('.delete-btn');
const resetBtn = document.querySelector('.reset-btn');
const equalBtn = document.querySelector('.equals-btn');
const multiplyBtn = document.querySelector('.multiply-btn')


numbers.forEach((number) => {
    number.addEventListener('click', () => {
        display.value += number.value;
    })
});

multiplyBtn.addEventListener('click', () => {
    let star = multiplyBtn.value;
    star = '*';

    display.value += star;
});

equalBtn.addEventListener('click', () => {
    let result = eval(display.value);
    display.value = result;

    if(display.value == display.value / 0) {
        display.value = 'Math Error'
    }
});

deleteBtn.addEventListener('click', () => {
    display.value = display.value.toString().slice(0,-1);
});

resetBtn.addEventListener('click', () => {
    display.value = '';
});


/*------change-theme----*/

const toggleOne = document.querySelector('.theme-1');
const toggleTwo = document.querySelector('.theme-2');
const toggleThree = document.querySelector('.theme-3');

toggleOne.addEventListener('click', () => {
    document.body.classList.remove('theme-two');
    document.body.classList.remove('theme-three');
});

toggleTwo.addEventListener('click', () => {
    document.body.classList.add('theme-two');
    document.body.classList.remove('theme-three');
});

toggleThree.addEventListener('click', () => {
    document.body.classList.remove('theme-two');
    document.body.classList.add('theme-three');
});