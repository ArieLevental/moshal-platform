import IconMoshal from '@/components/icons/IconMoshal';
import React from 'react';
import Link from 'next/link';
import { UserAvatarMenu } from './UserAvatarMenu';
import { NotificationMenu } from './NotificationMenu';
import { SideMenu } from './SideMenu';

export function HeaderLayout() {
  return (
    <>
      <div>
        <div className="header flex flex-row h-full">
          {/* Logo Column */}
          <div className="flex flex-col align-bottom justify-end  w-3/6">
            <Link className='flex items-center gap-1' href="/">
          
              <IconMoshal />
              Moshal
            </Link>
          </div>
          {/* User Prefernce Column */}
          <div className="flex flex-col w-1/2">
            {/* First Row - Avatar */}
            <div className="flex flex-row justify-end">
              <div className="flex ">
                <UserAvatarMenu />
              </div>
            </div>
            {/* Second Row */}
            <div className="flex flex-row justify-end ">
              <div className="flex">
                {' '}
                <NotificationMenu />
              </div>
              <div className="flex">
                {' '}
                <SideMenu />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
