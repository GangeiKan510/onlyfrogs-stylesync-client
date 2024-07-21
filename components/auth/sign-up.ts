import { createUserWithEmailAndPassword } from "firebase/auth";

interface SignUpProps {
  firebaseAuth: any;
  email: string;
  password: string;
  loading: boolean
};

export const signUp = async({firebaseAuth, email, password, loading}: SignUpProps ) => {
  try {
    const res = await createUserWithEmailAndPassword(firebaseAuth, email, password);
    console.log(res);
  } catch (error) {
    console.log(error);
    alert('Sign in failed:' + error);
  }
}