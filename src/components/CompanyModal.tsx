import {useEffect, useState} from "react";
import styles from "../styles/Modal.module.css"

const Modal = ({title, show, children}: {title: string, show: boolean, children: any}) => {

    const [visible, setVisible] = useState<boolean>(false);

    useEffect(() => {
        console.log("hey")
        if (show) {
            setVisible(true)
        }
    }, [show]);

    if (visible) {
        return (
            <div className={styles.container}>
                <h1>{title}</h1>
                {children}
            </div>
        );
    }

    return (
        <></>
    )
}

export default Modal;