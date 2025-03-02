import { client } from "../sanity/lib/client";

export async function fetchData(query: string) {
    const data = await client.fetch(query);
    return data;
  }

  export async function getSingleProject(slug : string) {
    const query = `*[_type == "project" && slug.current == '${slug}'][0]`;
    const params = { slug };
    return await client.fetch(query, params);
  }