import { CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import React from 'react';
import { JobCardDropdown } from './CommunityCardDropdown';

export function JobCardHeader(
  user: { name: string; avatar: string; alt: string; fallback: string },
  job: { date: string; experience: string; location: string; details: string }
) {
  return (
    <CardHeader className="">
      <CardTitle className="text-sm flex gap-1">
        <div className="flex flex-row w-full">
          <div className="flex flex-col  justify-start ali  w-1/6">
            <Avatar className="h-8 w-8">
              <AvatarImage src={user.avatar} alt={user.alt} />
              <AvatarFallback>{user.fallback}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col w-4/6">
            <div className="flex flex-row">
              <div className="flex ">
                <strong>{user.name} </strong> 
              </div>
            </div>

            <div className="flex flex-row ">
              <div className="flex ">
                {/* <small>{job.date}</small> */}
              </div>
            </div>
          </div>
          <div className="flex items-start justify-end  w-1/6">
            <JobCardDropdown />
          </div>
        </div>
      </CardTitle>
    </CardHeader>
  );
}
