import {NextPage} from "next";
import styles from "../styles/Join.module.css";

const Join: NextPage = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("join");
    }

    return (
        <div className={"main"}>
            <h1>
                Join Lana!
            </h1>
            <div>
                <form onSubmit={handleSubmit} className={styles.details}>
                    <input type={"text"} placeholder={"username"}/>
                    <br/>
                    <input type={"password"} placeholder={"password"}/>
                    <button className={"btn"} type={"submit"}>
                        Join
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Join;