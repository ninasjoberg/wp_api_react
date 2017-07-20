import DataStore from 'flux/stores/DataStore.js'
import Product from './Product';

class Products extends React.Component {
    render() {
    
        let productList = DataStore.getAllProducts();
        console.log(productList);
        return (
            <div>
                <h1> THis is the product page!</h1>
                <ul>
                    { productList.map (function(p){
                        return (
                            <li>
                                <Product 
                                    image={p.acf.product_picture}
                                    description={p.acf.product_description}
                                    title={p.title.rendered}>
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