import { IconBreadcrumb, IconNotification } from "@/app/ui/icons";
import React from "react";

export function NavBar() {
  return <div className="flex justify-between px-4">
    <IconNotification className="w-[20px] h-[20px]" />
    <IconBreadcrumb className="w-[24px] h-[24px]" />
  </div>;
}
