import styles from "./styles.module.scss"

export default function PagePrincipal() {
    return (
        <> 
            <head>
                <title>CAMPOOL</title>  
            </head>

            <div className={styles.content}>
                <h1 className={styles.titulo}>RANK MVP</h1>
                <div className={styles.boxPrinc}>
                    <div className={styles.boxOver}>
                        <div className={styles.infoBox}>
                            <h1>Player 1</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}