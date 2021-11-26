import {GetServerSideProps, NextPage} from "next";
import {Posting} from "@prisma/client";
import prisma from "../../lib/prisma";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {id} = context.query;

    const parsed_id: number = typeof id === "string" ? parseInt(id) : 0

    const data = await prisma.posting.findUnique({
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
    data: Posting | null
}

const PostingPage: NextPage<Props> = (props) => {

    if (props.data) {

        const {id, title, description} = props.data;

        return (
            <div>
                <h1>{title}</h1>
                <p>{description}</p>
            </div>
        );
    }

    return (
        <div>
            <h1>
                No posting found with that id!
            </h1>
        </div>
    );

}

export default PostingPage;