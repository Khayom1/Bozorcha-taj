// src/js/guard.js
import { supabase } from './supabase.js'

// Намудҳои корбар
const USER_TYPES = {
    SELLER: 'seller',
    BUYER: 'buyer',
    ADMIN: 'admin',
    UNKNOWN: 'unknown'
}

// Гирифтани намуди корбар
async function getUserType() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return USER_TYPES.UNKNOWN

    // Санҷиши админ
    const { data: admin } = await supabase
        .from('admins')
        .select('id')
        .eq('id', user.id)
        .maybeSingle()
    
    if (admin) return USER_TYPES.ADMIN

    // Санҷиши фурӯшанда
    const { data: seller } = await supabase
        .from('shops')
        .select('id')
        .eq('user_id', user.id)
        .maybeSingle()
    
    if (seller) return USER_TYPES.SELLER

    // Харидор
    return USER_TYPES.BUYER
}

// Роҳнамоӣ ба dashboard мувофиқ
async function redirectToDashboard() {
    const type = await getUserType()
    
    switch(type) {
        case USER_TYPES.SELLER:
            window.location.href = '/src/pages/dashboard/s/dashboard.html'
            break
        case USER_TYPES.BUYER:
            window.location.href = '/src/pages/dashboard/b/dashboard.html'
            break
        case USER_TYPES.ADMIN:
            window.location.href = '/src/pages/admin/s/admin-panel.html'
            break
        default:
            window.location.href = '/index.html'
    }
}

// Роҳнамоӣ ба method барои сабти ном
function redirectToMethod(userType) {
    if (userType === 'seller') {
        window.location.href = '/src/pages/auth/s/method.html'
    } else {
        window.location.href = '/src/pages/auth/b/method.html'
    }
}

// Роҳнамоӣ ба login
function redirectToLogin(userType) {
    if (userType === 'seller') {
        window.location.href = '/src/pages/auth/s/login/phone.html'
    } else {
        window.location.href = '/src/pages/auth/b/login/phone.html'
    }
}

// Муҳофизати саҳифа
async function protectPage(allowedTypes) {
    const type = await getUserType()
    
    if (!allowedTypes.includes(type)) {
        if (type === USER_TYPES.UNKNOWN) {
            window.location.href = '/index.html'
        } else {
            redirectToDashboard()
        }
        return false
    }
    return true
}

// Гирифтани роҳи бозгашт
function getBackPath(currentPath) {
    if (currentPath.includes('/dashboard/s/')) {
        return '/src/pages/dashboard/s/dashboard.html'
    }
    if (currentPath.includes('/dashboard/b/')) {
        return '/src/pages/dashboard/b/dashboard.html'
    }
    if (currentPath.includes('/auth/s/')) {
        return '/src/pages/auth/s/method.html'
    }
    if (currentPath.includes('/auth/b/')) {
        return '/src/pages/auth/b/method.html'
    }
    return '/index.html'
}

export {
    USER_TYPES,
    getUserType,
    redirectToDashboard,
    redirectToMethod,
    redirectToLogin,
    protectPage,
    getBackPath
}
