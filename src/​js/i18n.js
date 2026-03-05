// Тарҷумаҳо барои се забон
const TRANSLATIONS = {
    tj: {
        common: {
            welcome: "Хуш омадед!",
            login: "Дохилшавӣ",
            register: "Сабти ном",
            save: "Сабт кардан",
            cancel: "Бекор кардан",
            delete: "Пок кардан",
            edit: "Таҳрир",
            back: "Бозгашт"
        },
        auth: {
            phone: "Рақами телефон",
            email: "Почтаи электронӣ",
            password: "Рамз",
            confirmPassword: "Такрори рамз",
            forgotPassword: "Рамзро фаромӯш кардед?",
            loginButton: "Дохил шавед",
            registerButton: "Сабти ном кунед"
        },
        profile: {
            pending: "Дар ҳоли интизор",
            verified: "Тасдиқшуда",
            unverified: "Тасдиқнашуда",
            shopName: "Номи мағоза",
            fullName: "Номи пурра",
            phone: "Рақами телефон",
            email: "Почта",
            address: "Суроға"
        },
        product: {
            add: "Иловаи маҳсулот",
            edit: "Таҳрири маҳсулот",
            delete: "Пок кардани маҳсулот",
            name: "Номи маҳсулот",
            price: "Нарх",
            description: "Тавсиф",
            category: "Категория",
            image: "Акс"
        },
        chat: {
            newMessage: "Паёми нав",
            typeHere: "Дар ин ҷо нависед...",
            send: "Фиристодан",
            attach: "Пайваст кардан"
        },
        status: {
            pending: "Дар ҳоли интизор",
            approved: "Тасдиқ шуд",
            rejected: "Рад шуд"
        }
    },
    ru: {
        common: {
            welcome: "Добро пожаловать!",
            login: "Вход",
            register: "Регистрация",
            save: "Сохранить",
            cancel: "Отмена",
            delete: "Удалить",
            edit: "Редактировать",
            back: "Назад"
        },
        auth: {
            phone: "Номер телефона",
            email: "Электронная почта",
            password: "Пароль",
            confirmPassword: "Подтверждение пароля",
            forgotPassword: "Забыли пароль?",
            loginButton: "Войти",
            registerButton: "Зарегистрироваться"
        },
        profile: {
            pending: "На проверке",
            verified: "Подтвержден",
            unverified: "Не подтвержден",
            shopName: "Название магазина",
            fullName: "Полное имя",
            phone: "Телефон",
            email: "Почта",
            address: "Адрес"
        },
        product: {
            add: "Добавить товар",
            edit: "Редактировать товар",
            delete: "Удалить товар",
            name: "Название товара",
            price: "Цена",
            description: "Описание",
            category: "Категория",
            image: "Изображение"
        },
        chat: {
            newMessage: "Новое сообщение",
            typeHere: "Пишите здесь...",
            send: "Отправить",
            attach: "Прикрепить"
        },
        status: {
            pending: "На проверке",
            approved: "Одобрено",
            rejected: "Отклонено"
        }
    },
    en: {
        common: {
            welcome: "Welcome!",
            login: "Login",
            register: "Register",
            save: "Save",
            cancel: "Cancel",
            delete: "Delete",
            edit: "Edit",
            back: "Back"
        },
        auth: {
            phone: "Phone number",
            email: "Email",
            password: "Password",
            confirmPassword: "Confirm password",
            forgotPassword: "Forgot password?",
            loginButton: "Login",
            registerButton: "Register"
        },
        profile: {
            pending: "Pending",
            verified: "Verified",
            unverified: "Unverified",
            shopName: "Shop name",
            fullName: "Full name",
            phone: "Phone",
            email: "Email",
            address: "Address"
        },
        product: {
            add: "Add product",
            edit: "Edit product",
            delete: "Delete product",
            name: "Product name",
            price: "Price",
            description: "Description",
            category: "Category",
            image: "Image"
        },
        chat: {
            newMessage: "New message",
            typeHere: "Type here...",
            send: "Send",
            attach: "Attach"
        },
        status: {
            pending: "Pending",
            approved: "Approved",
            rejected: "Rejected"
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
