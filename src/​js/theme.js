// src/js/theme.js
const THEME_KEY = 'bozorcha_theme'

// Гирифтани мавзӯи ҷорӣ
export const getCurrentTheme = () => {
    return localStorage.getItem(THEME_KEY) || 'light'
}

// Тағйир додани мавзӯъ
export const toggleTheme = () => {
    const current = getCurrentTheme()
    const newTheme = current === 'light' ? 'dark' : 'light'
    
    localStorage.setItem(THEME_KEY, newTheme)
    applyTheme(newTheme)
    
    return newTheme
}

// Татбиқ кардани мавзӯъ ба саҳифа
export const applyTheme = (theme) => {
    document.body.classList.remove('theme-light', 'theme-dark')
    document.body.classList.add(`theme-${theme}`)
    
    // Агар лозим бошад, метавонад дигар унсурҳоро тағйир диҳад
    const event = new CustomEvent('themeChanged', { detail: { theme } })
    window.dispatchEvent(event)
}

// Оғоз кардани мавзӯъ (ҳангоми боршавии саҳифа)
export const initTheme = () => {
    const theme = getCurrentTheme()
    applyTheme(theme)
}
