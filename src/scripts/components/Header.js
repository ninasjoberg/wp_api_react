import {Link} from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js'
import styles from './header.scss';
import mainStyle from './main.scss';



class Header extends React.Component {   
   
    render() {
        let allPages = DataStore.getAllPages();
        allPages = _.sortBy(allPages, [function(page) { return page.menu_order; }]); // Sort pages by order

        return (
            <div className={styles.root}>
                <Link className={styles.menu} to="/">Home</Link>

                {allPages.map((page) => {
                    if(page.slug != 'home'){
                       return(
                            <Link className={styles.menu} key={page.id} to={`/${page.slug}`}>
                                {page.title.rendered}
                            </Link>
                        )                     
                   }
                })}
            </div>
        );
    }
}

export default Header;