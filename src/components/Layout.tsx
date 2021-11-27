import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}: { children: any }) => {

    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
