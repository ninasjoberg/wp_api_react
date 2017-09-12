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
                <div className={styles.info}>
                    <h2> {item.title.rendered}</h2>
                    <hr/>
                    <div className={styles.text}>
                        <p className={styles.description}> {item.acf.product_description} </p>
                        { item.acf.product_measurments && <div dangerouslySetInnerHTML={{__html:item.acf.product_measurments}} />}
                        { item.acf.additional_info && <p> {item.acf.additional_info} </p>}
                    </div>
                </div>
                <div className={styles.productPictures}>
                    <div className={styles.picture}>
                        <img src={item.acf.product_picture.url} alt="Product picture"/>
                    </div>
                    <div className={styles.smallpictures}>
                        <a href="#" className={styles.smallpicture} onClick={this.active}>
                            <img src={item.acf.product_picture.url} alt="Product picture"/>
                        </a> 
                        { item.acf.picture_two && <a href="#" className={styles.smallpicture}>
                            <img src={item.acf.picture_two.url} alt=""/> 
                        </a> }
                        { item.acf.picture_three && <a href="#" className={styles.smallpicture}>
                            { item.acf.picture_three && <img src={item.acf.picture_three.url} alt=""/> }
                        </a> }
                        { item.acf.picture_four && <a href="#" className={styles.smallpicture}>
                            { item.acf.picture_four && <img src={item.acf.picture_four.url} alt=""/> }
                        </a> }
                    </div> 
                </div>   
            </div>    
        )
    }
})