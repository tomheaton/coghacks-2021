import {NextPage} from "next";
import styles from "../styles/Join.module.css";

const Login: NextPage = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("login");
    }

    return (
        <div className={"main"}>
            <h1>
                Login to Lana!
            </h1>
            <div>
                <form onSubmit={handleSubmit} className={styles.details}>
                    <input type={"text"} placeholder={"username"}/>
                    <br/>
                    <input type={"password"} placeholder={"password"}/>
                    <button className={"btn"} type={"submit"}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;