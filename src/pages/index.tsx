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

            <main className={`${styles.main} ${styles.slideRight}`}>
                <h1 className={styles.title}>
                    Lana
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
                        <h2>For Applicants</h2>
                        <p>
                            - Fill in a short skills test to discover your best skills
                            <br/>
                            - Relay these desirable skills to an employer instantly when you apply
                            <br/>
                            - Remove the need for a CV
                        </p>
                    </div>
                    <div className={styles.card}>
                        <h2>For Employers</h2>
                        <p>
                            - Filter skills that you desire the most
                            <br/>
                            - Find the most suitable candidates for the role
                            <br/>
                            - Enable face to face interviews and videos
                        </p>
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
