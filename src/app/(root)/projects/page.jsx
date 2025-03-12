import React, { Suspense } from "react";
import ProjectsPage from "./ProjectsPage";
import { metadata } from "../../../lib/projectsMeta";

export { metadata };

const page = () => {
  return (
    <div>
      <Suspense>
        <ProjectsPage />
      </Suspense>
    </div>
  );
};

export default page;
