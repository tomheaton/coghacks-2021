import styles from "../styles/Footer.module.css";
import Image from "next/image";

const Footer = () => {

    return (
        <footer className={styles.footerContainer}>

            <div className={styles.grid}>
                <div className={styles.card}>
                    <h2>Lana</h2>
                    <Image src={"/default.png"} alt="Vercel Logo" width={128} height={128} />
                </div>
                <div className={styles.card}>
                    <h2>heading 2</h2>
                    <p>lololol 2</p>
                </div>
                <div className={styles.card}>
                    <h2>heading 3</h2>
                    <p>lololol 3</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
