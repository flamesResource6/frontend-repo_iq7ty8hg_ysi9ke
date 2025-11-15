import React, { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { Home, FolderKanban, Bot, FileText, Receipt, CalendarClock, MessageSquare, LifeBuoy, FolderOpen, Repeat2, ShieldCheck, Bell, Settings, LogOut, Sun, Moon } from 'lucide-react'
import Logo from './Logo'

const navItems = [
  { to: '/', label: 'Dashboard', icon: Home },
  { to: '/projects', label: 'My Projects', icon: FolderKanban },
  { to: '/assistant', label: 'AI Voice Assistant', icon: Bot },
  { to: '/proposals', label: 'Proposals', icon: FileText },
  { to: '/invoices', label: 'Invoices & Payments', icon: Receipt },
  { to: '/meetings', label: 'Meeting Scheduler', icon: CalendarClock },
  { to: '/chat', label: 'Chat With Team', icon: MessageSquare },
  { to: '/tickets', label: 'Tickets & Support', icon: LifeBuoy },
  { to: '/files', label: 'Files & Deliverables', icon: FolderOpen },
  { to: '/changes', label: 'Change Requests', icon: Repeat2 },
  { to: '/audit', label: 'System Audit', icon: ShieldCheck },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/settings', label: 'Settings', icon: Settings },
]

export default function Layout() {
  const [dark, setDark] = useState(false)

  return (
    <div className={"min-h-screen w-full flex bg-[rgb(15,23,42)]/3 dark:bg-[#0B1222] transition-colors" + (dark ? ' dark' : '')}>
      <aside className="hidden md:flex md:flex-col md:w-64 p-4 gap-4 bg-white/40 dark:bg-white/5 backdrop-blur-xl border-r border-white/30 dark:border-white/10">
        <div className="flex items-center justify-between">
          <Logo />
          <button onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10">
            {dark ? <Sun className="h-4 w-4 text-amber-300"/> : <Moon className="h-4 w-4 text-slate-700"/>}
          </button>
        </div>
        <nav className="mt-2 space-y-1">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) => `group flex items-center gap-3 px-3 py-2 rounded-2xl text-sm font-medium transition-all border ${isActive ? 'bg-gradient-to-r from-purple-500/20 to-teal-400/20 text-slate-900 dark:text-white border-white/40 dark:border-white/10' : 'text-slate-700 dark:text-slate-300 hover:text-slate-900 hover:dark:text-white border-transparent hover:border-white/30'}`}
            >
              <div className="relative">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/30 to-teal-400/30 blur-md opacity-0 group-hover:opacity-100 transition" />
                <Icon className="h-5 w-5 relative" />
              </div>
              <span>{label}</span>
            </NavLink>
          ))}
          <div className="h-px my-3 bg-white/40 dark:bg-white/10" />
          <button className="flex items-center gap-3 px-3 py-2 rounded-2xl text-sm font-medium text-red-600/90 hover:text-red-500 transition">
            <LogOut className="h-5 w-5" /> Logout
          </button>
        </nav>
        <div className="mt-auto p-3 rounded-2xl bg-gradient-to-br from-purple-500/20 to-teal-400/20 border border-white/30 dark:border-white/10">
          <p className="text-xs text-slate-700 dark:text-slate-300">Neo-minimal Client Panel</p>
          <p className="text-xs text-slate-500 dark:text-slate-400">Secure. Fast. Elegant.</p>
        </div>
      </aside>

      <main className="flex-1 relative">
        <div className="absolute inset-0 -z-0">
          <div className="absolute -top-24 -left-24 h-72 w-72 bg-purple-500/20 rounded-full blur-3xl" />
          <div className="absolute top-1/3 -right-24 h-72 w-72 bg-teal-400/20 rounded-full blur-3xl" />
        </div>
        <div className="md:hidden p-4 flex items-center justify-between">
          <Logo />
          <button onClick={() => setDark(!dark)} className="p-2 rounded-xl bg-white/40 dark:bg-white/10 border border-white/40 dark:border-white/10">
            {dark ? <Sun className="h-4 w-4 text-amber-300"/> : <Moon className="h-4 w-4 text-slate-700"/>}
          </button>
        </div>
        <div className="p-4 md:p-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
