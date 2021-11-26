import {GetServerSideProps, NextPage} from "next";
import prisma from "../../lib/prisma";
import type {Posting} from "@prisma/client";

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

    return (
        <div>
            <h1>
                Posting
            </h1>
            {props.data ? (
                <>
                    <ul>
                        {props.data.map((posting, index) => {
                            return (
                                <li key={index} id={`${index}`}>
                                    {posting.title}
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