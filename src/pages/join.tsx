import {NextPage} from "next";
import styles from "../styles/Join.module.css";
import Head from "next/head";

const Join: NextPage = () => {

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("join");
    }

    return (
        <div className={"main"}>

            <Head>
                <title>Join | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

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