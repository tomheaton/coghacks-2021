import type {NextPage} from 'next';
import styles from '../styles/Home.module.css';
import Head from 'next/head';
import Image from "next/image";
import {useRouter} from "next/router";
import {useUser} from "@auth0/nextjs-auth0";
import {Breadcrumb} from "react-bootstrap";

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
                <title>Home | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <div className={"main"}>
                <h1> Home </h1>

                <Breadcrumb>
                    <Breadcrumb.Item href="/">Landing Page</Breadcrumb.Item>
                    <Breadcrumb.Item active={router.pathname === "posting"} href="/company">
                        Company
                    </Breadcrumb.Item>
                    <Breadcrumb.Item active={router.pathname === "posting"} href="/posting">
                        Posting
                    </Breadcrumb.Item>
                </Breadcrumb>

            </div>

        </div>
    );
}

export default Home;
