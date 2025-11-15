import React from 'react'
import { Mic, Sparkles, Wand2, FileText } from 'lucide-react'

export default function Assistant(){
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">AI Voice Assistant</h2>
        <p className="text-slate-600 dark:text-slate-400">Explain your idea by voice or text. We’ll draft a blueprint instantly.</p>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 space-y-4">
            <div className="h-40 rounded-[22px] border border-white/30 dark:border-white/10 bg-gradient-to-r from-purple-500/20 to-teal-400/20 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 animate-pulse bg-gradient-to-tr from-purple-500/10 via-transparent to-teal-400/10" />
              <Mic className="h-10 w-10 text-slate-700 dark:text-slate-200" />
            </div>
            <textarea rows={5} placeholder="Explain your idea..." className="w-full px-4 py-3 rounded-2xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <div className="flex gap-3">
              <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white font-medium flex items-center gap-2"><Sparkles className="h-4 w-4"/> Generate</button>
              <button className="px-4 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">Clear</button>
            </div>
          </div>
          <div className="space-y-3">
            {[
              { title: 'Project Summary', icon: Sparkles },
              { title: 'Requirements', icon: Wand2 },
              { title: 'Timeline', icon: FileText },
              { title: 'Milestones', icon: FileText },
              { title: 'Pricing Recommendation', icon: FileText },
            ].map((c,i)=> (
              <div key={i} className="p-4 rounded-2xl bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
                <div className="flex items-center gap-2">
                  <c.icon className="h-4 w-4 text-slate-500" />
                  <p className="font-medium text-slate-900 dark:text-white">{c.title}</p>
                </div>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Generated output preview...</p>
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-xs">Generate Proposal</button>
                  <button className="px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-xs">Convert To Project</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
