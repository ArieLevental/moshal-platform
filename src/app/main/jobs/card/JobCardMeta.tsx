import IconLocation from '@/components/icons/IconLocation';
import IcontTme from '@/components/icons/IcontTme';
import React from 'react';
import Image from 'next/image';
export function JobCardMeta(job: {
  date: string;
  experience: string;
  location: string;
  details: string;
}) {
  return (
    <>
      <div className="flex row">
        <div className="flex flex-col">
          <div className="flex gap-2 align-middle justify-center"></div>
          <div className="flex gap-2 align-middle justify-center"></div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex row ">
          <div className="flex flex-col w-5/6">
            <div className="flex gap-2 align-middle items-center">
              <IcontTme />
              {job.experience}
            </div>
            <div className="flex gap-2 align-middle items-center">
              <IconLocation />
              {job.location}
            </div>
          </div>
          <div className="flex row w-1/6 ">
            <Image
              src="/android-chrome-192x192.png"
              alt="Picture of the author"
              width={50}
              height={50}
            />
          </div>
        </div>

        {/* Full Content */}
        <div className="flex flex-col">
          <div className="flex">
            <h3>Details:</h3>
          </div>
          <div className="flex">
            <p>{job.details}</p>
          </div>
        </div>
      </div>
    </>
  );
}
