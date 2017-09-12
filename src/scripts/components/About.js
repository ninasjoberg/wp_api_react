import DataStore from 'flux/stores/DataStore.js';
import styles from './about.scss';

class About extends React.Component {
    render() {
        //let pageData = DataStore.getPageBySlug('about');
        let pageData = DataStore.getPageBySlug('about');
        console.log(pageData);
        return (
            <div className={styles.root}>
                <div className={styles.meinfo}>
                    <h1>{pageData.acf.heading}</h1>
                    <div className={styles.abouttext} dangerouslySetInnerHTML={{__html: pageData.acf.about_text}}/>
                </div>
                <div className={styles.meimg}>
                    <img className={styles.aboutimg} src={pageData.acf.picture.url} alt=""/>
                </div>
            </div>
           
        );
    }
}

export default About;
