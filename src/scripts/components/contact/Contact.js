import DataStore from 'flux/stores/DataStore.js';
import styles from './contact.scss';
import Contacticon from './Contacticon.js';
import ContactForm from './ContactForm.js';


function renderContactInfo(contactInfoList){  
    const contactList = [];
    for(let prop in contactInfoList){
        contactList.push(<Contacticon name={prop} link={contactInfoList[prop]} key={prop}/>); //här anropas Contacticon componenten och ger den this.props (name) (key)
    } 
    return contactList;  
}


export default function Contact() { 

    let pageData = DataStore.getPageBySlug('contact');
    let contactInfoList = pageData.acf;

    return ( 
        <div className={styles.root}>  
            <div className={styles.contactbox}>
                <div className={styles.info}>
                    <div dangerouslySetInnerHTML={{__html: pageData.acf.contact_heading}} className={styles.heading}/>
                    <div dangerouslySetInnerHTML={{__html: pageData.acf.contact_text}} className={styles.text}/>
                </div>
                <div className={styles.mail}>
                    <ContactForm email={contactInfoList.email}/>
                </div>   
            </div>    
                <div className={styles.contactbar}>
                    <div className={styles.address}>
                    <p>Besöksadress:</p>
                    <p>{contactInfoList.location}</p>
                    </div>
                    <div className={styles.contacticons}>
                    {renderContactInfo(contactInfoList)}
                </div>
                </div>   
        </div>
    );
}


