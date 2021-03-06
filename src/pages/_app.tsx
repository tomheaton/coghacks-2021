import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';
import type {AppProps} from 'next/app';
import Layout from "../components/Layout";
import {UserProvider} from '@auth0/nextjs-auth0';

const MyApp = ({ Component, pageProps }: AppProps) => {

    return (
        <UserProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </UserProvider>
    );
}

export default MyApp;
