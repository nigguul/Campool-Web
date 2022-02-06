import { useEffect, useRef, useState } from "react"
import styles from "../styles/Home.module.scss"
import Link from 'next/link'

class Particles {
    #particles;

    constructor(box) {
        this.#particles = [];
        this.onUpdate = undefined;

        this.h = box.getBoundingClientRect().height;
        this.w = box.getBoundingClientRect().width;

        this.gap = this.h * 0.15;

        this.create();

        this.updateID = requestAnimationFrame(this.update.bind(this));
    }

    create() {
        let particle = {};

        particle.size = Math.round(Math.random() * (this.w * 0.12 - this.w * 0.1) + this.w * 0.1);
        particle.x = Math.round(Math.random() * (this.w - particle.size));
        particle.offset = 0;
        particle.opacity = 1;
        
        if (particle.x < this.w / 2) {
            particle.type = 1;
        } else {
            particle.type = 0;
        }

        this.#particles.push(particle);
    }

    update() {
        this.#particles.map((particle, index) => {
            particle.offset += 1;
            particle.opacity = 1 - (particle.offset / this.h);

            if (particle.offset > this.h) this.#particles.splice(0, 1);
            if (index == this.#particles.length - 1 && particle.offset >= this.gap) this.create();
        })

        if (this.onUpdate != undefined) this.onUpdate(this.#particles);

        this.updateID = requestAnimationFrame(this.update.bind(this))
    }

    destroy() {
        cancelAnimationFrame(this.updateID);
    }
}

export default function Home() {
    let [effect, setEffect] = useState(undefined);
    let [particles, setParticles] = useState([]);

    let effectBox = useRef();

    useEffect(() => {
        if (effect == undefined) return;
        
        effect.onUpdate = (p) => {
            setParticles([...p]);
        }

        return () => {
            effect.onUpdate = undefined;
        }
    }, [effect]);

    useEffect(() => {
        if (effectBox != undefined) {
            setEffect(new Particles(effectBox.current));
        }
    }, [effectBox]);

    return (
        <div className={styles.home}>
            <div className={styles.logo}>
                <div className={styles.effectBox} ref={effectBox}>
                    {particles.map((particle, index) => {
                        return (
                            <span
                                className={styles.particle}
                                style={{
                                    bottom: particle.offset,
                                    left: particle.x,
                                    width: particle.size * 0.75,
                                    height: particle.size,
                                    opacity: particle.opacity
                                }}
                                key={`particle${index}`}
                                data-particle={particle.type}
                            />
                        )
                    })}
                </div>
                <img className={styles.cloud} src="logopart1.svg" alt="tribo1"/>
                <img className={styles.cloud} src="logopart2.svg" alt="tribo2"/>
                <img className={styles.mainImg} src="logoCampool.svg" alt="campool-logo"/>
                <span className={styles.neon}></span>
            </div>

            <div className={styles.title}>
                <div className={styles.content}>
                    <h1>CAMPOOL</h1>
                    <span className={styles.spacer}></span>
                    <h4>Libere sua energia em nosso campeonato</h4>
                    <Link href="/principal/" passHref>
                        <button className={styles.login} target="_blank">
                            <span>Portal</span>
                            <img src="imgLogin.svg" alt=""/>
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

