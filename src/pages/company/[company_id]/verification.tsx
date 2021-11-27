import {useState} from "react";
import {NextPage} from "next";
import styles from "../../../styles/Verification.module.css";
import prisma from "../../../lib/prisma";
import {useRouter} from "next/router";

const Verification: NextPage = () => {

    const router = useRouter();

    const [telephone, setTelephone] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [location, setLocation] = useState<string>("");

    const {company_id} = router.query;

    const parsed_id: number = typeof company_id === "string" ? parseInt(company_id) : 0

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("submitting verification request");

        await fetch("https://coghacks-2021.vercel.app/api/verification").then((result) => {
            console.log(`result: ${result}`)
        }).catch((error) => {
            console.log(`error: ${error}`)
        })

    }

    return (
        <div className={"main"}>
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