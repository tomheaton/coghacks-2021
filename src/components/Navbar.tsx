import {useUser} from "@auth0/nextjs-auth0";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {

    const {user, error, isLoading} = useUser();

    return (
        <div className={styles.wrapper}>
            <div className={styles.navbar}>
                {user ? (
                    <>
                        <div>
                            <a href={"/api/auth/logout"}>Logout</a>
                        </div>
                        <img className={styles.profileImage} src={user.picture ? user.picture : "./default.png"}/>
                    </>
                ) : (
                    <div>
                        <a href={"/api/auth/login"}>Login</a>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Navbar;