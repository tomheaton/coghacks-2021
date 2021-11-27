import type {Application} from "@prisma/client";
import {useRouter} from "next/router";
import styles from "../styles/Card.module.css";

const ApplicationCard = ({application}: {application: Application}) => {

    const router = useRouter();

    const handleClick = async (e: any) => {
        e.preventDefault()
        await router.push(
            `/application/${application.id}`
        )
    }

    return (
        <div onClick={handleClick} className={styles.card}>
            <h1>ID: {application.id}</h1>
            <p>Applicant ID: {application.applicantId}</p>
        </div>
    );
}

export default ApplicationCard;