import DataStore from 'flux/stores/DataStore.js';
import styles from './home.scss';


class Home extends React.Component {
    render() {
       let pageData = DataStore.getPageBySlug('home');
       console.log(pageData);
      
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
}

export default Home;
