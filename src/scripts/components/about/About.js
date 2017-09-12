import DataStore from 'flux/stores/DataStore.js';
import styles from './About.scss';

export default function About() {
   
    let pageData = DataStore.getPageBySlug('about');

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
