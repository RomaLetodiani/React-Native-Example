import { User } from "@/types/user.types";

export const getCurrentUser = async (): Promise<User | null> => {
  try {
    // Simulate API call with 2 second delay
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Return fake user data
    return {
      id: "123",
      name: "John Doe",
      email: "john@example.com",
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
