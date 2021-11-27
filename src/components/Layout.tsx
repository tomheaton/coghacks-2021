import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = ({children}: { children: any }) => {

    return (
        <>
            <NavBar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default Layout;
