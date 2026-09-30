let i = 0;
let couter_el = document.getElementById('counter');
let message = document.getElementById('message');

function increment()
{ 
    i++;
    if (i != 42)
        message.classList.add("hidden");
    else
        message.classList.remove("hidden");
    couter_el.innerHTML = i;
}

function decrement()
{
    if (i > 0)
        i--;
    if (i != 42)
        message.classList.add("hidden");
    else
        message.classList.remove("hidden");
    couter_el.innerHTML = i;
}