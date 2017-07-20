import DataStore from 'flux/stores/DataStore.js';
import Products from './Products';

class Home extends React.Component {
    render() {
       // let pageData = DataStore.getPageBySlug('home');
       let allData = DataStore.getAll();
       console.log(allData);
       const productList = [
           {
               name: 'ring',
               price: 200
           },
            {
               name: 'halsband',
               price: 500
           }
       ]
        return (
            <div>
                <h2>Hello world!</h2>
                <p> This is ninas page</p>
                { productList.map (function(p){
                    return  <Products name={ p.name } price={ p.price }></Products>
                })}
               
            </div>    
            /*<div>
                <p>hello world</p>
                <h2>Homepage template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>*/
        );
    }
}

export default Home;
