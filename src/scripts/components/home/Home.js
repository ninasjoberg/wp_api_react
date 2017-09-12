import DataStore from 'flux/stores/DataStore.js';
import styles from './Home.scss';

export default function Home (){

    let pageData = DataStore.getPageBySlug('home');
    
    return (
        <div className={styles.root}>
            <div className={styles.imgbox}>
                <img src={pageData.acf.frontpage_image.url} alt=""/>
            </div>
            <div className={styles.textbox}>
                <h1 className={styles.heading}>{pageData.acf.company_name}</h1>
                <div dangerouslySetInnerHTML={{__html: pageData.acf.frontpage_text}} className={styles.text}/>
            </div>
        </div>    
    );
}


