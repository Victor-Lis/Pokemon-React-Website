import { Link } from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){

    return(

        <nav className={styles.nav}>

            <div className={styles.links_area}>

                <Link to='/'> Home </Link> 
                <Link to='/categorys'> Categorias </Link> 

            </div>

            <div className={styles.inputs_area}> <input placeholder='Procure aqui!'/> <button> Buscar </button> </div>

        </nav>

    )

}

export default Navbar