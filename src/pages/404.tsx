import {NextPage} from "next";
import {Image} from "react-bootstrap";
import Head from "next/head";

const Error404: NextPage = () => {

    return (
        <div className={"main"}>

            <Head>
                <title>404 | Lana</title>
                <meta name="description" content="Lana - A place to find where you belong." />
                <link rel="icon" href={"/favicon.ico"} />
            </Head>

            <h2>404</h2>
            <p>Oops! This page does not exist.</p>
            <Image src={"/default.png"} height={64} width={64}/>
        </div>
    );
}

export default Error404;