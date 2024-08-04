import { CreateCloset } from "@/utils/types/CreateCloset";
import { getWithFirebaseJwt, postWithFirebaseJwt } from "../firebase/requests-with-firebase";

export const createCloset = async (closetData: CreateCloset) => {
  try {
    const response = await postWithFirebaseJwt("/web/closet/create-closet", closetData);

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