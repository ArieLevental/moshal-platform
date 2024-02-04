'use client';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Search, Settings } from 'lucide-react';

export function SearchBlock() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };
  return (
    <div>
      <form className="flex flex-row w-100 p-1 align-middle items-center">
        <Search className=" text-muted-foreground" />
        <Input placeholder="Search" className="" />

        <button onClick={handleToggle}>
          <Settings />
        </button>
      </form>

      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${!toggle && 'hidden'}`}
      >
        <div>
          Company:<Button variant={'secondary'}>Filter</Button>
          <Button variant={'secondary'}>Filter</Button>
          <Button variant={'secondary'}>+</Button>
        </div>
        <div>
          Details:<Button variant={'secondary'}>Filter</Button>
          <Button variant={'secondary'}>Filter</Button>
          <Button variant={'secondary'}>+</Button>
        </div>
      </div>
    </div>
  );
}
