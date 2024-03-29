   



// import styles from'./Header.module.css';

import styles from './arquivocss/Header.module.css'


export function Header() {

    return(

            <div className={styles.navMenu}>
                <ul className={styles.menu} >
                  <li><a href="/"  >Home</a></li>
                  <li><a href="./Missao"  >Missão</a></li>
                  {/* <li> <Link to ='./Missao'> Missão </Link> </li> */}
                  <li><a href="./Produtos"  >Produtos</a></li>
                  <li><a href="./NossaHistoria"  >Nossa Historia</a></li>
                  <li><a href="./Contato"  >Contato</a></li>
                  
                </ul>
    
        </div>
        )
       
}