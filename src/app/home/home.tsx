import styles from "./home.module.scss"
import Image from 'next/image'
import Logotype from '../assets/Logotype.png'
import Logomark from '../assets/Logomark.png'
import trash from '../assets/trash.png'
import Checkbox from '../assets/Checkbox.png'

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
            <section className={styles.tarefas}>
                <span className={styles.text}>Suas tarefas de hoje</span>
                <div>
                    <div className={styles.frame2}>
                        <div className={styles.group6}>

                            <Image
                                src={Checkbox}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <Image 
                                className={styles.trash}
                                src={trash}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <span className={styles.txtGroup6}>Lavar as mãos</span>
                        </div>
                    </div>

                    <div className={styles.frame3}>
                        <div className={styles.group5}>

                            <Image
                                src={Checkbox}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <Image 
                                className={styles.trash}
                                src={trash}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <span className={styles.txtGroup5}>Fazer um bolo</span>
                        </div>
                    </div>

                    <div className={styles.frame5}>
                        <div className={styles.group4}>

                            <Image
                                src={Checkbox}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <Image 
                                className={styles.trash}
                                src={trash}
                                width={24}
                                height={24}
                                alt="trash"
                            />

                            <span className={styles.txtGroup4}>Lavar a louça</span>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}