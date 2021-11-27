import {useState} from "react";
import {NextPage} from "next";
import styles from "../../../styles/Verification.module.css";
import {useRouter} from "next/router";
import Head from "next/head";

const Verification: NextPage = () => {

    const router = useRouter();

    const [telephone, setTelephone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [location, setLocation] = useState<string>("");
    const [complete, setComplete] = useState<boolean>(false);

    const {company_id} = router.query;

    const parsed_id: number = typeof company_id === "string" ? parseInt(company_id) : 0

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("submitting verification request");

        await fetch("https://coghacks-2021.vercel.app/api/verification", {
            method: "POST",
            body: JSON.stringify({telephone, email, location})
        }).then((result) => {
            console.log(`result: ${result}`)
        }).catch((error) => {
            console.log(`error: ${error}`)
        }).finally(() => {
            setComplete(true);
        });
    }

    return (
        <div className={"main"}>

            <Head>
                <title>Verification | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h1>Request Verification</h1>
            <br/>
            <form onSubmit={handleSubmit} className={styles.details}>
                <input placeholder={"telephone"} type={"text"} onChange={(e) => {setTelephone(e.target.value)}}/>
                <input placeholder={"email"} type={"text"} onChange={(e) => {setEmail(e.target.value)}}/>
                <input placeholder={"location"} type={"text"} onChange={(e) => {setLocation(e.target.value)}}/>
                <br/>
                <button className={"btn"} type={"submit"}>Submit</button>
            </form>
        </div>
    );
}

export default Verification;