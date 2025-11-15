import React from 'react'

export default function Audit(){
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">System Audit</h2>
        <p className="text-slate-600 dark:text-slate-400">Upload your existing system to generate a report with risks, performance, and modernization steps.</p>
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="md:col-span-2 p-6 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 h-48 flex items-center justify-center">Drop files here</div>
          <div className="space-y-3">
            {['Security posture','Dependency risks','Performance baseline','Modernization suggestions'].map((t,i)=> (
              <div key={i} className="p-4 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">{t}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
