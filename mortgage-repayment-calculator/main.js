const amount = document.getElementById('amount');
const term = document.getElementById('term');
const interestrate = document.getElementById('interestrate');
const repayment = document.getElementById('repayment').checked;
const interest = document.getElementById('interest').checked;
const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    document.querySelector('.results__empty').classList.toggle('hidden');
    document.querySelector('.results__calculated').classList.toggle('hidden');
    e.preventDefault();
})