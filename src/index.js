// Function to validate credit card number using Luhn algorithm
function validateCreditCardNumber(cardNumber) {
    const regex = new RegExp("^[0-9]{13,19}$");
    if (!regex.test(cardNumber)) return false;

    let sum = 0;
    let shouldDouble = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
        let intVal = parseInt(cardNumber.charAt(i));
        if (shouldDouble) {
            intVal *= 2;
            if (intVal > 9) {
                intVal = 1 + (intVal % 10);
            }
        }
        sum += intVal;
        shouldDouble = !shouldDouble;
    }
    return (sum % 10) === 0;
}

// Function to determine the card issuer (Bandeira)
function getCardIssuer(cardNumber) {
    const cardPatterns = {
        Visa: /^4[0-9]{12}(?:[0-9]{3})?$/,
        Mastercard: /^5[1-5][0-9]{14}$/,
        "American Express": /^3[47][0-9]{13}$/,
        Discover: /^6(?:011|5[0-9]{2})[0-9]{12}$/,
        "Diners Club": /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/,
        JCB: /^(?:2131|1800|35\d{3})\d{11}$/
    };

    for (let issuer in cardPatterns) {
        if (cardPatterns[issuer].test(cardNumber)) {
            return issuer;
        }
    }
    return 'Desconhecido';
}

// Example usage
const cardNumber = '36139917398467'; // Teste cartão Diners Club - Resultado: Válido
if (validateCreditCardNumber(cardNumber)) {
    console.log('Número de cartão válido');
    console.log('Emissor do cartão (Bandeira):', getCardIssuer(cardNumber));
} else {
    console.log('Número de cartão inválido');
}