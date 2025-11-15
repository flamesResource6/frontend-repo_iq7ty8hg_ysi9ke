import React, { useState } from 'react'

const dummy = Array.from({length:16}).map((_,i)=> ({
  name: `Design_${i+1}.fig`, tag: ['UI','UX','Assets','Docs'][i%4], version: `v${i%3 + 1}`
}))

export default function Files(){
  const [history, setHistory] = useState(null)
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Files & Deliverables</h2>
        <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">Upload</button>
      </div>
      <div className="grid md:grid-cols-4 gap-4">
        {dummy.map((f,i)=> (
          <button key={i} onClick={()=>setHistory(f)} className="text-left p-4 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:bg-white/80">
            <div className="h-28 rounded-xl bg-gradient-to-br from-purple-500/20 to-teal-400/20 border border-white/30 dark:border-white/10" />
            <p className="mt-3 text-sm font-medium text-slate-900 dark:text-white">{f.name}</p>
            <p className="text-xs text-slate-500">{f.version} • {f.tag}</p>
          </button>
        ))}
      </div>

      {history && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={()=>setHistory(null)}>
          <div className="max-w-lg w-full p-6 rounded-[22px] bg-white/90 dark:bg-white/10 border border-white/30 dark:border-white/10" onClick={e=>e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{history.name}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Tag {history.tag}</p>
            <ul className="mt-3 text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <li>v1 — Initial upload</li>
              <li>v2 — Minor fixes</li>
              <li>v3 — Final polish</li>
            </ul>
            <div className="mt-4 text-right">
              <button className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
