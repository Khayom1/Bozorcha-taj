// Муҳофизат аз XSS
export function escapeHTML(str) {
    if (!str) return '';
    const p = document.createElement('p');
    p.textContent = str;
    return p.innerHTML;
}

// Форматкунии рақами телефон
export function formatPhoneNumber(input) {
    let digits = input.replace(/\D/g, '');
    if (digits.length > 9) digits = digits.slice(0, 9);
    let formatted = '';
    for (let i = 0; i < digits.length; i++) {
        if (i === 3 || i === 6) formatted += ' ';
        formatted += digits[i];
    }
    return formatted;
}

// Нишон додани хатогӣ
export function showError(element, message) {
    element.innerText = message;
    element.style.display = 'block';
    setTimeout(() => element.style.display = 'none', 3000);
}
