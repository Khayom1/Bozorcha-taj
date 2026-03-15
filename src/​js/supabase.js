// src/js/supabase.js
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

// Ин қиматҳоро аз Supabase Dashboard гиред
const SUPABASE_URL = 'https://guaymxogvbzbjkflgatj.supabase.co'
const SUPABASE_ANON_KEY = 'ваши_anon_Key'  // Инро бо калиди воқеӣ иваз кунед

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

// Функсия барои санҷиди пайвастшавӣ
export const testConnection = async () => {
    const { data, error } = await supabase.from('profiles').select('count').limit(1)
    if (error) {
        console.error('Supabase пайваст нашуд:', error.message)
        return false
    }
    console.log('Supabase пайваст шуд!')
    return true
}

// Функсия барои воридшавӣ бо почта
export const signInWithEmail = async (email, password) => {
    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })
    return { data, error }
}

// Функсия барои сабти ном
export const signUpWithEmail = async (email, password, userData) => {
    const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
            data: userData
        }
    })
    return { data, error }
}

// Функсия барои баромадан
export const signOut = async () => {
    const { error } = await supabase.auth.signOut()
    return { error }
}

// Функсия барои гирифтани корбари ҷорӣ
export const getCurrentUser = () => {
    return supabase.auth.getUser()
}

// Функсия барои гирифтани профили корбар
export const getProfile = async (userId) => {
    const { data, error } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', userId)
        .single()
    return { data, error }
}
