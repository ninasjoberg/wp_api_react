import DataStore from 'flux/stores/DataStore.js';
import Product from './Product';
import styles from './products.scss';


class Products extends React.Component {
    render() {
    
        let productList = DataStore.getAllProducts();
        console.log(productList);
        return (
            <div className={styles.root}>
                <ul className={styles.products}>
                    { productList.map (function(p,i){
                        return (
                            <li className={styles.product}>
                                <Product 
                                    image={p.acf.product_picture}
                                    description={p.acf.product_description}
                                    title={p.title.rendered}
                                    key={i}>
                                </Product>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default Products;