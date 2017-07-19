import DataStore from 'flux/stores/DataStore.js'

class Home extends React.Component {
    render() {
       // let pageData = DataStore.getPageBySlug('home');
       let allData = DataStore.getAll();
       console.log(allData);
        return (
            <div>
                <h2>Hello world!</h2>
                <p> This is ninas page</p>
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
