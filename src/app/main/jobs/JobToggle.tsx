import IconTrash from '@/components/icons/IconTrash';
import { Heart } from 'lucide-react';
import React from 'react';
import { Toggle } from '@/components/ui/toggle';

export function JobToggle() {
  return (
    <div className="flex space-x-4 text-sm text-muted-foreground justify-end">
      <div className="flex items-center">
        <IconTrash />
        <Toggle aria-label="Toggle italic">
          <Heart className="h-4 w-4 bg-red" />
        </Toggle>
      </div>
    </div>
  );
}
