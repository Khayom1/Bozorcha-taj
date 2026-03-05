const translations = {
    tj: {
        common: {
            save: "Сабт кардан",
            cancel: "Бекор кардан",
            delete: "Пок кардан",
            edit: "Таҳрир",
            back: "Бозгашт"
        },
        auth: {
            login: "Дохилшавӣ",
            register: "Сабти ном",
            phone: "Рақами телефон",
            email: "Почтаи электронӣ"
        },
        // ... ҳамаи матнҳо
    },
    ru: { ... },
    en: { ... }
};

let currentLang = localStorage.getItem('lang') || 'tj';

export function t(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], translations[currentLang]) || key;
}

export function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;
    // Агар лозим бошад, саҳифаро аз нав бор кунед
}

export function getCurrentLang() {
    return currentLang;
}
