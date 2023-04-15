
const button10 = document.getElementById('btn-10-percent')
const button5 = document.getElementById('btn-5-percent')
const button15 = document.getElementById('btn-15-percent')
const button25 = document.getElementById('btn-25-percent')
const button50 = document.getElementById('btn-50-percent')
const customBtn = document.getElementById('custom')
const total = document.getElementById('total-money')
const input = document.getElementById('input-money')
const inputPeople = document.getElementById('input-people')
const tipAmount = document.getElementById('tip-amount')
const cantZero = document.getElementById('cant-zero')
const cantZero2 = document.getElementById('cant-zero-2')
const resetBtn = document.getElementById('reset')


const calculateTip = (tipPercantage) => {
  const inputData = parseFloat(input.value)
  const inputPeopleData = parseFloat(inputPeople.value)
  
  const tipAmountPerPerson = ( inputData * tipPercantage) / inputPeopleData;
  const totalPerPerson = (inputData / inputPeopleData) + tipAmountPerPerson;
  tipAmount.textContent = tipAmountPerPerson.toFixed(2);
  total.textContent = totalPerPerson.toFixed(2)

  cantZero.textContent = inputData === 0 ? "can't be zero" : "";
  cantZero2.textContent = inputPeopleData === 0 ? "can't be zero" : "";
}

input.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^0-9.]/g, '');
});


customBtn.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^0-9.]/g, '')
})

inputPeople.addEventListener('input', (event) => {
  event.target.value = event.target.value.replace(/[^0-9]/g, '');
});


 button5.addEventListener('click', () => {
   calculateTip(0.05)
   if (button5.classList.contains('bg-yellow-400')) {
    button5.classList.remove('bg-yellow-400');
  } else {
    button5.classList.add('bg-yellow-400');
  }
  
 })

 button10.addEventListener('click', () => {
 calculateTip(0.1)
 if (button10.classList.contains('bg-yellow-400')) {
  button10.classList.remove('bg-yellow-400');
} else {
  button10.classList.add('bg-yellow-400');
}
 })

 button15.addEventListener('click', () => {
   calculateTip(0.15)
   if (button15.classList.contains('bg-yellow-400')) {
    button15.classList.remove('bg-yellow-400');
  } else {
    button15.classList.add('bg-yellow-400');
  }
 })

 button25.addEventListener('click', () => {
  calculateTip(0.25)
  if (button25.classList.contains('bg-yellow-400')) {
    button25.classList.remove('bg-yellow-400');
  } else {
    button25.classList.add('bg-yellow-400');
  }
 })

 button50.addEventListener('click', () => {
  calculateTip(0.5)
  if (button50.classList.contains('bg-yellow-400')) {
    button50.classList.remove('bg-yellow-400');
  } else {
    button50.classList.add('bg-yellow-400');
  }
 })


customBtn.addEventListener('click', () => {
  const customTipPercentage = parseFloat(customBtn.value);
  customTipPercentage === isNaN ? alert('Please enter a valid number') : calculateTip(customTipPercentage / 100)
  
});

resetBtn.addEventListener('click', () => {
  input.value = '';
  inputPeople.value = '';
  customBtn.value = '';
  tipAmount.textContent = '0.00';
  total.textContent = '0.00';
  cantZero.textContent = '';
  cantZero2.textContent = '';

  const activeButtons = document.querySelectorAll('.bg-yellow-400')
  activeButtons.forEach(button => button.classList.remove('bg-yellow-400'));

})


