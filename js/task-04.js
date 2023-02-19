const refs  = {
    decrement: document.querySelector('[data-action="decrement"]'),
    increment: document.querySelector('[data-action="increment"]'),
    value: document.querySelector('#value'),
};

let counter = 0;

refs.decrement.addEventListener('click', ()  =>  {
    counter -= 1;
    refs.value.textContent = counter;
});
refs.increment.addEventListener('click', ()  =>  {
    counter += 1;
    refs.value.textContent = counter;
});
