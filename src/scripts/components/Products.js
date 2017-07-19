import DataStore from 'flux/stores/DataStore.js'

class Products extends React.Component {
    render() {
        let page = DataStore.getPageBySlug('my_product');
        let acf = page.acf; // Advanced Custom Fields data
    return (
        <div>
            <h1>{acf.yourCustomFieldName}</h1>
        </div>
            /*
             <div>
                <h2>Products</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.content.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>
            */
        );
    }
}

export default Products;