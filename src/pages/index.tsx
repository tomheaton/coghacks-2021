import type {NextPage} from 'next';
import styles from '../styles/Index.module.css';
import Head from 'next/head';
import Image from "next/image";
import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0";

const Index: NextPage = () => {

    const router = useRouter();

    const { user, error, isLoading } = useUser();

    const handleBegin = async () => {
        await router.push("/api/auth/login");
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
                        <ul>
                            <li>
                                Fill in a short skills test to discover your best skills
                            </li>
                            <li>
                                Relay these desirable skills to an employer instantly when you apply
                            </li>
                            <li>
                                Remove the need for a CV
                            </li>
                        </ul>
                    </div>
                    <div className={styles.card}>
                        <h2>For Employers</h2>
                        <ul>
                            <li>
                                Filter skills that you desire the most
                            </li>
                            <li>
                                Find the most suitable candidates for the role
                            </li>
                            <li>
                                Enable face to face interviews and videos
                            </li>
                        </ul>
                    </div>
                </div>
            </main>

            <main className={styles.main}>
                <div className={styles.grid}>
                    <div className={styles.card} style={{overflow: "hidden"}}>
                        <h2>Responsive Design</h2>
                        <p>Built for a fantastic mobile first experience</p>
                        <Image src={"/lana-mockup.png"} height={"600"} width={"800"}/>
                    </div>
                    <div className={styles.card} style={{overflow: "hidden"}}>
                        <h2>Innovation without CVs</h2>
                        <p>Create applications without the need of CV</p>
                        <Image src={"/image_two.png"} height={"360"} width={"640"}/>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Index;
