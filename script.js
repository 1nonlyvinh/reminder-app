let newreminder = document.getElementById('.userinput');
const cycleright = document.getElementById('.right');
const cycleleft = document.getElementById('.left');
const addnew = document.getElementById('.addnew')

const reminderArray = [
    {reminder: newreminder},
];
let index = 0; 

document.querySelector('#cycleleft').addEventListener('click', () => {
    index++;
    console.log("cycleleft"); 
})

document.querySelector('#cycleright').addEventListener('click', () => {
    index--;
})