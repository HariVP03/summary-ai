import {initFirebase} from "../firebase/firebaseApp";
import { Button } from "@chakra-ui/react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from "next/router";
export default function Login() {
    initFirebase();
    const provider=new GoogleAuthProvider();
    const auth=getAuth();
    const router=useRouter();
    const [user,loading]=useAuthState(auth);

    if(loading){
        return <div>Loading .....</div>
    }
    if(user){
        router.push("/loggesin")
    }

    const signIn =async () => {
        const result =await signInWithPopup(auth,provider);
    }

    return (
        <div>
            <Button onClick={signIn}>Login</Button>
        </div>
    )
}