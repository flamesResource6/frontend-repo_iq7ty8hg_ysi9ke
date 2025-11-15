import React, { useState } from 'react'

const proposals = Array.from({length:8}).map((_,i)=> ({
  id: `P-${1020+i}`, project: ['Phoenix','Atlas','Nebula','Zenith'][i%4], value: ['$2,400','$4,900','$1,250','$7,800'][i%4], status: ['Draft','Sent','Approved','Paid'][i%4]
}))

export default function Proposals(){
  const [preview, setPreview] = useState(null)

  return (
    <div className="space-y-6">
      <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Proposals</h2>
          <button className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white font-medium">New Proposal</button>
        </div>
        <table className="w-full mt-4 text-sm">
          <thead className="text-left text-slate-500">
            <tr><th className="py-2">ID</th><th>Project</th><th>Value</th><th>Status</th><th></th></tr>
          </thead>
          <tbody>
            {proposals.map(p=> (
              <tr key={p.id} className="border-t border-white/30 dark:border-white/10">
                <td className="py-3">{p.id}</td>
                <td>{p.project}</td>
                <td>{p.value}</td>
                <td><span className={`px-2 py-1 rounded-full text-xs ${p.status==='Approved' || p.status==='Paid' ? 'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300' : p.status==='Sent' ? 'bg-amber-500/20 text-amber-700 dark:text-amber-300' : 'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{p.status}</span></td>
                <td className="text-right"><button onClick={()=>setPreview(p)} className="px-3 py-1 rounded-lg bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">Preview</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {preview && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4" onClick={()=>setPreview(null)}>
          <div className="max-w-xl w-full p-6 rounded-[22px] bg-white/90 dark:bg-white/10 border border-white/30 dark:border-white/10" onClick={e=>e.stopPropagation()}>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{preview.project} — {preview.id}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400">Value {preview.value}</p>
            <div className="mt-4 h-48 rounded-xl bg-gradient-to-br from-purple-500/10 to-teal-400/10 border border-white/30 dark:border-white/10" />
            <div className="mt-4 flex gap-2 justify-end">
              <button className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">Download PDF</button>
              <button className="px-3 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">Approve & Pay</button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
