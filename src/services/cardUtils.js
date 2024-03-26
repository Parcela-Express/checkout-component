export function detectCardType(number) {
  const cleanedNumber = number.replace(/\s/g, '');
  const cardTypes = [
    { type: 'visa', pattern: /^4\d{5}/ },
    { type: 'mc', pattern: /^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]/ },
    {
      type: 'elo',
      pattern:
        /^(4011|431274|438935|451416|457393|4576|457631|457632|504175|627780|636297|636368|636369|(6503[1-3])|(6500(3[5-9]|4[0-9]|5[0-1]))|(6504(0[5-9]|1[0-9]|2[0-9]|3[0-9]))|(650(48[5-9]|49[0-9]|50[0-9]|51[1-9]|52[0-9]|53[0-7]))|(6505(4[0-9]|5[0-9]|6[0-9]|7[0-9]|8[0-9]|9[0-8]))|(6507(0[0-9]|1[0-8]))|(6507(2[0-7]))|(650(90[1-9]|91[0-9]|920))|(6516(5[2-9]|6[0-9]|7[0-9]))|(6550(0[0-9]|1[1-9]))|(6550(2[1-9]|3[0-9]|4[0-9]|5[0-8]))|(506(699|77[0-8]|7[1-6][0-9))|(509([0-9][0-9][0-9])))/
    },
    { type: 'amex', pattern: /^3[47]\d{13}$/ },
    { type: 'hipercard', pattern: /^(606282\d{10}(\d{3})?)|(3841\d{12})|(637\d{13})$/ },
    { type: 'maestro', pattern: /^(?:5[0678]\d\d|6304|6390|67\d\d)\d{8,15}$/ }
  ];
  for (const { type, pattern } of cardTypes) {
    if (pattern.test(cleanedNumber)) {
      return type;
    }
  }
  return 'default';
}

export function validateCardNumber(number) {
  const cardNumber = number.replace(/\s/g, '');
  let sum = 0;
  let doubleUp = false;
  for (let i = cardNumber.length - 1; i >= 0; i--) {
    let digit = parseInt(cardNumber.charAt(i), 10);
    if (doubleUp) {
      digit *= 2;
      if (digit > 9) {
        digit -= 9;
      }
    }
    sum += digit;
    doubleUp = !doubleUp;
  }
  return sum % 10 === 0;
}

export function formatCardNumber(number) {
  return number
    .replace(/\D/g, '')
    .replace(/(.{4})/g, '$1 ')
    .trim();
}

export function formatExpiry(input) {
  return input
    .replace(/\D/g, '')
    .replace(/^(\d{2})(\d{0,2})/, '$1/$2')
    .replace(/^(\d{2})\/(\d{2}).*/, '$1/$2');
}

export function isValidExpiryFormat(formattedInput) {
  return /^(0[1-9]|1[0-2])\/\d{2}$/.test(formattedInput);
}

export function isValidExpiryDate(formattedInput) {
  const [month, year] = formattedInput.split('/');
  const currentYear = new Date().getFullYear().toString().slice(-2);
  const currentMonth = new Date().getMonth() + 1;
  const expiryIsNotValid =
    parseInt(year, 10) < parseInt(currentYear, 10) ||
    (parseInt(year, 10) === parseInt(currentYear, 10) && parseInt(month, 10) < currentMonth);
  return !expiryIsNotValid;
}
