const display = document.getElementById('display');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');

let count = 0;

function updateDisplay() {
    display.innerText = count;
    
    // Check if we reached the limit
    if (count >= 10) {
        plusBtn.disabled = true;
    } else {
        plusBtn.disabled = false;
    }
}

plusBtn.addEventListener('click', () => {
    if (count < 10) {
        count++;
        updateDisplay();
    }
});

minusBtn.addEventListener('click', () => {
    count--;
    updateDisplay();
});