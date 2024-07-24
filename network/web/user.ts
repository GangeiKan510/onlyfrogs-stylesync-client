import { getWithFirebaseJwt } from "../firebase/requests-with-firebase";

export const getAllUsers = async () => {
  try {
    const response = await getWithFirebaseJwt("/web/users/get-users");
    if (!response.ok) {
      throw new Error(`Error fetching users: ${response.statusText}`);
    }
    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Failed to get all users", error);
    throw error;
  }
};
