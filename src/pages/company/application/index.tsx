import {GetServerSideProps, NextPage} from "next";
import prisma from "../../../lib/prisma";
import type {Company} from "@prisma/client";
import PostingCard from "../../../components/PostingCard";
import CompanyCard from "../../../components/CompanyCard";

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

const Application: NextPage<Props> = (props) => {

    return (
        <div>
            <h1>
                Company
            </h1>
            {props.data && props.data.length > 0 ? (
                <>
                    <ul>
                        {props.data.map((company, index) => {
                            return (
                                <li key={index} id={`${index}`}>
                                    <CompanyCard company={company}/>
                                </li>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <>
                    <p>no companies found</p>
                </>
            )}
        </div>
    );
}

export default Application;