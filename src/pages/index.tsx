import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import {useRouter} from "next/router";

const Home: NextPage = () => {

    const router = useRouter();

    const handleBegin = async () => {
        await router.push("/join");
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <nav className={styles.navbar}>
                <div className={styles.inner}>
                    <p>Login</p>
                </div>
            </nav>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    lana
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
                <h1 className={styles.title}>
                    lana
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
                <h1 className={styles.title}>
                    lana
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

            {/*<footer className={styles.footer}>
                <a href="https://cognisess.com" target="_blank" rel="noopener noreferrer" >
                    Powered by{' '}
                    <span className={styles.logo}>
                        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
                    </span>
                </a>
            </footer>*/}
        </div>
    );
}

export default Home;
