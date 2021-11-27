import {GetServerSideProps, NextPage} from "next";
import {Posting} from "@prisma/client";
import prisma from "../../lib/prisma";
import Modal from "../../components/Modal";
import {useState} from "react";
import Webcam from "react-webcam";
import QuestionBox from "../../components/QuestionBox";
import {questions} from "../../data/questions";

export const getServerSideProps: GetServerSideProps = async (context) => {

    const {posting_id} = context.query;

    const parsed_id: number = typeof posting_id === "string" ? parseInt(posting_id) : 0

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

    const [showModal, setShowModal] = useState<boolean>(false);
    const [answer, setAnswer] = useState<string>("");

    const handleClick = async (e: any) => {
        e.preventDefault();
        setShowModal(true);
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("submit");
        // FIXME: modal not hiding
        setShowModal(false);
    }

    if (props.data) {

        const {id, title, description} = props.data;

        return (
            <div className={"main"}>
                <h1>{title}</h1>
                <p>{description}</p>
                <QuestionBox questions={questions} />
                <button onClick={handleClick}>
                    apply
                </button>
                <Modal title={"the title"} show={showModal}>
                    <p>Why do you want to apply for this position at our company?</p>
                    {/*<textarea onChange={(e) => {setAnswer(e.target.value)}}
                              rows={4}
                    />*/}
                    <Webcam/>
                    <button className={"btn"} type={"submit"} onClick={handleSubmit}>Submit</button>
                </Modal>
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