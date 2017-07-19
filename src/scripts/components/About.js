import DataStore from 'flux/stores/DataStore.js'

class About extends React.Component {
    render() {
        //let pageData = DataStore.getPageBySlug('about');
        let page = DataStore.getPageBySlug('about');
        return (
            <div>
                <h1>{page.title.render}</h1>
            </div>
            /*<div>
                <h2>About page template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>*/
        );
    }
}

export default About;
