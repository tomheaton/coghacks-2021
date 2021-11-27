import {GetServerSideProps, NextPage} from "next";
import prisma from "../../lib/prisma";
import type {Posting} from "@prisma/client";
import PostingCard from "../../components/PostingCard";
import {useState} from "react";
import Head from "next/head";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await prisma.posting.findMany();

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Posting[] | null
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
            <input placeholder={"Search for a posting..."} onChange={(e) => {setSearch(e.target.value)}}/>
            {props.data && props.data.length > 0 ? (
                <>
                    <ul>
                        {props.data.filter((result) => result.title.toLowerCase().includes(search)).map((posting, index) => {                            return (
                                <li key={index} id={`${index}`}>
                                    <PostingCard posting={posting}/>
                                </li>
                            );
                        })}
                    </ul>
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