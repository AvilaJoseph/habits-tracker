import { ChevronLeft, ChevronRight, MessageCircleQuestionMark, Clock5, ShieldCheck  } from "lucide-react"

export function Header() {
  return (
    <div className="w-full px-6 pt-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5">
            <div className="h-3 w-3 rounded-full bg-red-400" />
            <div className="h-3 w-3 rounded-full bg-yellow-400" />
            <div className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <ChevronLeft className="h-5 w-5 text-slate-700" />
          <ChevronRight className="h-5 w-5 text-slate-300" />
        </div>

        <div className="flex flex-row items-center gap-3">
            <MessageCircleQuestionMark className="h-5 w-5 text-slate-500"/>
            <Clock5 className="h-5 w-5 text-slate-500"/>
            <ShieldCheck className="h-5 w-5 text-slate-500"/>
            <div className="h-5 w-5 bg-gray-500 rounded-full"></div>
        </div>
      </div>
    </div>
  )
}