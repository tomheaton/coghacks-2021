import Document, {Head, Html, Main, NextScript} from 'next/document';

class MyDocument extends Document {

    render() {

        return (
            <Html lang={"en"}>
                <Head>
                    <link rel="icon" href="/favicon.ico"/>
                    <link rel="canonical" href="https://coghacks-2021.vercel.app"/>
                    <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>
                    <link rel="manifest" href="/manifest.json"/>

                    <meta charSet="utf-8" />
                    {/*<meta name="viewport" content="width=device-width, initial-scale=1"/>*/}
                    <meta name="description" content="Lana - A place to find where you belong."/>
                    <meta name="keywords" content="Job, Jobs, Work, Employer, Employment, Employee, Application"/>

                    {/*<title>Lana</title>*/}
                </Head>
                <body>
                    <Main/>
                    <NextScript/>
                </body>
            </Html>
        );
    }
}

export default MyDocument;