"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import SEO from "@/components/services/SEO";
import Responsive from "@/components/services/Responsive";
import Performance from "@/components/services/Performance";
import Browser from "@/components/services/Browser";
import useServices from "@/hooks/useServices";
import { ServiceData } from "@/components/services/ServiceCard";

// Define tab type
interface Tab {
  id: string;
  label: string;
}

interface SEOProps {
  services: ServiceData[];
}

const Tabs = ({
  currSearchParams,
}: {
  currSearchParams: { [key: string]: string | string[] | undefined };
}) => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<string>("responsive_design");
  const { services } = useServices() as SEOProps; // Move useServices outside renderContent

  // Sync activeTab with search params and handle default redirect
  useEffect(() => {
    const tabFromParams = currSearchParams?.s; // Access "s" from searchParams object

    if (!tabFromParams || typeof tabFromParams !== "string") {
      router.replace("/services?s=responsive_design");
      setActiveTab("responsive_design");
    } else if (isValidTab(tabFromParams)) {
      setActiveTab(tabFromParams);
    } else {
      router.replace("/services?s=responsive_design");
      setActiveTab("responsive_design");
    }
  }, [currSearchParams, router]); // Fixed dependency array

  const tabs: Tab[] = [
    { id: "responsive_design", label: "Responsive Web Design" },
    { id: "seo", label: "SEO" },
    { id: "performance_optimization", label: "Performance Optimization" },
    { id: "cross_browser_compatibility", label: "Browser Compatibility" },
  ];

  // Helper function to validate tab ID
  const isValidTab = (tabId: string): tabId is (typeof tabs)[number]["id"] => {
    return tabs.some((tab) => tab.id === tabId);
  };

  const getServices = (serviceType: string): ServiceData[] => {
    return services?.filter((service) => service.serviceType === serviceType);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "responsive_design":
        return <Responsive services={getServices(activeTab)} />;
      case "seo":
        return <SEO services={getServices(activeTab)} />;
      case "performance_optimization":
        return <Performance services={getServices(activeTab)} />;
      case "cross_browser_compatibility":
        return <Browser services={getServices(activeTab)} />;
      default:
        return <Responsive services={getServices("responsive_design")} />;
    }
  };

  return (
    <div className="min-h-screen transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 max-w-8xl">
        <div className="rounded-lg shadow-lg overflow-hidden">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav
              className="flex justify-center space-x-1 sm:space-x-4 p-4 overflow-x-auto"
              aria-label="Tabs"
            >
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveTab(tab.id);
                    router.push(`/services?s=${tab.id}`);
                  }}
                  className={`
                    relative py-2 px-2 text-[9px] md:text-sm  font-medium rounded-md
                    transition-all duration-200 ease-in-out
                    ${
                      activeTab === tab.id
                        ? "bg-[#FF7000] text-white"
                        : "text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }
                    focus:outline-none focus:ring-2 focus:ring-[#FF7000] focus:ring-offset-2
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
          <div className="p-6">{renderContent()}</div>
        </div>
      </div>
    </div>
  );
};

export default Tabs;
