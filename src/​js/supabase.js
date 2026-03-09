// src/js/supabase.js
import { createClient } from 'https://unpkg.com/@supabase/supabase-js@2'

const supabaseUrl = 'https://seagtlaujnnhoyitgsdd.supabase.co'
const supabaseAnonKey = 'sb_publishable_OlLChtOja0i8nIrPZuM_Og_vyfGjfsP'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Функсия барои гирифтани сессия
export async function getSession() {
    const { data: { session }, error } = await supabase.auth.getSession()
    if (error) console.error('Session error:', error)
    return session
}

// Функсия барои гирифтани корбари ҷорӣ
export async function getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser()
    if (error) console.error('User error:', error)
    return user
}

// Функсия барои ворид шудан (OTP)
export async function signInWithOTP(phone, email) {
    if (phone) {
        return await supabase.auth.signInWithOtp({ phone })
    } else if (email) {
        return await supabase.auth.signInWithOtp({ email })
    }
}
