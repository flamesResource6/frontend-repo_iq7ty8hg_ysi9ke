import React, { useState } from 'react'

const requests = Array.from({length:6}).map((_,i)=> ({
  id: `CR-${310+i}`,
  title: ['Add dark mode','Refactor navbar','Update pricing copy','Improve performance','Add export CSV','Fix mobile spacing'][i],
  status: ['Pending','Approved','In Review','Pending','Rejected','Approved'][i],
  impact: ['Low','Medium','Medium','High','Low','Medium'][i]
}))

export default function Changes(){
  const [filter, setFilter] = useState('All')
  const filtered = requests.filter(r=> filter==='All' || r.status===filter)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Change Requests</h2>
        <div className="flex gap-2">
          <select value={filter} onChange={e=>setFilter(e.target.value)} className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">
            {['All','Pending','Approved','In Review','Rejected'].map(s=> <option key={s}>{s}</option>)}
          </select>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">New Request</button>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {filtered.map(r=> (
          <div key={r.id} className="p-5 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{r.id}</p>
                <p className="font-medium text-slate-900 dark:text-white">{r.title}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${r.status==='Approved'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300': r.status==='Pending'?'bg-amber-500/20 text-amber-700 dark:text-amber-300': r.status==='In Review' ? 'bg-blue-500/20 text-blue-700 dark:text-blue-300':'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{r.status}</span>
            </div>
            <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">Impact {r.impact}</p>
            <div className="mt-3 flex gap-2 justify-end">
              <button className="px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-xs">Discuss</button>
              <button className="px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-xs">Approve</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
