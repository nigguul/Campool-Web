import styles from "../styles/Home.module.css"

export default function Home() {
    return (
        <>
            <head>
                <title>CAMPOOL</title>
                <link rel="favicon.ico" href="favicon.ico"/>
            </head>
            <div className={styles.home}>
                <div className={styles.logo}>
                    <img className={styles.logopart1} src="logopart1.svg" alt="tribo1"/>
                    <img className={styles.logopart2} src="logopart2.svg" alt="tribo2"/>
                    <img className={styles.logoimg} src="logoCampool.svg" alt="campool-logo"/>
                </div>

                <div className={styles.title}>
                    <h1>CAMPOOL</h1>
                    <span className={styles.spacer}></span>
                    <h4>Libere sua energia em nosso campeonato</h4>
                    <button className={styles.login} href="" target="_blank">
                        <span>Portal</span>
                        <img src="imgLogin.svg" alt=""/>
                    </button>
                </div>
            </div>
        </>
    )
}

