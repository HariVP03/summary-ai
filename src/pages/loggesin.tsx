import { Button } from "@chakra-ui/react";
import { initializeApp } from 'firebase/app';
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router";
import { getAuth } from "firebase/auth";
import { initFirebase } from "@/firebase/firebaseApp";
export default function Loggin() {
    initFirebase();
    const auth=getAuth(); 
    const [user,loading]=useAuthState(auth);

    const router=useRouter();
    if(loading){
        return <div>Loading .....</div>
    }
    if(!user){
        router.push("/");
        return <div>Please sign in to continue</div>
    }
    const callApi =async () => {
        const token= await user.getIdToken();
        console.log(token)

        const echoEndPoint: string = "https://jwtecho.pixegami.io"
        const certStr:string ="-----BEGIN CERTIFICATE-----\nMIIDHTCCAgWgAwIBAgIJALa4lbEFaLyqMA0GCSqGSIb3DQEBBQUAMDExLzAtBgNV\nBAMMJnNlY3VyZXRva2VuLnN5c3RlbS5nc2VydmljZWFjY291bnQuY29tMB4XDTIz\nMDUzMDA5MzkzMloXDTIzMDYxNTIxNTQzMlowMTEvMC0GA1UEAwwmc2VjdXJldG9r\nZW4uc3lzdGVtLmdzZXJ2aWNlYWNjb3VudC5jb20wggEiMA0GCSqGSIb3DQEBAQUA\nA4IBDwAwggEKAoIBAQDYl2CjPHQGO6DTB7EhuHBr0uKJqrqvmaXqpop05vF38/iB\nhrdV52D8+M9NUwPxgVmCXl1I32blbVZJRElOqIF/VLSZ2VuTfNLDHHjt+l+llVRZ\ntDh827mPU6w+KqHBsLdfTD5CAy9oVYk/qiXQq2bWcQv/Gk2lGlgM1+q4DkXZfHG6\nVETa3iVaB8/ybJ5n6qHNsbm6Slzt9koDaJ2aXqQEIAVUoImT1o5cP8842wnw4wCu\nj6+ZVD1N3rwMqNMrKWi7taejRhY0vTcZlX3fL4bZi//MlvlD4lgn7X7taz/qdEmx\nIp6RW9ZV3AkKkZf5Jkt8mDuoS9k4U9qbKklItGPjAgMBAAGjODA2MAwGA1UdEwEB\n/wQCMAAwDgYDVR0PAQH/BAQDAgeAMBYGA1UdJQEB/wQMMAoGCCsGAQUFBwMCMA0G\nCSqGSIb3DQEBBQUAA4IBAQBMmGM8HivXhGWXECQ+vT//u3ero4V9GmL2t62wotWC\ni75IdWREc5HhWHnMrnoG9QAguc5Rs2Xwcx4CdWzv8eBcmQXR7T3/s2bwG2r2xSER\nrp3Q57EiVgAyN48bhCzxPiE9YLC5OxPFJ0AyMotisjhJ3UEBuH8bXIYKnNwdH+JB\nyfKI+bXnyOVHoGEelvMrrXA1jBn77QifEYSrtrVshddcyC8MMABOWv8KAf3+KHzN\ntAbWtUIueqjGZ0tuvHuJeGe52GYV4RgaNJrWzwkq5PWQmppJCXBTj7kV6exHl9W9\nODnRMfIavMC3uhSn0ZL2z7R+zlTJ6FSRIDHtoM3SieV8\n-----END CERTIFICATE-----\n";
        const encodeCertStr:string=encodeURIComponent(certStr);
        const audience:string ="summarai-f1e55";

        const verificationEndPoint : string = `${echoEndPoint}/verify?audience=${audience}&cert_str=${certStr}`;
        const requestInfo = {
            headers: {
                Authorization : "Bearer " +token,
            },
        }

        const response =await fetch(echoEndPoint,requestInfo);
        const responseBody=await response.json();
        console.log(responseBody)

    }
    return (
        <div>
            <Button onClick={() => auth.signOut()}>Sign Out</Button>
            <Button onClick={callApi}>Add Item</Button>
        </div>
    )
}