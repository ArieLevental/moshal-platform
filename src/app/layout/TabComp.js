import { IconGlobe, IconPepole } from "@/app/ui/icons";
import React from "react";

export function TabComp() {
  return <div className="flex justify-between px-4 my-4">
    <div className="flex gap-2 items-center">
      <div className="text-bold font-medium text-moshal text-[16px]">jobs</div>
      <img className="w-[16px] h-[16px]" alt="Material symbols" src="/assets/material_symbols_work_outline.svg" />
    </div>
    <div className="flex gap-2 items-center text-moshal opacity-0.7">
      <div className="text-bold font-medium text-[16px]">community</div>
      <IconGlobe className="w-[16px] h-[16px]" />
    </div>
    <div className="flex gap-2 items-center text-moshal opacity-0.7">
      <div className="text-bold font-medium text-[16px]">people</div>
      <IconPepole className="w-[13px] h-[13px]" />
    </div>
  </div>;
}
