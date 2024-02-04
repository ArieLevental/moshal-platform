import React from 'react';
import { JobCard } from '../jobs/card/JobCard';
import { NewJobDialog } from '../jobs/NewJobDialog';
import { SearchBlock } from '../jobs/search/SearchBlock';
import { UserCard } from './UserCard';
import { CommunityCard } from './card/CommunityCard';

export default function Community() {
  return (
    <div>
    
      <SearchBlock />
      <CommunityCard/>  
      <NewJobDialog />
    </div>
  );
}
