import React from 'react';
import DataStore from 'flux/stores/DataStore.js';
import Product from './Product.js';
import Products from './Products.js';
import styles from './productView.scss';




export default React.createClass({
    render(){
        let productList = DataStore.getAllProducts();

        function getItemById(id){
            return productList.find((item) => {
                return item.id == id;
            });
        }

        const item = getItemById(this.props.match.params.id);

        console.log(item);

        return(
            <div className={styles.root}>
                <h2> {item.title.rendered}</h2>
                <p className={styles.description}> {item.acf.product_description} </p>
                { item.acf.product_measurments && <div dangerouslySetInnerHTML={{__html:item.acf.product_measurments}} />}
                { item.acf.additional_info && <p> {item.acf.additional_info} </p>}

                <img className={styles.picture} src={item.acf.product_picture.url} alt="Product picture"/>
                <div className={styles.pictures}>
                    { item.acf.picture_two && <img className={styles.smallpicture} src={item.acf.picture_two.url} alt=""/> }
                    { item.acf.picture_three && <img className={styles.smallpicture} src={item.acf.picture_three.url} alt=""/> }
                    { item.acf.picture_four && <img className={styles.smallpicture} src={item.acf.picture_four.url} alt=""/> }
                </div>    
            </div>    
        )
    }
})