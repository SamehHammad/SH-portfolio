"use client";
import React, { useState, useEffect } from "react";
import Experience from "@/components/about/Experience";
import Certificates from "@/components/about/Certificates";
import Skills from "@/components/about/Skills";
import Internships from "@/components/about/Internships";
import { useRouter } from "next/navigation";

// Define tab type
interface Tab {
  id: string;
  label: string;
}

const Tabs = ({
  currSearchParams,
}: {
  currSearchParams: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("experience");

  // Sync activeTab with search params and handle default redirect
  useEffect(() => {
    const tabFromParams = currSearchParams?.my; // Access "my" from searchParams object

    if (!tabFromParams || typeof tabFromParams !== "string") {
      router.replace("/about?my=experience");
      setActiveTab("experience");
    } else if (isValidTab(tabFromParams)) {
      setActiveTab(tabFromParams);
    } else {
      router.replace("/about?my=experience");
      setActiveTab("experience");
    }
  }, [currSearchParams, router]); // Fixed dependency array

  const tabs: Tab[] = [
    { id: "experience", label: "Experience" },
    { id: "certificates", label: "Certificates" },
    { id: "skills", label: "Skills" },
    { id: "internships", label: "Internships" },
  ];

  // Helper function to validate tab ID
  const isValidTab = (tabId: string): tabId is (typeof tabs)[number]["id"] => {
    return tabs.some((tab) => tab.id === tabId);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "experience":
        return <Experience />;
      case "certificates":
        return <Certificates />;
      case "skills":
        return <Skills />;
      case "internships":
        return <Internships />;
      default:
        return <Experience />;
    }
  };

  return (
    <div className="transition-colors duration-300">
      <div className="px-4 pt-12 sm:px-12">
        <div className="rounded-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav
              className="flex justify-center gap-1 sm:gap-4 p-4 overflow-x-auto"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    router.push(`/about?my=${tab.id}`);
                  }}
                  className={`
                    relative py-2 px-2 text-[10px] md:text-sm font-medium rounded-md
                    transition-all duration-200 ease-in-out
                    ${activeTab === tab.id ? "card !p-3 border border-1 !border-primary-500" : ""}
                  `}
                  aria-current={activeTab === tab.id ? "page" : undefined}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span className="absolute bottom-0 left-1/2 w-1 h-1 bg-[#FF7000] rounded-md transform -translate-x-1/2 translate-y-2" />
                  )}
                </button>
              ))}
            </nav>
          </div>
          <div className="p-2">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
