import DataStore from 'flux/stores/DataStore.js';
import styles from './contact.scss';
import Contacticon from './Contacticon.js';
import classnames from 'classnames';


class Contact extends React.Component {

    renderContactInfo(contactInfoList){  //innuti en class skrivs inte order "function" ut före en funktiion
        const contactList = [];
        for(let prop in contactInfoList){
            contactList.push(<Contacticon name={prop} key={prop}/>); //här anropas Contacticon componenten och ger den this.props (name) (key)
        } 
        return contactList;  
    }

    render() {
        let pageData = DataStore.getPageBySlug('contact');
        let contactInfoList = pageData.acf;

        return ( //här skrivs inga semikolon ut
            <div className={styles.root}>  
                <div className={styles.contactbox}>
                    <div dangerouslySetInnerHTML={{__html: pageData.acf.contact_heading}} className={styles.text}/>
                    <div dangerouslySetInnerHTML={{__html: pageData.acf.contact_text}} className={styles.text}/>
                    <div className={styles.icons}>
                        {this.renderContactInfo(contactInfoList)}
                    </div>    
                </div>      
            </div>
        );
    }
}

export default Contact;
