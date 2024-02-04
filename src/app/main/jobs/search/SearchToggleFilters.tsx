import { Button } from '@/components/ui/button';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export function SearchToggleFilters() {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger></AccordionTrigger>
        <AccordionContent>
          <div className="flex flex-col">
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
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
