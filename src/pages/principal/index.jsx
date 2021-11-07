import styles from "./styles.module.css"

export default function PagePrincipal() {
    return (
        <> 
            <head>
                <title>CAMPOOL</title>  
            </head>
            <div classname={styles.dashboard}>
                <ul>
                    <li className={styles.list} >
                        <a href="">RANKING MVP</a>
                        <a href="">RANKING TIME</a>
                        <a href="">FREE AGENTS</a>
                        <a href="">SCRIMS</a>
                        <a href="">SOBRE</a>
                    </li>
                </ul>
            </div>

            <div className={styles.container}>
                <div className={styles.title}>
                    <h1>CAMPEONATOS</h1>
                </div>

                <div className={styles.rankcontent}>
                    <div className={styles.titlerank}>
                        <h2>RANKING MVP</h2>
                        <p>A contagem de pontuação dos jogadores <br/> é realizada a partir do seu PMC(AVR), <br/> pontuação média de combate por partida.</p>
                    </div>
                    <div className={styles.rankmvp}>
                        <div className={styles.infos}>
                            <h3>POSIÇÃO</h3>
                            <h3 className={styles.titlenameplayer}>NOME</h3>
                            <h3>PONTUAÇÃO</h3>
                        </div>
                        <div className={styles.posplayers}>
                            <h3>1</h3>
                            <h3>2</h3>
                            <h3>3</h3>
                            <h3>4</h3>
                            <h3>5</h3>
                        </div>
                        <div className={styles.players}>
                            <h3>Player 1</h3>
                            <h3>Player 2</h3>
                            <h3>Player 3</h3>
                            <h3>Player 4</h3>
                            <h3>Player 5</h3>
                        </div>
                        <div className={styles.playerspoints}>
                            <h3>500</h3>
                            <h3>400</h3>
                            <h3>300</h3>
                            <h3>200</h3>
                            <h3>100</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}