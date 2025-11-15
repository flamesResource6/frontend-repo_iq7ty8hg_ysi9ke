import React from 'react'

export default function Notifications(){
  return (
    <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
      <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Notifications</h2>
      <ul className="mt-4 space-y-2 text-sm text-slate-700 dark:text-slate-300">
        {[
          'New proposal approved',
          'Payment received for INV-1032',
          'Meeting moved to 4:30 PM',
          'Ticket T-210 resolved',
        ].map((n,i)=> <li key={i} className="px-4 py-2 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">{n}</li>)}
      </ul>
    </div>
  )
}
