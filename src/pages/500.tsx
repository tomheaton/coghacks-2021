import {Image} from "react-bootstrap";
import {NextPage} from "next";

const Error500: NextPage<{statusCode: number}> = ({statusCode}) => {

    return (
        <div className={"main"}>
            <p>
                {
                    statusCode
                        ? `An error ${statusCode} occurred on server`
                        : `An error occurred on client`
                }
            </p>
            <br/>
            <Image src={"/default.png"} height={512} width={512}/>
        </div>
    );
}

Error500.getInitialProps = ({ res, err }: any) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return {
        statusCode
    };
}

export default Error500;