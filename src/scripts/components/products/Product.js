import {Link} from 'react-router-dom';
import styles from './Product.scss';


export default function Product (props) {
    
    const {
        title,
        image,
        id
    } = props;
        
    return (
        <Link to={`/products/${id}`} className={styles.root}>
            <img className={styles.productimg} src={image.url} alt="Product picture"/>
            <h2 className={styles.title}> {title} </h2>
        </Link>
    );
}

