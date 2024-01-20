import { IconHeart, IconLocation, IconTrash, IconUser, IcontTme } from "@/app/ui/icons";
import React from "react";

export function JobCard() {
  return <div className="bg-white rounded-[10px] shadow-[0px_0px_7px_#0000001a] max-w-[370px] mx-auto p-4 flex flex-col">
    <div className="flex justify-between">
      <div>
        <p className="text-bold font-normal text-gray text-[16px]">
          <span className="font-medium">Adir Barak </span>
          <span className="text-secondary">posted a new job:</span>
        </p>
        <div className="text-secondary font-normal text-gray text-[14px]">
          15/01/24
        </div>
      </div>
      <img className="w-[44px] h-[44px] object-cover" alt="Image" src="/assets/intel.png" />
    </div>

    <div className="flex mt-4">
      <IcontTme className="w-[16px] h-[16px]" />
      <div className="ml-2 text-secondary font-normal text-gray text-[12px]">
        1-2 Years
      </div>
    </div>
    <div className="flex mt-2">
      <IconLocation className="w-[16px] h-[16px]" />
      <div className="ml-2 text-secondary font-normal text-gray text-[12px]">
        Santa Clara, Ca
      </div>
    </div>
    <div className="flex mt-2">
      <IconUser className="w-[16px] h-[16px]" />
      {/* Additional Info */}
    </div>

    <div className="mt-4">
      <div className="text-bold font-medium text-black text-[14px]">
        Details:
      </div>
      <p className="text-secondary font-normal text-black text-[12px] mt-1">
        We are looking for a highly motivated Software Engineer...
      </p>
    </div>

    <div className="flex justify-end mt-4 space-x-2">
      <IconTrash className="w-[24px] h-[24px]" />
      <IconHeart className="w-[24px] h-[24px]" />
    </div>
  </div>;
}
