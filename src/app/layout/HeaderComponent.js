import SvgIconMoshal from "@/app/ui/icons/IconMoshal";
import React from "react";

export function HeaderComponent() {
  return <div className="flex justify-between items-center p-4">
    <SvgIconMoshal className="w-[30px] h-[33px]" />
    <p className="text-bold font-normal text-moshal text-[22px]">
      <span className="font-medium">Moshal social</span>
    </p>
    <img className="w-[31px] h-[31px]" alt="Mask group" src="/assets/mask_group.svg" />
  </div>;
}
