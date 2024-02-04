import IconLocation from '@/components/icons/IconLocation';
import IcontTme from '@/components/icons/IcontTme';
import IconWhatsapp from '@/components/icons/IconWhatsapp';
import IconLinkedin from '@/components/icons/IconLinkedin';
import IconMail from '@/components/icons/IconMail';
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
           <div>
              {/* grid 3*2 */}
              <div className="flex gap-1">
                <IconWhatsapp />
                <IconLinkedin />
                <IconMail />
              </div>
              <h3>Institute:</h3>
              <span> tel aviv university</span>
              <h3>current workplace</h3>
              intel
              <h3>Bio:</h3>
            </div>
      
                {/* Full Content */}
        <div className="flex flex-col">
          <div className="flex">
            <h3>Details:</h3>
          </div>
          <div className="flex">
           
          </div>
        </div>
    </>
  );
}
