import {GetServerSideProps, NextPage} from "next";
import {Company} from "@prisma/client";
import prisma from "../../../lib/prisma";
import {useRouter} from "next/router";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {company_id} = context.query;

    const parsed_id: number = typeof company_id === "string" ? parseInt(company_id) : 0

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

const CompanyPage: NextPage<Props> = (props) => {

    const router = useRouter();

    if (props.data) {

        const {name, verified, location, email, sic} = props.data;

        return (
            <div>
                <div>
                    <h1>
                        Company: {name}
                        {verified && (<span>{" "}(verified)</span>)}
                    </h1>
                    <p>Location: {location}</p>
                    <p>Contact Email: {email}</p>
                    <p>SIC: {sic}</p>
                </div>
                <div>
                    <button className={"btn"} onClick={() => {router.push(`${router.pathname}/application`)}}>View Applications</button>
                </div>
            </div>
        );
    }

    return (
        <div>
            <h1>
                No company found with that id!
            </h1>
        </div>
    );

}

export default CompanyPage;