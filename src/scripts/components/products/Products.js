import {link} from 'react-router';
import DataStore from 'flux/stores/DataStore.js';
import Product from './Product';
import styles from './Products.scss';


export default function Products(){

    let productList = DataStore.getAllProducts();
    
    return (
        <div className={styles.root}>
            <ul className={styles.products}>
                { productList.map (function(p,i){
                    return (
                        <li className={styles.product}>
                            <Product 
                                image={p.acf.product_picture}
                                title={p.title.rendered}
                                id={p.id}
                                key={i}>
                            </Product>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}



