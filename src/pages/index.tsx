import type { NextPage } from "next";
import Link from "next/link";
import {app, initFirebase} from "../../firebase/FirebaseApp";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const Home : NextPage = () => {
  initFirebase();
  const auth = getAuth();

  const signIn = async () => {
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  }

  return(
    <div className="text-center flex flex-col gap-4 items-center">
      <div>Please sign in to continue</div>
      <button onClick={signIn}>
        <div className="bg-blue-600 text-white rounded-md p-2 w-48">Sign In</div>
      </button>
    </div>
  );
};

export default Home;