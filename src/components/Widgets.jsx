import React from 'react'
import { motion } from 'framer-motion'
import { Mic, Upload, PlusCircle } from 'lucide-react'

export function StatCard({ title, value, accent = 'from-purple-500 to-teal-400' }) {
  return (
    <motion.div whileHover={{ y: -4 }} className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 shadow-sm">
      <p className="text-sm text-slate-500 dark:text-slate-400">{title}</p>
      <p className="text-3xl font-semibold mt-1 text-slate-900 dark:text-white">{value}</p>
      <div className={`mt-4 h-1.5 w-full rounded-full bg-gradient-to-r ${accent}`} />
    </motion.div>
  )
}

export function QuickAction({ icon: Icon, label }) {
  return (
    <button className="group flex items-center justify-center gap-2 px-4 py-3 rounded-2xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:bg-white/80 transition">
      <Icon className="h-5 w-5 text-slate-700 dark:text-slate-200" />
      <span className="text-sm font-medium text-slate-800 dark:text-slate-100">{label}</span>
    </button>
  )
}

export function Donut({ progress = 62 }) {
  const radius = 42
  const stroke = 10
  const normalizedRadius = radius - stroke * 0.5
  const circumference = normalizedRadius * 2 * Math.PI
  const strokeDashoffset = circumference - (progress / 100) * circumference

  return (
    <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10">
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500 dark:text-slate-400">Project Completion</p>
        <Mic className="h-4 w-4 text-slate-500" />
      </div>
      <div className="flex items-center gap-6">
        <svg height={radius * 2} width={radius * 2}>
          <defs>
            <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#a855f7" />
              <stop offset="100%" stopColor="#2dd4bf" />
            </linearGradient>
          </defs>
          <circle stroke="#e2e8f0" fill="transparent" strokeWidth={stroke} r={normalizedRadius} cx={radius} cy={radius} />
          <motion.circle
            stroke="url(#grad)"
            fill="transparent"
            strokeWidth={stroke}
            strokeLinecap="round"
            r={normalizedRadius}
            cx={radius}
            cy={radius}
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={strokeDashoffset}
            initial={{ strokeDashoffset: circumference }}
            animate={{ strokeDashoffset }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          />
        </svg>
        <div>
          <p className="text-3xl font-semibold text-slate-900 dark:text-white">{progress}%</p>
          <p className="text-sm text-slate-500">Average across active projects</p>
          <div className="flex gap-2 mt-4">
            <QuickAction icon={Mic} label="Explain Your Idea" />
            <QuickAction icon={Upload} label="Upload Files" />
            <QuickAction icon={PlusCircle} label="Create Ticket" />
          </div>
        </div>
      </div>
    </div>
  )
}
