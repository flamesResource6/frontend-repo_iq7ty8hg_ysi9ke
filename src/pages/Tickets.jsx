import React, { useState } from 'react'

const tickets = Array.from({length:12}).map((_,i)=> ({
  id: `T-${200+i}`, title: ['Login bug','UI polish','Payment issue','Add webhook'][i%4], status: ['Open','In Progress','Resolved'][i%3], priority: ['Low','Medium','High'][i%3]
}))

export default function Tickets(){
  const [filter, setFilter] = useState('All')
  const filtered = tickets.filter(t=> filter==='All' || t.status===filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Tickets & Support</h2>
        <select value={filter} onChange={e=>setFilter(e.target.value)} className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">
          {['All','Open','In Progress','Resolved'].map(s=> <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(t=> (
          <div key={t.id} className="p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between">
              <p className="font-medium text-slate-900 dark:text-white">{t.title}</p>
              <span className={`text-xs px-2 py-1 rounded-full ${t.status==='Resolved'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300':t.status==='In Progress'?'bg-amber-500/20 text-amber-700 dark:text-amber-300':'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{t.status}</span>
            </div>
            <p className="text-xs text-slate-500">{t.id} • Priority {t.priority}</p>
            <button className="mt-3 px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-xs">View details</button>
          </div>
        ))}
      </div>
    </div>
  )
}
