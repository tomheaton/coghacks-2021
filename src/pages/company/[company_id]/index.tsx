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
            <div className={"main"}>
                <div>
                    <h1>
                        {name}{" "}
                        {verified && (<i className="bi bi-patch-check-fill"/>)}
                    </h1>
                    <p>Location: {location}</p>
                    <p>Contact Email: {email}</p>
                    <p>SIC: {sic}</p>
                </div>
                <div className={"buttonList"}>
                    <button className={"btn"} onClick={() => {
                        router.push(`/company/${router.query.company_id}/application`)}
                    }>View Applications</button>

                    {!verified && (
                        <button className={"btn"} onClick={() => {router.push(`/company/${router.query.company_id}/verification`)}}>
                            Get Verified
                        </button>
                    )}

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