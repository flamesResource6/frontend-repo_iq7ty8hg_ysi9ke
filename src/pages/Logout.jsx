import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate()

  useEffect(() => {
    // Simulate clearing auth/session here
    try {
      localStorage.removeItem('auth_token')
      sessionStorage.clear()
    } catch (e) {}

    const timer = setTimeout(() => navigate('/', { replace: true }), 1200)
    return () => clearTimeout(timer)
  }, [navigate])

  return (
    <div className="max-w-md mx-auto mt-20 p-6 rounded-3xl bg-white/60 dark:bg-white/10 border border-white/50 dark:border-white/10 backdrop-blur-xl text-center">
      <h1 className="text-xl font-semibold text-slate-800 dark:text-slate-100">Signing you out…</h1>
      <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">Please wait while we wrap things up.</p>
    </div>
  )
}
