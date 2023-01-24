import styles from './Home.module.css'
import poupanca from '../../img/poupanca.svg'

import LinkButton from '../layouts/LinkButton'

function Home () {
    return (
        <section className={styles.home_container}>
            <h1>Bem-vindo ao <span>Costs</span></h1>
            <p>Comece a gerenciar os seus projetos agora mesmo!</p>
            <LinkButton to="/newproject" text="criar Projeto"/>
            <img src={poupanca} alt="Costs" text="Criar Projeto" />
        </section>
    )
}

export default Home