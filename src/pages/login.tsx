import {NextPage} from "next";
import styles from "../styles/Join.module.css";

const Login: NextPage = () => {

    const handleLogin = async (e: any) => {
        e.preventDefault();
        console.log("login");
    }

    return (
        <div className={"main"}>
            <h1>
                Login to Lana!
            </h1>
            <div className={styles.details}>
                <input placeholder={"username"}/>
                <input placeholder={"password"}/>
                <button className={"btn"} onClick={handleLogin}>
                    Login
                </button>
            </div>
        </div>
    );
}

export default Login;