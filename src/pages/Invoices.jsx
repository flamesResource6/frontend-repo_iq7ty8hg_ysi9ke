import React from 'react'

const invoices = Array.from({length:10}).map((_,i)=> ({
  id: `INV-${1030+i}`, amount: ['$1,200','$2,450','$980','$3,600'][i%4], status: ['Paid','Unpaid','Pending','Paid'][i%4], date: ['Nov 2','Nov 8','Nov 12','Nov 18'][i%4]
}))

export default function Invoices(){
  return (
    <div className="space-y-6">
      <div className="p-6 rounded-[22px] bg-white/60 dark:bg-white/5 border border-white/30 dark:border-white/10">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-white">Invoices & Payments</h2>
        <table className="w-full mt-4 text-sm">
          <thead className="text-left text-slate-500"><tr><th className="py-2">Invoice</th><th>Amount</th><th>Status</th><th>Date</th><th></th></tr></thead>
          <tbody>
            {invoices.map(r=> (
              <tr key={r.id} className="border-t border-white/30 dark:border-white/10">
                <td className="py-3">{r.id}</td>
                <td>{r.amount}</td>
                <td><span className={`px-2 py-1 rounded-full text-xs ${r.status==='Paid'?'bg-emerald-500/20 text-emerald-700 dark:text-emerald-300':r.status==='Pending'?'bg-amber-500/20 text-amber-700 dark:text-amber-300':'bg-slate-500/20 text-slate-700 dark:text-slate-300'}`}>{r.status}</span></td>
                <td>{r.date}</td>
                <td className="text-right"><button className="px-3 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-teal-400 text-white">Pay</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
