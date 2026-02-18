function isCardNumberValid(number) {
  return number === '1234123412341234';
}

function displayError(message) {
  document.querySelector('#errorMessage').textContent = message;
}

function submitHandler(event) {
  event.preventDefault();

  displayError('');
  let errorMsg = '';

  const form = document.querySelector('#cardForm');

  const cardInput = document
    .querySelector('#creditCardNumber')
    .value
    .replace(/\s/g, '');

  const expMonth = Number(document.querySelector('#month').value);
  const expYear = Number(document.querySelector('#year').value);

  const currentDate = new Date();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  if (!/^\d{16}$/.test(cardInput)) {
    errorMsg += 'Card number must be 16 digits.\n';
  } else if (!isCardNumberValid(cardInput)) {
    errorMsg += 'Card number is not valid.\n';
  }

  if (expMonth < 1 || expMonth > 12) {
    errorMsg += 'Month must be between 01 and 12.\n';
  }

  const fullYear = 2000 + expYear;

  if (
    fullYear < currentYear ||
    (fullYear === currentYear && expMonth < currentMonth)
  ) {
    errorMsg += 'Card is expired.\n';
  }

  if (errorMsg !== '') {
    displayError(errorMsg);
    return;
  }

  form.innerHTML = `
    <h1>Payment Successful 🎉</h1>
  `;
}

document
  .querySelector('#cardForm')
  .addEventListener('submit', submitHandler);
