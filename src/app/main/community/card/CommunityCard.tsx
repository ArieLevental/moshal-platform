import { Card, CardContent, CardDescription } from '@/components/ui/card';
import React from 'react';
import { JobCardDropdown } from './CommunityCardDropdown';
import { JobCardHeader } from './CommunityCardHeader';
import { JobCardMeta } from './CommunityCardMeta';
import { JobCardFooter } from './CommunityCardFooter';
const fakeData = {
  user: {
    name: 'Adir Barak',
    avatar: '/avatars/01.png',
    alt: '@shadcn',
    fallback: 'SC',
  },
  job: {
    date: '15/01/24',
    experience: '1-2 years',
    location: 'Ny, usa',
    details:
      "We are looking for a highly motivated Software Engineer to join our team in Santa Clara, CA. In this role, you will play a pivotal role in developing and optimizing software solutions for cutting-edge semiconductor technologies. You'll collaborate with cross-functional teams, including hardware engineers and researchers.",
  },
};
export function CommunityCard() {
  const { user, job } = fakeData;

  return (
    <div className="col-span-3 lg:col-span-2">
      <div className="h-full px-4 py-6 lg:px-2">
        <Card>
          {JobCardHeader(user, job)}
          <CardContent>
            {/* Job MetaData */}
            {JobCardMeta(job)}
            {JobCardFooter()}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
