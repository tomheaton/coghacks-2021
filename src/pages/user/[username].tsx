import {NextPage} from "next";
import {useUser} from "@auth0/nextjs-auth0";
import {useRouter} from "next/router";

const UserPage = () => {

    const router = useRouter();

    const {user, error, isLoading} = useUser();

    if (isLoading) {
        return (
            <div>Loading...</div>
        );
    }

    if (error) {
        return (
            <div>{error.message}</div>
        );
    }

    if (user) {
        return (
            <div>
                <img src={user.picture ? user.picture : "./icon-192x192.png"} alt={user.name ? user.name : "default"}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        );
    }

    router.push("/");
}

export default UserPage;