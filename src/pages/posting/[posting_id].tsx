import {GetServerSideProps, NextPage} from "next";
import type {Posting, Company} from "@prisma/client";
import prisma from "../../lib/prisma";
import Modal from "../../components/Modal";
import {useState} from "react";
import Webcam from "react-webcam";
import ApplicationModal from "../../components/ApplicationModal";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {posting_id} = context.query;

    const parsed_id: number = typeof posting_id === "string" ? parseInt(posting_id) : 0

    const data = await prisma.posting.findUnique({
        where: {
            id: parsed_id
        },
        include: {
            author: true
        }
    });

    return {
        props: {
            data
        }
    };
}

type Props = {
    data: Posting & {author: Company} | null
}

const PostingPage: NextPage<Props> = (props) => {

    const [showModal, setShowModal] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");
    const [loading, setLoading] = useState<boolean>(false);

    const handleClick = async (e: any) => {
        e.preventDefault();
        setShowModal(true);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("close");
        // FIXME: modal not hiding
        setShowModal(false);
    }

    if (props.data) {

        const {id, title, description, author} = props.data;

        return (
            <div className={"main"}>
                <h1>{title}</h1>
                <p>Description: {description}</p>
                <p>Posting ID: {id}</p>
                <p>Company: <a href={`/company/${author.id}`}>{author.name}</a></p>
                <button className={"btn"} onClick={handleClick}>
                    Apply
                </button>
                {showModal && (
                    <ApplicationModal title={"Answer the question below"} show={showModal}>
                        <p>Why do you want to apply for this position at our company?</p>
                        <Webcam/>
                        <button className={"btn"} onClick={handleSubmit}>Submit</button>
                    </ApplicationModal>
                )}
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