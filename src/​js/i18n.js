// src/js/i18n.js
const translations = {
    tg: {
        // Тарҷумаҳои тоҷикӣ
        welcome: 'Хуш омадед',
        login: 'Воридшавӣ',
        register: 'Сабти ном',
        logout: 'Баромад',
        profile: 'Профил',
        dashboard: 'Дашборд',
        products: 'Маҳсулот',
        orders: 'Фармоишҳо',
        settings: 'Танзимот'
    },
    ru: {
        // Тарҷумаҳои русӣ
        welcome: 'Добро пожаловать',
        login: 'Вход',
        register: 'Регистрация',
        logout: 'Выход',
        profile: 'Профиль',
        dashboard: 'Панель управления',
        products: 'Товары',
        orders: 'Заказы',
        settings: 'Настройки'
    },
    en: {
        // Тарҷумаҳои англисӣ
        welcome: 'Welcome',
        login: 'Login',
        register: 'Register',
        logout: 'Logout',
        profile: 'Profile',
        dashboard: 'Dashboard',
        products: 'Products',
        orders: 'Orders',
        settings: 'Settings'
    }
}

let currentLanguage = 'tg'

export const setLanguage = (lang) => {
    if (translations[lang]) {
        currentLanguage = lang
        localStorage.setItem('bozorcha_lang', lang)
        return true
    }
    return false
}

export const getLanguage = () => {
    const saved = localStorage.getItem('bozorcha_lang')
    if (saved && translations[saved]) {
        currentLanguage = saved
    }
    return currentLanguage
}

export const t = (key) => {
    return translations[currentLanguage]?.[key] || key
}
