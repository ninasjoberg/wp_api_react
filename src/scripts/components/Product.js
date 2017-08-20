import {Link} from 'react-router-dom';
import styles from './product.scss';


export default class Product extends React.Component {
    render() {
        const {
            title,
            image,
            id
        } = this.props;
        
        return (
            <Link to={`/products/${id}`} className={styles.root}>
                <img className={styles.productimg} src={image.url} alt="Product picture"/>
                <h2 className={styles.title}> {title} </h2>
            </Link>
        );
    }
}

