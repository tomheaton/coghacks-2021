import {GetServerSideProps, NextPage} from "next";
import {Company} from "@prisma/client";
import prisma from "../../lib/prisma";
import React from "react";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const parsed_id: number = typeof id === "string" ? parseInt(id) : 0

    const data = await prisma.company.findUnique({
        where: {
            id: parsed_id
        },
    });

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Company | null
}

//const CompanyPage: NextPage = (props: Props) => {
const CompanyPage: React.FC<Props> = (props) => {


    if (props.data) {
        return (
            <div>
                <h1>
                    Company: {props.data.name}
                </h1>
                <h2>
                    Data
                </h2>
                <p>
                    {props.data.toString()}
                </p>
            </div>
        );
    } else {
        return (
            <div>
                <h1>
                    No company found with that id!
                </h1>
            </div>
        );
    }

}

export default CompanyPage;