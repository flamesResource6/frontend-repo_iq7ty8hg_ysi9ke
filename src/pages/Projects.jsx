import React, { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const dummyProjects = [
  { id: 'phoenix', title: 'Project Phoenix', type: 'Web App', status: 'Ongoing', progress: 68, team: ['Ava','Liam','Noah'], stack: 'React, FastAPI' },
  { id: 'atlas', title: 'Atlas CRM', type: 'CRM', status: 'Ongoing', progress: 42, team: ['Mia','Ethan'], stack: 'Next.js, Node' },
  { id: 'apollo', title: 'Apollo Mobile', type: 'Mobile', status: 'Hold', progress: 30, team: ['Zoe','Kai'], stack: 'Flutter' },
  { id: 'nebula', title: 'Nebula Analytics', type: 'Data', status: 'Completed', progress: 100, team: ['Ivy','Owen','Leo'], stack: 'React, Python' },
  { id: 'zenith', title: 'Zenith Payments', type: 'Fintech', status: 'Ongoing', progress: 55, team: ['Nora','Mason'], stack: 'React, Go' },
  { id: 'aurora', title: 'Aurora CMS', type: 'CMS', status: 'Ongoing', progress: 77, team: ['Luca','Ella'], stack: 'Vue, Laravel' },
]

const statuses = ['All','Ongoing','Completed','Hold']
const categories = ['All','Web App','CRM','Mobile','Data','Fintech','CMS']

export default function Projects() {
  const [status, setStatus] = useState('All')
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const navigate = useNavigate()

  const filtered = useMemo(() => {
    return dummyProjects.filter(p => (
      (status==='All' || p.status===status) &&
      (category==='All' || p.type===category) &&
      (p.title.toLowerCase().includes(query.toLowerCase()) || p.stack.toLowerCase().includes(query.toLowerCase()))
    ))
  }, [status, category, query])

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">My Projects</h2>
        <div className="flex gap-2">
          <input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search projects" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm" />
          <select value={status} onChange={e=>setStatus(e.target.value)} className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">
            {statuses.map(s=> <option key={s}>{s}</option>)}
          </select>
          <select value={category} onChange={e=>setCategory(e.target.value)} className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10 text-sm">
            {categories.map(s=> <option key={s}>{s}</option>)}
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-5">
        {filtered.map(p => (
          <button key={p.id} onClick={()=>navigate(`/projects/${p.id}`)} className="text-left p-5 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10 hover:bg-white/80 transition">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-slate-500">{p.type}</p>
                <h3 className="text-lg font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${p.status==='Completed'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300': p.status==='Ongoing'?'bg-amber-500/20 text-amber-700 dark:text-amber-300':'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{p.status}</span>
            </div>
            <div className="mt-4">
              <div className="h-2 w-full rounded-full bg-slate-200/70 dark:bg-white/10">
                <div className="h-2 rounded-full bg-gradient-to-r from-purple-500 to-teal-400" style={{ width: `${p.progress}%` }} />
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-400">Progress {p.progress}% • Stack: {p.stack}</p>
              <div className="mt-3 flex -space-x-2">
                {p.team.map((t,i)=>(
                  <div key={i} className="h-7 w-7 rounded-full bg-gradient-to-br from-purple-400 to-teal-300 border-2 border-white/70 dark:border-white/10 flex items-center justify-center text-[10px] font-medium text-white">{t[0]}</div>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  )
}
