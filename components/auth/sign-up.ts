import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const signUp = async (email: string, password: string) => {
  const firebaseAuth = auth;

  try {
    const res = await createUserWithEmailAndPassword(
      firebaseAuth,
      email,
      password,
    );
    const user = res.user;

    await sendEmailVerification(user);
    console.log("Verification email sent.");

    console.log(res);
    return true;
  } catch (error: any) {
    console.log(error);
    alert("Sign up failed: " + error.message);
    return false;
  }
};
