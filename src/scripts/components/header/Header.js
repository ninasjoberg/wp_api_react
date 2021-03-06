import { NavLink } from 'react-router-dom'
import DataStore from 'flux/stores/DataStore.js'
import styles from './Header.scss';
import mainStyle from '../main.scss';


export default function Header() {   
   
    let allPages = DataStore.getAllPages();
    allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

    return (
        <div className={styles.root}>
            <NavLink className={styles.menu} to="/">HOME</NavLink>

            {allPages.map((page) => {
                if(page.slug != 'home'){
                    return(
                        <NavLink className={styles.menu} activeClassName={styles.active} key={page.id} to={`/${page.slug}`}>
                            {page.title.rendered.toUpperCase()}
                        </NavLink>
                    )                     
                }
            })}
        </div>
    );
}

