import React from 'react';
import { UserCard } from './UserCard';
import { SearchBlock } from '../jobs/search/SearchBlock';
import { JobCard } from '../jobs/card/JobCard';
import { NewJobDialog } from '../jobs/NewJobDialog';

export function CommunityTab() {
  return (
    <div>
      <SearchBlock />
      <UserCard />
      <NewJobDialog />
    </div>
  );
}
