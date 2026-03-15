// src/js/utils.js
// Формат кардани нарх
export const formatPrice = (price) => {
    return new Intl.NumberFormat('tg-TJ', {
        style: 'currency',
        currency: 'TJS',
        minimumFractionDigits: 2
    }).format(price)
}

// Формат кардани сана
export const formatDate = (dateString) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat('tg-TJ', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date)
}

// Гирифтани параметрҳо аз URL
export const getUrlParams = () => {
    const params = new URLSearchParams(window.location.search)
    const result = {}
    for (const [key, value] of params) {
        result[key] = value
    }
    return result
}

// Нишон додани хабар
export const showNotification = (message, type = 'info') => {
    // Инро баъдтар бо компонент иваз мекунем
    alert(`${type.toUpperCase()}: ${message}`)
}

// Валидацияи почта
export const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
}

// Валидацияи телефон (барои Тоҷикистон)
export const isValidPhone = (phone) => {
    const re = /^(\+992|992|0)[0-9]{9}$/
    return re.test(phone.replace(/\s/g, ''))
}

// Валидацияи парол (ҳадди ақал 8 символ)
export const isValidPassword = (password) => {
    return password.length >= 8
}

// Хобидан (барои таъхир)
export const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms))
