import { Button } from '@/components/ui/button';
import { Trash, Heart } from 'lucide-react';
import React from 'react';
import { Toggle } from '@/components/ui/toggle';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';

export function JobCardFooter() {
  return (
    <>
      <div className="flex space-x-4 text-sm text-muted-foreground justify-end">
        <div className="flex items-center">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant={'ghost'}>
                <Trash />
              </Button>
            </DialogTrigger>
            <DialogContent>
              Use Sure You Want to remove?
              <DialogClose>Cancel</DialogClose>
              <Button variant="default">Remove</Button>
            </DialogContent>
          </Dialog>
          <Toggle aria-label="Toggle italic">
            <Heart className="h-4 w-4 bg-red" />
          </Toggle>
        </div>
      </div>
    </>
  );
}
