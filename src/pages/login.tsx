import {initFirebase} from "../firebase/firebaseApp";
export default function login() {
    const app=initFirebase();


    return (
        <div>
            <Button>Login</Button>
        </div>
    )
}