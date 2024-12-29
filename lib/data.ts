import { User } from "@/types/user.types";
import { logger } from "./logger";

const API_DELAY = 2000;
// Simulate API call with 2 second delay
const simulateApiCall = async (ms: number = API_DELAY) =>
  await new Promise((resolve) => setTimeout(resolve, ms));

const apiCall = async (fn: () => Promise<any>) => {
  try {
    await simulateApiCall();
    return await fn();
  } catch (error) {
    logger.error(error);
    return null;
  }
};

export const getCurrentUser = async (): Promise<User | null> =>
  apiCall(async () => ({
    id: "123",
    name: "John Doe",
    email: "john@example.com",
  }));

export const getLatestProperties = async () => apiCall(async () => []);

export const getProperties = async () => apiCall(async () => []);

export const getPropertyById = async () => apiCall(async () => null);
