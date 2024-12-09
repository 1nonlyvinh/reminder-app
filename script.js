const usersubmit = document.getElementById('add-new'); 
const reminderdisplay = document.getElementById('display-div');
const cycleright = document.getElementById('right');
const cycleleft = document.getElementById('left'); 
const remindernumber = document.getElementById('reminder-number');
const resetlist = document.getElementById('reset-button')
let userinput = document.getElementById('user-input');

// array to store reminders
let reminders = []; 
let index = 0; 

// cycle through the reminders, to right

document.getElementById('right').addEventListener('click', () => {
    index--; 
    console.log(index); 
    remindernumber.innerHTML = index;
    checkForNegativeValue()
    reminderdisplay.innerHTML = reminders[index];
    checkForExistingReminders() 

})
// cycle through the reminders, to left
document.getElementById('left').addEventListener('click', () => {
    index++;
    console.log(index); 
    remindernumber.innerHTML = index;
    checkForNegativeValue()
    reminderdisplay.innerHTML = reminders[index];
    checkForExistingReminders() 

})

// click to add new reminder
document.getElementById('add-new').addEventListener('click', () => {
    reminders.push(userinput.value);
    console.log(reminders);
    reminderdisplay.innerHTML = reminders[index];
    remindernumber.innerHTML = index;
    clearInput()
});

// function to clear input after submit
function clearInput() {
    document.getElementById('user-input').value = "";
  }

// tells user they cannot go to a negative number reminder
function checkForNegativeValue() {
    if (index < 0) {
        index = 0;
        console.log(index);
        remindernumber.innerHTML = index; 
    }
}


// function to say theres no reminders for empty parts of array
function checkForExistingReminders() { 

if (reminders[index] === undefined) {
    reminderdisplay.innerHTML = "No reminder, please enter one";
} else {
    reminderdisplay.innerHTML = reminders[index];
}
} 

document.getElementById('reset-list').addEventListener('click', () => {
    alert('Cleared list!'); 
    reminders = []; // Clear the array
    reminderdisplay.innerHTML = "Enter a Reminder";
    console.log(reminders);
});
