import DataStore from 'flux/stores/DataStore.js'

class Contact extends React.Component {
    render() {
        let pageData = DataStore.getPageBySlug('contact');

        return (
            <div>  
                <p>{pageData.content.rendered}</p>
            </div>
            /*
            <div>
                <h2>Contact page template</h2>
                <h1>{pageData.title.rendered}</h1>

                <div dangerouslySetInnerHTML={{__html: pageData.excerpt.rendered}} />
                <div>{pageData.acf.text}</div>
            </div>
            */
        );
    }
}

export default Contact;
