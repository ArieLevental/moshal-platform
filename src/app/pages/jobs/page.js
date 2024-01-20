import { IconMenuline } from "@/app/ui/icons";
import React from "react";
import { JobCard } from "./components/card/JobCard";
import { SearchComponent } from "./components/header/SearchComponent";
import { TabComp } from "../../layout/TabComp";
import { NewJob } from "./components/addJob/AddJob"
function JobsPage() {
  return (
<>
          <TabComp />
          <SearchComponent />
          <JobCard />
          <NewJob />

</>         

  );
};
export default JobsPage;


