import {GetServerSideProps, NextPage} from "next";
import prisma from "../../lib/prisma";
import type {Company} from "@prisma/client";
import CompanyCard from "../../components/CompanyCard";
import {useState} from "react";
import Head from "next/head";
import styles from "../../styles/Index.module.css";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await prisma.company.findMany();

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Company[] | null
}

const Company: NextPage<Props> = (props) => {

    const [search, setSearch] = useState<string>("");

    return (
        <div className={"main"}>

            <Head>
                <title>Company | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h1>
                Company
            </h1>
            <input placeholder={"Search for a company..."} onChange={(e) => {setSearch(e.target.value.toLowerCase())}}/>
            <br/>
            {props.data && props.data.length > 0 ? (
                <>
                    {/*<ul>
                        {props.data.filter((result) => result.name.toLowerCase().includes(search)).map((company, index) => {
                            return (
                                <li key={index} id={`${index}`}>
                                    <CompanyCard company={company}/>
                                </li>
                            );
                        })}
                    </ul>*/}
                    <div className={styles.grid}>
                        {props.data.filter((result) => result.name.toLowerCase().includes(search)).map((company, index) => {
                            return (
                                <CompanyCard key={index} company={company}/>
                            );
                        })}
                    </div>
                </>
            ) : (
                <>
                    <p>no companies found</p>
                </>
            )}
        </div>
    );
}

export default Company;