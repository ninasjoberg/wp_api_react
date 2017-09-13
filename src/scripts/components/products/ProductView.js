import {Component} from 'react';
import DataStore from 'flux/stores/DataStore.js';
import Product from './Product.js';
import Products from './Products.js';
import styles from './ProductView.scss';


export default class ProductView extends Component{ 

    constructor(props){
        super()
        const item = this.getItemById(props.match.params.id);
        this.state = {
            picture: item.acf.product_picture.url,
            item: item
        }
    }

    activePicture = (event) => {
        this.setState({picture: event.target.src})
    }

     getItemById = (id) => {
        const productList = DataStore.getAllProducts();
        return productList.find((item) => {
            return item.id == id;
        });
    }

    render(){
        
        const item = this.getItemById(this.props.match.params.id);
        const pic = this.state.picture;

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
                        <img src={pic} alt="Product picture"/>
                    </div>
                    <div className={styles.smallpictures}>
                        <a href="#" className={styles.smallpicture} onClick={this.activePicture}>
                            <img src={item.acf.product_picture.url} alt="Product picture" name="product_picture" value="true"/>
                        </a> 
                        { item.acf.picture_two && <a href="#" className={styles.smallpicture} onClick={this.activePicture}>
                            <img src={item.acf.picture_two.url} alt="" name="picture_two"/> 
                        </a> }
                        { item.acf.picture_three && <a href="#" className={styles.smallpicture} onClick={this.activePicture}>
                            <img src={item.acf.picture_three.url} alt="" name="picture_three"/> 
                        </a> }
                        { item.acf.picture_four && <a href="#" className={styles.smallpicture} onClick={this.activePicture}>
                            <img src={item.acf.picture_four.url} alt="" name="picture_four"/> 
                        </a> }
                    </div> 
                </div>   
            </div>    
        )
    }
}