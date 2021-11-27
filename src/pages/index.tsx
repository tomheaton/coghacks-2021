import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0";

const Home: NextPage = () => {

    const router = useRouter();

    const { user, error, isLoading } = useUser();

    const handleBegin = async () => {
        await router.push("/join");
    }

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

    return (
        <div className={styles.container}>
            <Head>
                <title>Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    lana 1
                </h1>
                <p className={styles.description}>
                    finding where you belong...
                </p>
                <div className={styles.buttonWrapper}>
                    <button className={"btn"} onClick={handleBegin}>
                        begin
                    </button>
                </div>
            </main>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>heading</h2>
                        <p>lololol</p>
                        {/*<Image src={"/blob.svg"} height={400} width={400}/>*/}
                    </div>
                    <div className={styles.card}>
                        <h2>heading 2</h2>
                        <p>lololol 2</p>
                    </div>
                </div>
            </main>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card}>
                        <h2>heading</h2>
                        <p>lololol</p>
                    </div>
                    <div className={styles.card}>
                        <h2>heading 2</h2>
                        <p>lololol 2</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;
