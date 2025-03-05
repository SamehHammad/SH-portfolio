import React, { Suspense } from "react";
import Tabs from "./Tabs"; // تأكد من صحة المسار
import { metadata } from "../../../lib/servicesMeta";

export { metadata };

export default async function ServicesPage({ searchParams }: { searchParams: Promise<Record<string, string | string[] | undefined>> }) {
  const resolvedSearchParams = await searchParams;

  return (
    <Suspense fallback={<div>Loading services...</div>}>
      <Tabs currSearchParams={resolvedSearchParams} />
    </Suspense>
  );
}
