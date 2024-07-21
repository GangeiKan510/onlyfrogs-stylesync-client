import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/firebaseConfig";

export const signUp = async( email: string, password: string ) => {

  const firebaseAuth = auth;

  try {
    const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    console.log(res);
  } catch (error) {
    console.log(error);
    alert('Sign in failed:' + error);
  }
}