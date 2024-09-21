import styles from "./home.module.scss"
import Image from 'next/image'
import Logotype from '../assets/Logotype.png'
import Logomark from '../assets/Logomark.png'

export default function Home() {
    return (
        <div className={styles.global}>
            <header className={styles.header}>
                <ul className={styles.list}>
                    <li className={styles.liOne}>
                        <div>
                            <Image
                                src={Logomark}
                                width={33}
                                height={33}
                                alt="Legaplan"
                            />
                        </div>
                        <div className={styles.divLogotype}>
                            <Image
                                src={Logotype}
                                width={106}
                                height={15}
                                alt="Legaplan"
                            />
                        </div>
                    </li>
                    <li className={styles.liDuo}>Bem-vindo de volta, Marcus</li>
                    <li className={styles.liThree}>Segunda, 01 de dezembro de 2025</li>
                </ul>
            </header>
        </div>
    );
}