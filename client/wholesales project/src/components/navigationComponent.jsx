import styles from '../components/Navigation.module.css'

function Navigation (){
    return(
        <div className={styles.navigation}>
            <div className={styles.logo}>
                <img src="https://w7.pngwing.com/pngs/450/256/png-transparent-bakery-logo-thumbnail.png"></img>
            </div>
            <div className={styles.siteNav}>
                <ul>
                    <li><a href="/aboutUs">За нас</a></li>
                    <li><a href="/products">Продукти</a></li>
                    <li><a href="/contacts">Контакти</a></li>
                    
                </ul>
            </div>
        </div>

    )
}
export default Navigation;