import DataStore from 'flux/stores/DataStore.js';
import styles from './contactForm.scss';


export default function ContactForm (props){

    return (
        <div className={styles.root}>
            <h2>Maila mig:</h2>
            <label> Fyll i ditt namn:</label>
            <input className={styles.inputfiled} type="text" name="namn" id="namn"/>
            <br/>
            <label>E-postadress:</label>
            <input className={styles.inputfiled} type="email" name="email" required="required" id="epost"/>
            <br/>
            <label>meddelande:</label>
            <textarea className={styles.inputfiled} name="textarea" id="meddelande"></textarea>
            <br/>
            <input className={styles.sendbutton} type="submit" value="Skicka!"/> 
        </div>
    )
}
