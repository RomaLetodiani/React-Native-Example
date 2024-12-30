import { User } from "@/types/user.types";

import { logger } from "./logger";
import { agents, galleries, properties, reviews } from "./seed";

const API_DELAY = 2000;
// Simulate API call with 2 second delay
const simulateApiCall = async (ms: number = API_DELAY) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const apiCall = async <T, U>(fn: (...args: U[]) => T) => {
  try {
    await simulateApiCall();
    return await fn();
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const getLatestProperties = async () => apiCall(() => properties.slice(0, 5));

type GetPropertiesArgs = {
  filter: string;
  query: string;
  limit?: number;
};

export const getProperties = async (args?: GetPropertiesArgs) =>
  apiCall(() => {
    const { filter, query, limit = 10 } = args ?? {};
    let filteredProperties = properties;

    if (filter && filter !== "All") {
      filteredProperties = properties.filter((property) => property.type === filter);
    }

    if (query) {
      filteredProperties = filteredProperties.filter(
        ({ name, address, type }) =>
          name.includes(query) || address.includes(query) || type.includes(query)
      );
    }

    return filteredProperties.slice(0, limit);
  });

type GetPropertyByIdArgs = {
  id: string;
};

export const getPropertyById = async (args?: GetPropertyByIdArgs) =>
  apiCall(() => {
    const property = properties.find((property) => property.id === args?.id) || null;
    return {
      ...property,
      reviews: reviews.filter((review) => property?.reviews.includes(review.id)),
      galleries: galleries.filter((gallery) => property?.gallery.includes(gallery.id)),
      agents: agents.filter((agent) => property?.agent.includes(agent.id)),
    };
  });
