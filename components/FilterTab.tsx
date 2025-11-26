"use client";

import type { FilterType } from "@/types/filters";

interface FilterTabProps {
  label: string;
  value: FilterType;
  activeFilter: FilterType;
  setActiveFilter: React.Dispatch<React.SetStateAction<FilterType>>;
}

export default function FilterTab({ label, value, activeFilter, setActiveFilter }: FilterTabProps) {
  const isActive = activeFilter === value;

  return (
    <button
      role="tab"
      aria-selected={isActive}
      tabIndex={isActive ? 0 : -1}
      onClick={() => setActiveFilter(value)}
      className={`px-6 py-3 text-lg font-semibold uppercase tracking-wide transition-all ${
        isActive
          ? "text-white border-b-2 border-white"
          : "text-white/60 hover:text-white"
      }`}
    >
      {label}
    </button>
  );
}
