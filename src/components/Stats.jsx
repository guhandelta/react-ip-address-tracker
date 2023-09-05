import React from 'react'

const Stats = () => {
  return (
    <div className="w-4/5 rounded-lg absolute top-52 md:top-56 left-10 md:left-48 bg-whitez-10 flex flex-col md:flex-row container gap-4 md:gap-10 p-4 md:p-8">
        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap items-center gap-2">
            <p className="text-sm text-slate-400 fony-semibold"></p>
            <div className="md:text-2xl text-black font-bold">IP Address</div>
        </div>
        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap items-center gap-2">
            <p className="text-sm text-slate-400 fony-semibold">Location</p>
            <div className="md:text-2xl text-black font-bold"></div>
        </div>
        <div className="md:border-r-2 w-full border-slate-300 flex flex-col gap items-center gap-2">
            <p className="text-sm text-slate-400 fony-semibold">Time Zone</p>
            <div className="md:text-2xl text-black font-bold"></div>
        </div>
        <div className="w-full flex flex-col gap-2 items-center">
            <p className="text-sm text-slate-400 fony-semibold">ISP</p>
            <div className="md:text-2xl text-black font-bold"></div>
        </div>
    </div>
  )
}

export default Stats