import React from 'react'

export default function Chat(){
  return (
    <div className="grid md:grid-cols-[240px_1fr] gap-4">
      <div className="p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 h-[520px]">
        <p className="text-sm font-medium text-slate-900 dark:text-white">Channels</p>
        <ul className="mt-2 space-y-1 text-sm">
          {['general','design','dev','finance'].map(c=> (
            <li key={c}><button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/70 dark:hover:bg-white/10">#{c}</button></li>
          ))}
        </ul>
        <p className="mt-4 text-sm font-medium text-slate-900 dark:text-white">Direct</p>
        <ul className="mt-2 space-y-1 text-sm">
          {['Ava','Liam','Noah','Mia'].map(c=> (
            <li key={c}><button className="w-full text-left px-3 py-2 rounded-lg hover:bg-white/70 dark:hover:bg-white/10">{c}</button></li>
          ))}
        </ul>
      </div>
      <div className="p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 h-[520px] flex flex-col">
        <div className="flex-1 overflow-auto space-y-3 pr-2">
          {Array.from({length:14}).map((_,i)=> (
            <div key={i} className={`max-w-[70%] p-3 rounded-2xl ${i%3===0?'ml-auto bg-teal-500/20 text-slate-900 dark:text-white':'bg-white/80 dark:bg-white/10 text-slate-800 dark:text-slate-200'}`}>Message {i+1}</div>
          ))}
        </div>
        <div className="mt-3 flex gap-2 items-center">
          <input placeholder="Message #general" className="flex-1 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">Send</button>
        </div>
        <p className="mt-1 text-xs text-slate-500">Ava is typing...</p>
      </div>
    </div>
  )
}
