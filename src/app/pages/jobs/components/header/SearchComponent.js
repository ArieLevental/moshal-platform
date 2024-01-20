import { IconSearch } from "@/app/ui/icons";
import SvgIconFilter from "@/app/ui/icons/IconFilter";
import React from "react";

export function SearchComponent() {
  return <div className="flex justify-between px-4 align-items-center">
  <IconSearch className="w-6 h-6" />
  <input className="w-full h-10 border border-gray-300 rounded-md px-4" placeholder="Search for jobs" />
  <SvgIconFilter className="w-6 h-6" />
</div>
}
