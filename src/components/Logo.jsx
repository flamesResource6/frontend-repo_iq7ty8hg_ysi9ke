import React from 'react'

export default function Logo({ size = 24 }) {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="relative">
        <div className="h-8 w-8 rounded-xl bg-gradient-to-br from-purple-500 via-fuchsia-500 to-teal-400 blur-[2px] opacity-80" />
        <div className="absolute inset-0 h-8 w-8 rounded-xl bg-[rgba(255,255,255,0.2)] backdrop-blur-sm border border-white/30" />
      </div>
      <span className="font-semibold tracking-tight text-slate-900 dark:text-slate-100">
        CodeStudioHub
      </span>
    </div>
  )
}
