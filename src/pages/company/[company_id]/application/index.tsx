import {GetServerSideProps, NextPage} from "next";
import prisma from "../../../../lib/prisma";
import type {Application} from "@prisma/client";
import ApplicationCard from "../../../../components/ApplicationCard";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const data = await prisma.application.findMany();

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Application[] | null
}

const Application: NextPage<Props> = (props) => {

    return (
        <div>
            <h1>
                Application
            </h1>
            {props.data && props.data.length > 0 ? (
                <>
                    <ul>
                        {props.data.map((application, index) => {
                            return (
                                <li key={index} id={`${index}`}>
                                    <ApplicationCard application={application}/>
                                </li>
                            );
                        })}
                    </ul>
                </>
            ) : (
                <>
                    <p>no applications found</p>
                </>
            )}
        </div>
    );
}

export default Application;