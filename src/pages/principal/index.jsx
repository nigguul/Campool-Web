import styles from "./styles.module.scss"

export default function PagePrincipal() {
    return (
        <> 
            <head>
                <title>CAMPOOL</title>  
            </head>

            <header className={styles.header}>

                <div className={styles.leftInfo}>
                    <img className={styles.mainImg} src="logoCampool.svg" alt="logo"/>
                    <span className={styles.spacer}></span>
                    <h1>CAMPOOL</h1>
                </div>

                <div className={styles.infos}>
                    <div className={styles.infoMVP}>
                        <img src="iconRank.svg" alt="iconrank" />
                        <span>RANKING MVP</span>
                    </div>

                    <div className={styles.infoTIMES}>
                        <img src="iconRankTeam.svg" alt="iconteam" />
                        <span>RANKING TIMES</span>
                    </div>

                    <h2>SCRIMS</h2>
                    <h2>FREE AGENTS</h2>
                </div>

                <div className={styles.User}>
                    <img className={styles.exitImg} src="exit.svg" alt="sair" />
                </div>
            </header>

            <div>
                <div className={styles.boxCamps}>
                    <h1>CAMPEONATOS</h1>
                </div>
            </div>
        </>
    )
}