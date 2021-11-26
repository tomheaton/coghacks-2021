import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <h1 className={styles.title}>
                    lana
                </h1>
                <p className={styles.description}>
                    finding where you belong...
                </p>
                <button className={styles.beginButton}>
                    begin
                </button>
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
