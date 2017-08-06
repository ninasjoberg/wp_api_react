import DataStore from 'flux/stores/DataStore.js';
import styles from './about.scss';

class About extends React.Component {
    render() {
        //let pageData = DataStore.getPageBySlug('about');
        let pageData = DataStore.getPageBySlug('about');
        console.log(pageData);
        return (
            <div className={styles.root}>
                <h1>{pageData.acf.heading}</h1>
                <div className={styles.abouttext} dangerouslySetInnerHTML={{__html: pageData.acf.about_text}}/>
                <img className={styles.aboutimg} src={pageData.acf.picture.url} alt=""/>
            </div>
           
        );
    }
}

export default About;
