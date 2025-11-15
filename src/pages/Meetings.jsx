import React from 'react'

export default function Meetings(){
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Meeting Scheduler</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-4">
          <div className="md:col-span-2 p-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 h-[420px]">
            <div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-500">
              {['Sun','Mon','Tue','Wed','Thu','Fri','Sat'].map(d=> <div key={d}>{d}</div>)}
            </div>
            <div className="mt-2 grid grid-cols-7 gap-2">
              {Array.from({length:35}).map((_,i)=> (
                <div key={i} className={`h-16 rounded-xl border border-white/30 dark:border-white/10 ${i%5===0 ? 'bg-gradient-to-br from-purple-500/10 to-teal-400/10' : 'bg-transparent'}`} />
              ))}
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">
              <p className="font-medium text-slate-900 dark:text-white">Book a Meeting</p>
              <input placeholder="Title" className="mt-2 w-full px-3 py-2 rounded-xl bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10" />
              <input placeholder="Date" className="mt-2 w-full px-3 py-2 rounded-xl bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10" />
              <select className="mt-2 w-full px-3 py-2 rounded-xl bg-white/80 dark:bg-white/5 border border-white/30 dark:border-white/10">
                {['15 min','30 min','45 min','60 min'].map(s=> <option key={s}>{s}</option>)}
              </select>
              <button className="mt-3 w-full px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">Book</button>
            </div>
            <div className="p-4 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">
              <p className="font-medium text-slate-900 dark:text-white">Team Availability</p>
              <ul className="mt-2 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                <li>Ava — 10 AM - 4 PM</li>
                <li>Liam — 1 PM - 6 PM</li>
                <li>Noah — 9 AM - 5 PM</li>
                <li>Mia — 12 PM - 8 PM</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
