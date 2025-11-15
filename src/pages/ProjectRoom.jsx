import React, { useState } from 'react'

const tabs = ['Overview','Milestones','Tasks','Team Members','Chat','Files','Payments','Reports']

const milestones = [
  { title: 'Discovery', due: 'Nov 18', status: 'Done' },
  { title: 'Design System', due: 'Nov 24', status: 'In Progress' },
  { title: 'MVP Build', due: 'Dec 10', status: 'Pending' },
]

const tasks = {
  todo: ['Auth screens', 'Notification center', 'Invoice PDF template'],
  doing: ['Kanban board drag & drop'],
  done: ['API contracts', 'Color system'],
}

export default function ProjectRoom() {
  const [active, setActive] = useState('Overview')

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2">
        {tabs.map(t => (
          <button key={t} onClick={()=>setActive(t)} className={`px-4 py-2 rounded-xl text-sm border ${active===t?'bg-gradient-to-r from-purple-500/20 to-teal-400/20 text-slate-900 dark:text-white border-white/30':'bg-white/60 dark:bg-white/5 text-slate-700 dark:text-slate-300 border-white/30 dark:border-white/10'}`}>{t}</button>
        ))}
      </div>

      {active==='Overview' && (
        <div className="grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white">Progress</h3>
            <div className="mt-4 h-3 w-full rounded-full bg-slate-200/70 dark:bg-white/10">
              <div className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: '64%' }} />
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">64% complete • Next milestone in 4 days</p>
          </div>
          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
            <h3 className="font-semibold text-slate-900 dark:text-white">Notes</h3>
            <ul className="list-disc pl-4 mt-2 text-sm text-slate-700 dark:text-slate-300">
              <li>Client prefers glassmorphism theme</li>
              <li>Dark mode by default</li>
              <li>Use voice assistant copy</li>
            </ul>
          </div>
        </div>
      )}

      {active==='Milestones' && (
        <div className="grid md:grid-cols-3 gap-4">
          {milestones.map((m,i)=> (
            <div key={i} className="p-5 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
              <p className="text-xs text-slate-500">Due {m.due}</p>
              <h4 className="font-semibold text-slate-900 dark:text-white">{m.title}</h4>
              <span className={`mt-3 inline-block text-xs px-2 py-1 rounded-full ${m.status==='Done'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300':m.status==='In Progress'?'bg-amber-500/20 text-amber-700 dark:text-amber-300':'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{m.status}</span>
            </div>
          ))}
        </div>
      )}

      {active==='Tasks' && (
        <div className="grid md:grid-cols-3 gap-4">
          {['todo','doing','done'].map((col)=> (
            <div key={col} className="p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
              <h4 className="font-semibold capitalize text-slate-900 dark:text-white">{col.replace('-', ' ')}</h4>
              <div className="mt-3 space-y-3">
                {tasks[col].map((t,i)=>(
                  <div key={i} className="p-3 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">{t}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {active==='Team Members' && (
        <div className="grid md:grid-cols-2 gap-4">
          {['Ava','Liam','Noah','Mia','Ethan','Zoe'].map((m,i)=> (
            <div key={i} className="flex items-center gap-3 p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 text-white flex items-center justify-center font-semibold">{m[0]}</div>
              <div>
                <p className="font-medium text-slate-900 dark:text-white">{m}</p>
                <p className="text-xs text-slate-500">Product Designer</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {active==='Chat' && (
        <div className="h-[420px] p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 flex flex-col">
          <div className="flex-1 space-y-3 overflow-auto pr-2">
            {[1,2,3,4,5].map(i=> (
              <div key={i} className={`max-w-[70%] p-3 rounded-2xl ${i%2===0?'ml-auto bg-teal-500/20 text-slate-900 dark:text-white':'bg-white/80 dark:bg-white/10 text-slate-800 dark:text-slate-200'}`}>Sample message {i}</div>
            ))}
          </div>
          <div className="mt-3 flex gap-2">
            <input placeholder="Type a message" className="flex-1 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white font-medium">Send</button>
          </div>
        </div>
      )}

      {active==='Files' && (
        <div className="grid md:grid-cols-4 gap-4">
          {Array.from({length:8}).map((_,i)=> (
            <div key={i} className="p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
              <div className="h-28 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-400/20 border border-white/30 dark:border-white/10" />
              <p className="mt-3 text-sm font-medium text-slate-800 dark:text-slate-100">Design_{i+1}.fig</p>
              <p className="text-xs text-slate-500">v{i+2} • 2.4MB</p>
            </div>
          ))}
        </div>
      )}

      {active==='Payments' && (
        <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
          <table className="w-full text-sm">
            <thead className="text-left text-slate-500">
              <tr><th className="py-2">Invoice</th><th>Amount</th><th>Status</th><th>Date</th></tr>
            </thead>
            <tbody>
              {[
                { id: '#1029', amount: '$2,400', status: 'Paid', date: 'Nov 12' },
                { id: '#1030', amount: '$1,050', status: 'Pending', date: 'Nov 20' },
              ].map((r,i)=> (
                <tr key={i} className="border-t border-white/30 dark:border-white/10">
                  <td className="py-3">{r.id}</td>
                  <td>{r.amount}</td>
                  <td><span className={`px-2 py-1 rounded-full text-xs ${r.status==='Paid'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300':'bg-amber-500/20 text-amber-700 dark:text-amber-300'}`}>{r.status}</span></td>
                  <td>{r.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {active==='Reports' && (
        <div className="grid md:grid-cols-2 gap-4">
          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">Burndown chart placeholder</div>
          <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">Velocity chart placeholder</div>
        </div>
      )}
    </div>
  )
}
