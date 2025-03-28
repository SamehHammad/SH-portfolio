import React, { Suspense } from "react";
import Tabs from "./Tabs"; // تأكد من صحة المسار
import { metadata } from "../../../lib/aboutMeta";

export { metadata };

export default async function AboutPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const resolvedSearchParams = await searchParams;

  return (
    <Suspense fallback={<div>Loading My info ...</div>}>
      <Tabs currSearchParams={resolvedSearchParams} />
    </Suspense>
  );
}
