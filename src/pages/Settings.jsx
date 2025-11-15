import React from 'react'

export default function Settings(){
  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
          <h3 className="font-semibold text-slate-900 dark:text-white">Profile</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            <input placeholder="First name" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <input placeholder="Last name" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <input placeholder="Email" className="col-span-2 px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </div>
          <button className="mt-3 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-teal-400 text-white">Save</button>
        </div>
        <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
          <h3 className="font-semibold text-slate-900 dark:text-white">Security</h3>
          <div className="mt-3 grid gap-3 text-sm">
            <input placeholder="Current password" type="password" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <input placeholder="New password" type="password" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </div>
          <button className="mt-3 px-4 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10">Update Password</button>
        </div>
        <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
          <h3 className="font-semibold text-slate-900 dark:text-white">Notifications</h3>
          <div className="mt-3 grid grid-cols-2 gap-3 text-sm">
            {['Email alerts','Payment updates','Weekly summary','Product news'].map((n,i)=> (
              <label key={i} className="flex items-center gap-2">
                <input type="checkbox" defaultChecked className="accent-purple-500" />
                <span>{n}</span>
              </label>
            ))}
          </div>
        </div>
        <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
          <h3 className="font-semibold text-slate-900 dark:text-white">Company Info</h3>
          <div className="mt-3 grid gap-3 text-sm">
            <input placeholder="Company name" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
            <input placeholder="Website" className="px-3 py-2 rounded-xl bg-white/70 dark:bg-white/10 border border-white/30 dark:border-white/10" />
          </div>
        </div>
      </div>
    </div>
  )
}
