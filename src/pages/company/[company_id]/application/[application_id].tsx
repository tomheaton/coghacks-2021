import {GetServerSideProps, NextPage} from "next";
import {Application} from "@prisma/client";
import prisma from "../../../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {application_id} = context.query;

    const parsed_id: number = typeof application_id === "string" ? parseInt(application_id) : 0

    const data = await prisma.application.findUnique({
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
    data: Application | null
}

const ApplicationPage: NextPage<Props> = (props) => {

    if (props.data) {

        const {id} = props.data;

        return (
            <div>
                <h1>
                    ID: {id}
                </h1>
            </div>
        );
    }

    return (
        <div>
            <h1>
                No application found with that id!
            </h1>
        </div>
    );

}

export default ApplicationPage;