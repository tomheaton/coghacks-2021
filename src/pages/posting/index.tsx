import {GetServerSideProps, NextPage} from "next";
import prisma from "../../lib/prisma";
import type {Posting, Company} from "@prisma/client";
import PostingCard from "../../components/PostingCard";
import {useState} from "react";
import Head from "next/head";
import styles from "../../styles/Index.module.css";
import CompanyCard from "../../components/CompanyCard";

export const getServerSideProps: GetServerSideProps = async (context) => {

    // @ts-ignore
    const data = await prisma.posting.findMany({
        include: {
            author: true
        }
    });

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Posting[] & {author: Company} | null
}

const Posting: NextPage<Props> = (props) => {

    const [search, setSearch] = useState<string>("");

    return (
        <div className={"main"}>

            <Head>
                <title>Posting | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h1>
                Posting
            </h1>
            <input placeholder={"Search for a posting..."} onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
            <br/>
            {props.data && props.data.length > 0 ? (
                <>
{/*                    <ul>
                        {props.data.filter((result) => result.title.toLowerCase().includes(search)).map((posting, index) => {                            return (
                                <li key={index} id={`${index}`}>
                                    <PostingCard posting={posting}/>
                                </li>
                            );
                        })}
                    </ul>*/}
                    <div className={styles.grid}>
                        {props.data.filter((result) => result.title.toLowerCase().includes(search)).map((posting, index) => {
                            return (
                                <PostingCard posting={posting}/>
                            );
                        })}
                    </div>
                </>
            ) : (
                <>
                    <p>no postings found</p>
                </>
            )}
        </div>
    );
}

export default Posting;