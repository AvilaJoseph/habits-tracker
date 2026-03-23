import { useState } from "react";
import { Search, SlidersHorizontal, Plus } from "lucide-react";

export function FilterTodo({isTodoModalOpen, setIsTodoModalOpen}) {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="filter-shell border-size-md flex flex-col md:flex-row w-full mt-4 gap-4 md:items-center md:justify-between">

      <div className="flex items-center gap-3 w-full md:max-w-[300px]">
        <div className="relative w-full">
          <Search className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input type="text" placeholder="Search todos..." className="input-field search-input"/>
        </div>
        <button onClick={() => setShowFilters(!showFilters)} className="inline-flex md:hidden icon-btn"><SlidersHorizontal className="h-4 w-4" /></button>
        <button className="inline-flex md:hidden btn-primary h-9 w-9 p-0 items-center justify-center" onClick={()=>setIsTodoModalOpen(true)}><Plus className="h-4 w-4" /></button>
      </div>

      <div className="hidden md:flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <input type="date" className="w-full sm:w-auto select-field"/>

        <select className="w-full sm:w-auto select-field">
          <option>Status</option>
          <option>Completed</option>
          <option>Incompleted</option>
        </select>

        <button onClick={()=>setIsTodoModalOpen(true)}
        className="btn-primary">Add To-do</button>
      </div>

      {showFilters && (
        <div className="flex md:hidden flex-col sm:flex-row gap-3 w-full md:w-auto">
          <input type="date" className="w-full sm:w-auto select-field"/>

          <select className="w-full sm:w-auto select-field">
            <option>Status</option>
            <option>Completed</option>
            <option>Incompleted</option>
          </select>
        </div>
      )}
    </div>
  );
}