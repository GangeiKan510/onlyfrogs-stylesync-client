import { CreateUserData } from "@/utils/types/CreateUser";
import { getWithFirebaseJwt, postWithFirebaseJwt } from "../firebase/requests-with-firebase";

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

export const createUser = async (userData: CreateUserData) => {
  try {
    const response = await postWithFirebaseJwt("/web/users/create-user", userData);

    if (!response.ok) {
      throw new Error(`Error creating user: ${response.statusText}`);
    }

    const newUser = await response.json();
    return newUser;
  } catch (error) {
    console.error("Failed to create user", error);
    throw error;
  }
};