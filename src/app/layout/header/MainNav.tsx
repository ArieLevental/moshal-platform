'use client';
import Link from 'next/link';
import SvgIconJobs from '@/components/icons/IconJobs';
import SvgIconPepole from '@/components/icons/IconPepole';
import SvgIconGlobe from '@/components/icons/IconGlobe';
import React from 'react';
import { usePathname } from 'next/navigation';

export function MainNav() {
  const currentRoute = usePathname();
  const pages = [
    { id: 1, title: 'jobs', route: '/main/jobs', icon: <SvgIconJobs /> },
    {
      id: 2,
      title: 'community',
      route: '/main/community',
      icon: <SvgIconGlobe />,
    },
    { id: 3, title: 'Pepole', route: '/main/pepole', icon: <SvgIconPepole /> },
  ];
  return (
    <>
      <div className="flex w-full flex-row justify-around">
        {pages.map((page) => (
          <Link
            key={page.id}
            className={`flex items-center gap-2 px-3 py-2 text-blue-600
       hover:text-blue-800 hover:bg-blue-100
       transition duration-150 ease-in-out
       ${page.route === currentRoute && 'border-b-2 border-b-blue-700'}
       `}
            href={page.route}
          >
            <span className="font-medium">{page.title}</span>
            <span className=" inline-block">{page.icon}</span>
          </Link>
        ))}
      </div>
    </>
  );
}
