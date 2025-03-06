import { SitemapStream, streamToPromise } from "sitemap";
import { fetchData } from "../../../actions/getData";

const SITE_URL = "https://sameh.online";

class SitemapGenerator {
  constructor() {
    // No need for config in this case since we're using Sanity directly
  }

  // Static routes for your portfolio
  getStaticRoutes() {
    return [
      { url: "/", changefreq: "daily", priority: 1.0 },
      { url: "/about", changefreq: "daily", priority: 0.8 },
      { url: "/about?my=experience", changefreq: "daily", priority: 0.8 },
      { url: "/about?my=certificates", changefreq: "daily", priority: 0.8 },
      { url: "/about?my=skills", changefreq: "daily", priority: 0.8 },
      { url: "/about?my=internships", changefreq: "daily", priority: 0.8 },
      { url: "/contact", changefreq: "daily", priority: 0.8 },
      { url: "/projects", changefreq: "daily", priority: 0.8 },
      { url: "/services", changefreq: "daily", priority: 0.8 },
      { url: "/services?s=responsive_design", changefreq: "daily", priority: 0.8 },
      { url: "/services?s=performance_optimization", changefreq: "daily", priority: 0.8 },
      { url: "/services?s=seo", changefreq: "daily", priority: 0.8 },
      { url: "/services?s=cross_browser_compatibility", changefreq: "daily", priority: 0.8 },
    ];
  }

  // Fetch about information from Sanity
  async getAboutData() {
    const query = `*[_type == "about"]`;
    return await fetchData(query);
  }

  // Fetch all projects from Sanity
  async getAllProjects() {
    const query = `*[_type == "project"]{ slug }`;
    return await fetchData(query);
  }

  // Transform project data into sitemap entries
  transformProjectData(projects) {
    return projects.map((project) => ({
      url: `/projects/${project.slug.current}`,
      changefreq: "weekly",
      priority: 0.7,
    }));
  }
}

export async function GET() {
  const generator = new SitemapGenerator();

  try {
    const stream = new SitemapStream({ hostname: SITE_URL });

    // Add static routes
    generator.getStaticRoutes().forEach((route) => stream.write(route));

    // Add about page
    const aboutData = await generator.getAboutData();
    if (aboutData && aboutData.length > 0) {
      stream.write({
        url: "/about",
        changefreq: "monthly",
        priority: 0.8,
      });
    }

    // Add project routes
    const projects = await generator.getAllProjects();
    if (projects && projects.length > 0) {
      generator
        .transformProjectData(projects)
        .forEach((route) => stream.write(route));
    }

    stream.end();
    const xml = await streamToPromise(stream);

    return new Response(xml.toString(), {
      headers: { "Content-Type": "application/xml" },
    });
  } catch (error) {
    console.error("Sitemap generation failed:", error);
    return new Response("Error generating sitemap", {
      status: 500,
      headers: { "Content-Type": "text/plain" },
    });
  }
}
