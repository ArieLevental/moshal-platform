import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { PlusIcon } from 'lucide-react';
import React from 'react';

export function ExpandSettings() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link" className="px-2 shadow-none">
          ...
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        alignOffset={-5}
        className="w-[200px]"
        forceMount
      >
        <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuCheckboxItem checked>
          Future Ideas
        </DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
        <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <PlusIcon className="mr-2 h-4 w-4" /> Create List
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
