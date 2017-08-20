import axios from 'axios'; //used for talking to the API, in this case wordpress-api
import alt   from 'flux/alt/alt.js';

class DataActions {

    constructor() {
        const appUrl = 'http://localhost:8888/wordpress-api/'; // Wordpress installation url

        this.pagesEndPoint = `${appUrl}/wp-json/wp/v2/pages`; // Endpoint for getting Wordpress Pages
        this.postsEndPoint = `${appUrl}/wp-json/wp/v2/posts`; // Endpoint for getting Wordpress Posts
        this.productsEndPoint = `${appUrl}/wp-json/wp/v2/my_products`; // Endpoint for getting Wordpress custom post type 'my_products'
        this.singleProductEndPoint = `${appUrl}/wp-json/wp/v2/my_products/:id`;
    }

    // Method for getting data from the provided end point url with axios
    api(endPoint) {
        return new Promise((resolve, reject) => {
            axios.get(endPoint).then((response) => {
                resolve(response.data);
            }).catch((error) => {
                reject(error);
            }); 
        });     
    }

    // Method for getting Pages data
    getPages(cb){
        this.api(this.pagesEndPoint).then((response)=>{
            this.getProducts(response, cb)
        });
        return true;
    }

    // Method for getting products data
    getProducts(pages, cb){
        this.api(this.productsEndPoint).then((response)=>{
            const products  = response
            const payload   = { pages, products };
            //this.getSuccess(response); // Pass returned data to the store
            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
           
        });
        return true;
    }

//denna används inte just nu: 
    // Method for getting a specific product by id
    getSingleProduct(cb){
        this.api(this.singleProductEndPoint).then((response)=>{
            this.getSuccess(response); // Pass returned data to the store
        });
        return true;
    }
/*
    // Method for getting Posts data
    getPosts(pages, cb){
        this.api(this.postsEndPoint).then((response)=>{
            const posts     = response
            const payload   = { pages, posts };

            this.getSuccess(payload); // Pass returned data to the store
            cb(payload); // This callback will be used for dynamic rout building
        });
        return true;
    }
*/
  

    // This returnes an object with Pages and Posts data together
    // The Alt Store will listen for this method to fire and will store the returned data
    getSuccess(payload){
        return payload;
    }
}

export default alt.createActions(DataActions);