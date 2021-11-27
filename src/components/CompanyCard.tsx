import type {Company} from "@prisma/client";
import {useRouter} from "next/router";
import styles from "../styles/Card.module.css";

const CompanyCard = ({company}: {company: Company}) => {

    const router = useRouter();

    const handleClick = async (e: any) => {
        e.preventDefault()
        await router.push(
            `/company/${company.id}`
        )
    }

    return (
        <div onClick={handleClick} className={styles.card}>
            <h1>{company.name}</h1>
            <p>{company.location}</p>
        </div>
    );
}

export default CompanyCard;