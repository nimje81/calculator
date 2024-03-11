let display = document.getElementById('display');
let displayValue = "";
let num = document.querySelectorAll(".num");

num.forEach((n)=>{
  n.addEventListener("click",()=>{
    displayValue += n.textContent;
    appendToDisplay() ;
  })
})

function appendToDisplay() {
  display.value = displayValue;
}

function clearDisplay() {
  displayValue = '';
  appendToDisplay();
}

document.getElementById("del").addEventListener("click",()=>{
  displayValue = displayValue.substring(0,displayValue.length-1);
  appendToDisplay(display.value);
})


function calculate() {
  try {
    displayValue = eval(displayValue);
    appendToDisplay();
  } catch (error) {
    display.value = 'Error';
  }
}
document.addEventListener('keydown', function(event) {
  const key = event.key;
  if (/[0-9\.+\-*/%]/.test(key)) {
    appendToDisplay(key);
  } else if (key === 'Enter') {
    calculate();
  } else if (key === 'Escape') {
    clearDisplay();
  }
});

