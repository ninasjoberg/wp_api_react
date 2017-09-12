import DataStore from 'flux/stores/DataStore.js';
import styles from './contactForm.scss';


export default function ContactForm (props){
 console.log(props.email);

    return (
        <div className={styles.root}>
            <h2>Maila mig:</h2>
            <label for="namn"> Fyll i ditt namn:</label>
            <input className={styles.inputfiled} type="text" name="namn" id="namn"/>
            <br/>
            <label for="epost">E-postadress:</label>
            <input className={styles.inputfiled} type="email" name="email" required="required" id="epost"/>
            <br/>
            <label for="meddelande">meddelande:</label>
            <textarea className={styles.inputfiled} name="textarea" id="meddelande"></textarea>
            <br/>
            <input className={styles.sendbutton} type="submit" class="skicka" value="Skicka!"/> 
        </div>
    )
}
