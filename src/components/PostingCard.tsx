import type {Posting} from "@prisma/client";
import {useRouter} from "next/router";
import styles from "../styles/Card.module.css";

const PostingCard = ({posting}: {posting: Posting}) => {

    const router = useRouter();

    const handleClick = async (e: any) => {
        e.preventDefault()
        await router.push(
            `/posting/${posting.id}`
        )
    }

    return (
        <div onClick={handleClick} className={styles.card}>
            <h1>{posting.title}</h1>
            <p>{posting.description}</p>
        </div>
    );
}

export default PostingCard