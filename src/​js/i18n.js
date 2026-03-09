// src/js/i18n.js
const translations = {
    tj: {
        // Умумӣ
        'common.save': 'Сабт кардан',
        'common.cancel': 'Бекор кардан',
        'common.delete': 'Пок кардан',
        'common.edit': 'Таҳрир',
        'common.back': 'Бозгашт',
        
        // Auth
        'auth.login': 'Ворид шудан',
        'auth.register': 'Сабти ном',
        'auth.phone': 'Рақами телефон',
        'auth.email': 'Почта',
        
        // Dashboard
        'dashboard.home': 'Асосӣ',
        'dashboard.stats': 'Статистика',
        'dashboard.plans': 'Планҳо',
        'dashboard.profile': 'Профил',
        'dashboard.chat': 'Чат',
        
        // Plans
        'plans.start': 'Start',
        'plans.plus': 'Plus',
        'plans.pro': 'Pro',
        'plans.premium': 'Premium'
    },
    ru: {
        'common.save': 'Сохранить',
        'common.cancel': 'Отмена',
        'common.delete': 'Удалить',
        'common.edit': 'Редактировать',
        'common.back': 'Назад',
        'auth.login': 'Войти',
        'auth.register': 'Регистрация',
        'auth.phone': 'Номер телефона',
        'auth.email': 'Почта',
        'dashboard.home': 'Главная',
        'dashboard.stats': 'Статистика',
        'dashboard.plans': 'Планы',
        'dashboard.profile': 'Профиль',
        'dashboard.chat': 'Чат',
        'plans.start': 'Старт',
        'plans.plus': 'Плюс',
        'plans.pro': 'Про',
        'plans.premium': 'Премиум'
    },
    en: {
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.back': 'Back',
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.phone': 'Phone number',
        'auth.email': 'Email',
        'dashboard.home': 'Home',
        'dashboard.stats': 'Statistics',
        'dashboard.plans': 'Plans',
        'dashboard.profile': 'Profile',
        'dashboard.chat': 'Chat',
        'plans.start': 'Start',
        'plans.plus': 'Plus',
        'plans.pro': 'Pro',
        'plans.premium': 'Premium'
    }
}

let currentLang = localStorage.getItem('lang') || 'tj'

export function t(key) {
    return translations[currentLang]?.[key] || key
}

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang
        localStorage.setItem('lang', lang)
        document.documentElement.lang = lang
        updateLanguageButton(lang)
    }
}

function updateLanguageButton(lang) {
    const btn = document.getElementById('langBtn')
    if (btn) {
        btn.innerHTML = lang === 'tj' ? '🇹🇯' : lang === 'ru' ? '🇷🇺' : '🇬🇧'
    }
}

export function getCurrentLang() {
    return currentLang
}            typeHere: "Type here...",
            send: "Send",
            attach: "Attach"
        },
        status: {
            pending: "Pending",
            approved: "Approved",
            rejected: "Rejected"
        },
        // src/js/i18n.js
const translations = {
    tj: {
        // Умумӣ
        'common.save': 'Сабт кардан',
        'common.cancel': 'Бекор кардан',
        'common.delete': 'Пок кардан',
        'common.edit': 'Таҳрир',
        'common.back': 'Бозгашт',
        
        // Auth
        'auth.login': 'Ворид шудан',
        'auth.register': 'Сабти ном',
        'auth.phone': 'Рақами телефон',
        'auth.email': 'Почта',
        
        // Dashboard
        'dashboard.home': 'Асосӣ',
        'dashboard.stats': 'Статистика',
        'dashboard.plans': 'Планҳо',
        'dashboard.profile': 'Профил',
        'dashboard.chat': 'Чат',
        
        // Plans
        'plans.start': 'Start',
        'plans.plus': 'Plus',
        'plans.pro': 'Pro',
        'plans.premium': 'Premium'
    },
    ru: {
        'common.save': 'Сохранить',
        'common.cancel': 'Отмена',
        'common.delete': 'Удалить',
        'common.edit': 'Редактировать',
        'common.back': 'Назад',
        'auth.login': 'Войти',
        'auth.register': 'Регистрация',
        'auth.phone': 'Номер телефона',
        'auth.email': 'Почта',
        'dashboard.home': 'Главная',
        'dashboard.stats': 'Статистика',
        'dashboard.plans': 'Планы',
        'dashboard.profile': 'Профиль',
        'dashboard.chat': 'Чат',
        'plans.start': 'Старт',
        'plans.plus': 'Плюс',
        'plans.pro': 'Про',
        'plans.premium': 'Премиум'
    },
    en: {
        'common.save': 'Save',
        'common.cancel': 'Cancel',
        'common.delete': 'Delete',
        'common.edit': 'Edit',
        'common.back': 'Back',
        'auth.login': 'Login',
        'auth.register': 'Register',
        'auth.phone': 'Phone number',
        'auth.email': 'Email',
        'dashboard.home': 'Home',
        'dashboard.stats': 'Statistics',
        'dashboard.plans': 'Plans',
        'dashboard.profile': 'Profile',
        'dashboard.chat': 'Chat',
        'plans.start': 'Start',
        'plans.plus': 'Plus',
        'plans.pro': 'Pro',
        'plans.premium': 'Premium'
    }
}

let currentLang = localStorage.getItem('lang') || 'tj'

export function t(key) {
    return translations[currentLang]?.[key] || key
}

export function setLanguage(lang) {
    if (translations[lang]) {
        currentLang = lang
        localStorage.setItem('lang', lang)
        document.documentElement.lang = lang
        updateLanguageButton(lang)
    }
}

function updateLanguageButton(lang) {
    const btn = document.getElementById('langBtn')
    if (btn) {
        btn.innerHTML = lang === 'tj' ? '🇹🇯' : lang === 'ru' ? '🇷🇺' : '🇬🇧'
    }
}

export function getCurrentLang() {
    return currentLang
}
    }
};

// Забони ҷорӣ
let currentLang = localStorage.getItem('lang') || 'tj';

// Функсияи гирифтани тарҷума
function t(key) {
    return key.split('.').reduce((obj, k) => obj?.[k], TRANSLATIONS[currentLang]) || key;
}

// Функсияи тағйир додани забон
function setLanguage(lang) {
    if (TRANSLATIONS[lang]) {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        document.documentElement.lang = lang;
        
        // Агар лозим бошад, саҳифаро аз нав бор кунед
        // Барои SPA, метавонед рӯйдод фиристед
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    }
}

// Функсияи гирифтани забони ҷорӣ
function getCurrentLang() {
    return currentLang;
}

// Барои истифода дар дигар файлҳо
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { t, setLanguage, getCurrentLang, TRANSLATIONS };
}
