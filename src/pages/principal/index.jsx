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
                    <img src="iconRank.svg" alt="iconrank" />
                    <h2>RANKING MVP</h2>
                    <img className={styles.imgRankTeam} src="iconRankTeam.svg" alt="iconrankteam" />
                    <h2>RANKING TIMES</h2>
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