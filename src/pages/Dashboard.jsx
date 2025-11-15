import React from 'react'
import { StatCard, Donut } from '../components/Widgets'
import { Calendar, Bell, MessageSquare, ArrowRight } from 'lucide-react'
import Spline from '@splinetool/react-spline'

const timeline = [
  { time: 'Mon', title: 'Kickoff Call', status: 'done' },
  { time: 'Tue', title: 'Wireframes', status: 'done' },
  { time: 'Wed', title: 'API Contract', status: 'current' },
  { time: 'Thu', title: 'Frontend Sprint', status: 'next' },
  { time: 'Fri', title: 'QA + Review', status: 'next' },
]

const chats = [
  { name: 'Design Team', msg: 'Updated the hero section.' },
  { name: 'Backend', msg: 'Auth endpoints ready.' },
  { name: 'Client', msg: 'Please add dark mode toggle.' },
]

const meetings = [
  { title: 'Sprint Planning', date: 'Tue 10:00 AM' },
  { title: 'Client Sync', date: 'Wed 4:30 PM' },
  { title: 'Design Review', date: 'Fri 2:00 PM' },
]

export default function Dashboard() {
  return (
    <div className="space-y-8">
      <div className="relative h-64 rounded-[22px] overflow-hidden border border-white/30 dark:border-white/10 bg-white/40 dark:bg-white/5">
        <Spline scene="https://prod.spline.design/41MGRk-UDPKO-l6W/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 p-6 md:p-10 flex flex-col justify-between pointer-events-none">
          <div>
            <h1 className="text-2xl md:text-4xl font-semibold text-slate-900 dark:text-white drop-shadow-sm">Welcome to CodeStudioHub</h1>
            <p className="text-slate-700/80 dark:text-slate-300/90 max-w-xl mt-2">A glassmorphic, neo-minimal client dashboard to manage projects, proposals, invoices, meetings and more.</p>
          </div>
          <div className="flex gap-3">
            <button className="pointer-events-auto px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white font-medium shadow">
              Start a Proposal
            </button>
            <button className="pointer-events-auto px-4 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/40 dark:border-white/10 text-slate-800 dark:text-white font-medium">
              Explore Projects
            </button>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-4">
        <StatCard title="Active Projects" value="8" />
        <StatCard title="Pending Approvals" value="3" accent="from-fuchsia-500 to-teal-400" />
        <StatCard title="Pending Payments" value="$12,450" accent="from-purple-500 to-cyan-400" />
        <StatCard title="Next Milestone" value="Nov 28" accent="from-violet-500 to-teal-300" />
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <Donut progress={68} />

          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-semibold text-slate-900 dark:text-white">Project Timeline</h3>
              <button className="text-sm text-slate-600 dark:text-slate-300">View All</button>
            </div>
            <div className="grid grid-cols-5 gap-3">
              {timeline.map((t, i) => {
                const badge = t.status === 'done' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : t.status === 'current' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300' : 'bg-slate-500/20 text-slate-700 dark:text-slate-300'
                return (
                  <div key={i} className="p-4 rounded-xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
                    <p className="text-xs text-slate-500">{t.time}</p>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-100">{t.title}</p>
                    <span className={`mt-2 inline-block text-[10px] px-2 py-0.5 rounded-full ${badge}`}>{t.status}</span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-white">Recent Chats</h3>
              <MessageSquare className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-4 space-y-3">
              {chats.map((c, i) => (
                <div key={i} className="p-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{c.name}</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{c.msg}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-white">Upcoming Meetings</h3>
              <Calendar className="h-4 w-4 text-slate-500" />
            </div>
            <div className="mt-4 space-y-3">
              {meetings.map((m, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">
                  <div>
                    <p className="text-sm font-medium text-slate-800 dark:text-slate-200">{m.title}</p>
                    <p className="text-xs text-slate-600 dark:text-slate-400">{m.date}</p>
                  </div>
                  <ArrowRight className="h-4 w-4 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-slate-900 dark:text-white">Notifications</h3>
              <Bell className="h-4 w-4 text-slate-500" />
            </div>
            <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>Invoice #1042 paid successfully.</li>
              <li>New comment in Project Phoenix.</li>
              <li>Design review moved to Friday.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
