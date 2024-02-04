import { SearchBlock } from './search/SearchBlock';
import { JobCard } from './card/JobCard';
import { NewJobDialog } from './NewJobDialog';
import getData from '../getData';
export default async function JobTab() {
const data = await getData("jobs")
  return (
    <div className="relative min-h-screen">
      <div>
        <SearchBlock />
        {JSON.stringify(data)}
        <JobCard />
      </div>

      <div className="fixed bottom-0 m-4">
        {/* Your floating content here */}
        <NewJobDialog />
      </div>
    </div>
  );
}
